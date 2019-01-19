import ListenerBase from './ListenerBase';
import Signal2 from './Signal2';
import SignalController from './SignalController';

/**
 * Listener2
 * @author AxGord <axgord@gmail.com>
 */
export default class Listener2<T1, T2>
extends ListenerBase<(v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void> {

	/**
	 * call
	 * @param value1 listener call first argument
	 * @param value2 listener call second argument
	 */
	public call(value1: T1, value2: T2): void {
		if (this.enabled && this.fn)
			this.fn.call(this.context, value1, value2, this._csc as SignalController<Listener2<T1, T2>, Signal2<T1, T2>>);
	}

}