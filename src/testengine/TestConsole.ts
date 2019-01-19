import TestBase from './TestBase';
import TestRunner from './TestRunner';

/**
 * TestConsole
 * @author AxGord <axgord@gmail.com>
 */
export default class TestConsole extends TestRunner {

	// tslint:disable-next-line: no-unnecessary-initializer
	public constructor(list: object|undefined = undefined, finish: (() => void)|undefined = undefined) {
		super(finish);
		// tslint:disable-next-line: no-console
		this.signalLog.add((v) => console.log(v));
		this.on1(this.signalError, this.printError);
		if (list) this.run(list);
	}

	private printError(e: Error): void {
		// tslint:disable-next-line: no-console
		console.error(e.stack ? TestBase.stackFilter(e.stack) : e.message);
	}

	protected checkErrors(): void {
		if (this.errorCount > 0) return; // throw new Error('Have errors!');
		this.off1(this.signalError, this.printError);
		this.signalError.add((e) => {
			if (e.stack)
				e.stack = TestBase.stackFilter(e.stack);
			throw e;
		});
	}

}