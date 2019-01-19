import Listener2 from './Listener2';
import Signal2 from './Signal2';

/**
 * Bindable
 * @author AxGord <axgord@gmail.com>
 */
export default class Bindable<T> extends Signal2<T, T> {

	private _value: T;

	/**
	 * constructor
	 */
	public constructor(value: T) {
		super(true);
		this._value = value;
	}

	/**
	 * set value
	 */
	public set value(v: T) {
		if (this._value != v) {
			const prev: T = this._value;
			this._value = v;
			this.dispatch(v, prev);
		}
	}

	/**
	 * get value
	 */
	public get value(): T { return this._value; }

	/**
	 * bjoin
	 */
	public bjoin<V, R>(b: Bindable<V>, f: (a: T, b: V) => R, priority1: number = 0, priority2: number = 0): Bindable<R> {
		const r = new Bindable<R>(f(this.value, b.value));
		const l = new Listener2<any, any>(() => r.value = f(this.value, b.value));
		this.addListener(l, priority1);
		b.addListener(l, priority2);
		return r;
	}

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

}