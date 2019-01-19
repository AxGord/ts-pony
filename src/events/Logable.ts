import Event1 from './Event1';
import Signal1 from './Signal1';
import Tumbler from './Tumbler';

/**
 * Logable
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Logable extends Tumbler {

	protected readonly eventLog: Event1<string> = new Event1<string>();
	protected readonly eventError: Event1<Error> = new Event1<Error>();

	public readonly signalLog: Signal1<string> = this.eventLog.signal;
	public readonly signalError: Signal1<Error> = this.eventError.signal;

	private _startTime: number = 0;

	public constructor(enabled?: boolean) {
		super(enabled);
		this.regDestroy(this.logableDestroy, 20);
	}

	protected log(message: string): void {
		this.eventLog.dispatch(message);
	}

	protected error(error: Error): void {
		this.eventError.dispatch(error);
	}

	protected startTime(): void {
		this._startTime = Date.now();
	}

	protected endTime(message?: string): void {
		this.log((message ? message + ': ' : '') + ((Date.now() - this._startTime) / 1000).toFixed(3) + ' sec');
	}

	/**
	 * logableDestroy
	 */
	private logableDestroy(): void {
		this.eventLog.destroy();
		this.eventError.destroy();
		// @ts-ignore
		delete this.eventLog;
		// @ts-ignore
		delete this.eventError;
		// @ts-ignore
		delete this.signalLog;
		// @ts-ignore
		delete this.signalError;
		delete this._startTime;
	}

}