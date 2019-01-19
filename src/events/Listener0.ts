import ListenerBase from './ListenerBase';
import Signal0 from './Signal0';
import SignalController from './SignalController';

/**
 * Listener0
 * @author AxGord <axgord@gmail.com>
 */
export default class Listener0 extends ListenerBase<(c: SignalController<Listener0, Signal0>) => void> {

	/**
	 * call
	 */
	public call(): void {
		if (this.enabled && this.fn) this.fn.call(this.context, this._csc as SignalController<Listener0, Signal0>);
	}

}