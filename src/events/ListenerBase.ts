import ISignalBase from './ISignalBase';
import SignalController from './SignalController';

/**
 * ListenerBase
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: ban-types
export default class ListenerBase<T extends Function> {

	public enabled: boolean = true;
	public once: boolean;
	public readonly fn: T;
	protected _csc: SignalController<ListenerBase<T>, ISignalBase<T, ListenerBase<T>>>|null = null;
	public readonly context?: object|undefined;

	constructor(fn: T, context?: object|undefined, once: boolean = false) {
		this.fn = fn;
		this.context = context;
		this.once = once;
	}

	/**
	 * set cec - current signal controller
	 */
	public set csc(v: SignalController<ListenerBase<T>, ISignalBase<T, ListenerBase<T>>>|null) { this._csc = v; }

	/**
	 * destroy
	 */
	public destroy() {
		this.once = true; // for remove from all list after call
		// @ts-ignore
		delete this.fn;
		// @ts-ignore
		delete this.context;
		delete this._csc;
		delete this.enabled;
	}

	/**
	 * enable
	 */
	public enable(): void { this.enabled = true; }

	/**
	 * disable
	 */
	public disable(): void { this.enabled = false; }

	/**
	 * switch
	 */
	public switch(): void { this.enabled = !this.enabled; }

}