import ListenerBase from './ListenerBase';
import Signal1 from './Signal1';
import SignalController from './SignalController';

/**
 * Listener1
 * @author AxGord <axgord@gmail.com>
 */
export default class Listener1<T> extends ListenerBase<(v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void> {

	/**
	 * call
	 * @param value listener call argument
	 */
	public call(value: T): void {
		if (this.enabled && this.fn)
			this.fn.call(this.context, value, this._csc as SignalController<Listener1<T>, Signal1<T>>);
	}

}