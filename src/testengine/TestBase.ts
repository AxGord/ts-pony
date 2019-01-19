import DeltaTime from '../time/DeltaTime';
import DTimer from '../time/DTimer';
import ArrayUtils from '../utils/ArrayUtils';
import TestCounter from './TestCounter';

/**
 * TestBase
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class TestBase extends TestCounter {

	private tname: string = '';
	private tmethod: string = '';
	private throwCut: boolean = false;
	private proto: any = null;
	private parentproto: any = null;
	private readonly asyncTests: string[] = [];
	private timeout: DTimer = new DTimer(5000, 0, true);

	private finishRun(): void {}

	public run(finishRun: () => void): void {
		this.finishRun = finishRun;
		this.proto = Object.getPrototypeOf(this);
		this.parentproto = Object.getPrototypeOf(this.proto);
		this.tname = this.proto.constructor.name;
		this.log(this.tname);
		this.on1(this.timeout.signalComplete, this.timeoutHandler);

		Object.getOwnPropertyNames(this.parentproto).forEach((name) => {
			if (name.substr(0, 4) === 'test') {
				this.runMethod(name);
			} else if (name.substr(0, 9) === 'asyncTest') {
				this.asyncTests.push(name);
			}
		});

		Object.getOwnPropertyNames(this.proto).forEach((name) => {
			if (name.substr(0, 4) === 'test') {
				this.runMethod(name);
			} else if (name.substr(0, 9) === 'asyncTest') {
				this.asyncTests.push(name);
			}
		});
		this.runNextAsyncTest();
	}

	private runMethod(name: string): void {
		this.tmethod = name;
		try {

			if (this.proto.before != null)
				this.proto.before.call(this);
			else if (this.parentproto.before != null)
				this.parentproto.before.call(this);
			if (this.proto[name])
				this.proto[name].call(this);
			else
				this.parentproto[name].call(this);
			this.logState(name, true);
		} catch (e) {
			this.logState(name, false);
			if (this.throwCut && e.stack != null) {
				this.throwCut = false;
				e.stack = TestBase.stackFilter(e.stack);
			}
			this.eventError.dispatch(e);
		}
	}

	private timeoutHandler(): void {
		this.error(new Error('Timeout: ' + this.tname + '.' + this.tmethod));
		this.failedfinish();
	}

	private nextTick(fn: () => void): void {
		this.once1(DeltaTime.signalFixedUpdate, fn);
	}

	private runAsyncMethod(name: string): void {
		this.tmethod = name;
		this.timeout.start();
		let completed: boolean = false;
		try {
			if (this.proto.before != null)
				this.proto.before.call(this);
			else if (this.parentproto.before != null)
				this.parentproto.before.call(this);
			const p = this.proto[name] ? this.proto[name].call(this) : this.parentproto[name].call(this);
			p.then(() => {
				if (completed) {
					this.error(new Error('Second complete detected: ' + this.tname + '.' + name));
					this.logState(this.tmethod, false); // for error counter
				} else {
					completed = true;
					this.timeout.stop();
					this.nextTick(this.finish);
				}
			})
			.catch((error: Error) => {
				this.error(error);
				if (completed) {
					this.error(new Error('Second complete detected: ' + this.tname + '.' + name));
					this.logState(this.tmethod, false); // for error counter
				} else {
					completed = true;
					this.timeout.stop();
					this.nextTick(this.failedfinish);
				}
			});
		} catch (e) {
			if (!completed) {
				this.logState(name, false);
				if (this.throwCut && e.stack != null) {
					this.throwCut = false;
					e.stack = TestBase.stackFilter(e.stack);
				}
				this.eventError.dispatch(e);
			} else {
				throw e;
			}
		}
	}

	protected finish() {
		this.logState(this.tmethod, true);
		this.runNextAsyncTest();
	}

	protected failedfinish() {
		this.logState(this.tmethod, false);
		this.runNextAsyncTest();
	}

	private runNextAsyncTest(): void {
		if (this.asyncTests.length == 0) {
			this.finishRun();
		} else {
			this.runAsyncMethod(this.asyncTests.shift() as string);
		}
	}

	private logState(name: string, ok: boolean): void {
		this.log('\t' + name + ' - ' + (ok ? 'ok' : 'error'));
		if (ok)
			this._okCount++;
		else
			this._errorCount++;
		this._count++;
	}

	protected equals<T>(a: T, b: T): void {
		if (a instanceof Array && b instanceof Array) {
			if (!ArrayUtils.equals(a, b))
				this.notequalError(a, b);
		} else if (a != b) {
			this.notequalError(a, b);
		}
	}

	protected isTrue(value: boolean): void {
		if (!value) this._error(value, 'not true');
	}

	protected isFalse(value: boolean): void {
		if (value) this._error(value, 'not false');
	}

	private notequalError<T>(a: T, b: T): void {
		this._error(a, 'not equals', b);
	}

	private _error<T>(a: T, t: string, b: T|null = null): void {
		this.throwCut = true;
		throw new Error(a + ' ' + t + (b != null ? (' ' + b) : '') + this.pathMessage);
	}

	private get pathMessage(): string {
		return ' in ' + this.tname + '.' + this.tmethod + '()';
	}

	public static stackFilter(stack: string): string {
		// Remove utility calls from stack
		let a: string[] = stack.split('\n');
		// let f:string = a.shift() as string;
		// a.shift();
		// a.shift();
		// a.unshift(f);
		a = a.filter((s: string) =>
			!s.includes('/TestBase') &&
			!s.includes('/TestRunner') &&
			!s.includes('/next_tick.js') &&
			!s.includes('events.js') &&
			!s.includes('_stream_readable.js') &&
			!s.includes('at Generator.next'),
		);
		return a.join('\n');
	}

}