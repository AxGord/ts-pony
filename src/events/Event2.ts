import Event0 from './Event0';
import Event1 from './Event1';
import Listener2 from './Listener2';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal2 from './Signal2';
import SignalBase2 from './SignalBase2';

/**
 * Event2
 * @author AxGord <axgord@gmail.com>
 */
export default class Event2<T1, T2> extends SignalBase2<T1, T2> {

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
	public dispatch(value1: T1, value2: T2): void { super.dispatch(value1, value2); }

	/**
	 * Dispatch set
	 */
	public dispatchSet(value: [T1, T2]): void { super.dispatchSet(value); }

	public get signal(): Signal2<T1, T2> { return this as any; }

	public toListener2(once: boolean = false): Listener2<T1, T2> {
		const l: Listener2<T1, T2> = new Listener2<T1, T2>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	public toListener3(once: boolean = false): Listener3<T1, T2, any> {
		const l: Listener3<T1, T2, any> = new Listener3<T1, T2, any>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	/**
	 * bind
	 */
	public bind1_(value: T1): Event1<T2> {
		const e = new Event1<T2>(true);
		e.signal.add(this.dispatch.bind(null, value), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind_2(value: T2): Event1<T1> {
		const e = new Event1<T1>(true);
		e.signal.add((v) => this.dispatch(v, value), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind12(value1: T1, value2: T2): Event0 {
		const e = new Event0(true);
		e.signal.add(this.dispatch.bind(null, value1, value2), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce1_(value: T1): Event1<T2> {
		const e = new Event1<T2>(false);
		e.signal.once(this.dispatch.bind(null, value), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce2_(value: T2): Event1<T1> {
		const e = new Event1<T1>(false);
		e.signal.once((v: T1) => this.dispatch(v, value), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce12(value1: T1, value2: T2): Event0 {
		const e = new Event0(false);
		e.signal.once(this.dispatch.bind(null, value1, value2), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

}