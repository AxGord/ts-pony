import Event0 from './Event0';
import Listener1 from './Listener1';
import Listener2 from './Listener2';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import SignalBase1 from './SignalBase1';

/**
 * Event1
 * @author AxGord <axgord@gmail.com>
 */
export default class Event1<T> extends SignalBase1<T> {

	/**
	 * constructor
	 */
	public constructor(watched: boolean = true) { super(watched); }

	public get have(): boolean { return this._have; }
	public get signalLost(): Signal0 { return this._signalLost; }
	public get signalTake(): Signal0 { return this._signalTake; }
	public get signalDestroy(): Signal0 { return this._signalDestroy as Signal0; }

	/**
	 * Dispatch
	 */
	public dispatch(value: T): void { this.callListeners((l) => l.call(value)); }

	public get signal(): Signal1<T> { return this as any; }

	public toListener1(once: boolean = false): Listener1<T> {
		const l: Listener1<T> = new Listener1<T>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	public toListener2(once: boolean = false): Listener2<T, any> {
		const l: Listener2<T, any> = new Listener2<T, any>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	public toListener3(once: boolean = false): Listener3<T, any, any> {
		const l: Listener3<T, any, any> = new Listener3<T, any, any>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	/**
	 * bind
	 */
	public bind1(value: T): Event0 {
		const e = new Event0(true);
		e.signal.add(this.dispatch.bind(null, value), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce1(value: T): Event0 {
		const e = new Event0(false);
		e.signal.once(this.dispatch.bind(null, value), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

}