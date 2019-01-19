import ListenerBase from './ListenerBase';
import Signal3 from './Signal3';
import SignalController from './SignalController';

/**
 * Listener3
 * @author AxGord <axgord@gmail.com>
 */
export default class Listener3<T1, T2, T3>
extends ListenerBase<
	(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void> {

	/**
	 * call
	 * @param value1 listener call first argument
	 * @param value2 listener call second argument
	 * @param value3 listener call third argument
	 */
	public call(value1: T1, value2: T2, value3: T3): void {
		if (this.enabled && this.fn)
			this.fn.call(
				this.context, value1, value2, value3, this._csc as SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>);
	}

}