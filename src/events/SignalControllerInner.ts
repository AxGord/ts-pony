import ISignalBase from './ISignalBase';
import ListenerBase from './ListenerBase';
import SignalController from './SignalController';

/**
 * SignalControllerInner
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: ban-types
export default class SignalControllerInner<L extends ListenerBase<Function>, S extends ISignalBase<Function, L>>
extends SignalController<L, S> {

	/**
	 * get stopState
	 */
	public get stopState(): boolean { return this._stop; }

	/**
	 * set listener
	 */
	public set listener(v: L) { this._listener = v; }

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

}