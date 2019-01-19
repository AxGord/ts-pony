import ISignalBase from './ISignalBase';
import ListenerBase from './ListenerBase';

/**
 * SignalController
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: ban-types
export default class SignalController<L extends ListenerBase<Function>, S extends ISignalBase<Function, L>> {

	public readonly signal: S;
	protected _listener: L|null = null;
	protected _stop: boolean = false;

	/**
	 * constructor
	 */
	public constructor(signal: S) { this.signal = signal; }

	/**
	 * stop
	 */
	public stop(): void { this._stop = true; }

	public remove(): void { if (this._listener != null) this._listener.once = true; }

	protected destroy(): void {
		// @ts-ignore
		delete this.signal;
		delete this._listener;
		delete this._stop;
	}

}