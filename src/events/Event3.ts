import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal3 from './Signal3';
import SignalBase3 from './SignalBase3';

/**
 * Event3
 * @author AxGord <axgord@gmail.com>
 */
export default class Event3<T1, T2, T3> extends SignalBase3<T1, T2, T3> {

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
	public dispatch(value1: T1, value2: T2, value3: T3): void {
		super.dispatch(value1, value2, value3);
	}

	/**
	 * Dispatch set
	 */
	public dispatchSet(values: [T1, T2, T3]): void {
		super.dispatchSet(values);
	}

	public get signal(): Signal3<T1, T2, T3> {
		return this as any;
	}

	public toListener3(once: boolean = false): Listener3<T1, T2, T3> {
		const l: Listener3<T1, T2, T3> = new Listener3<T1, T2, T3>(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	/**
	 * bind
	 */
	public bind1__(value: T1): Event2<T2, T3> {
		const e = new Event2<T2, T3>(true);
		e.signal.add(this.dispatch.bind(null, value), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind_2_(value: T2): Event2<T1, T3> {
		const e = new Event2<T1, T3>(true);
		e.signal.add((v1, v2) => this.dispatch(v1, value, v2), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind__3(value: T3): Event2<T1, T2> {
		const e = new Event2<T1, T2>(true);
		e.signal.add((v1, v2) => this.dispatch(v1, v2, value), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind12_(value1: T1, value2: T2): Event1<T3> {
		const e = new Event1<T3>(true);
		e.signal.add(this.dispatch.bind(null, value1, value2), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind1_3(value1: T1, value3: T3): Event1<T2> {
		const e = new Event1<T2>(true);
		e.signal.add((v) => this.dispatch(value1, v, value3), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind_23(value2: T2, value3: T3): Event1<T1> {
		const e = new Event1<T1>(true);
		e.signal.add((v) => this.dispatch(v, value2, value3), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind
	 */
	public bind123(value1: T1, value2: T2, value3: T3): Event0 {
		const e = new Event0(true);
		e.signal.add(this.dispatch.bind(null, value1, value2, value3), this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce1__(value: T1): Event2<T2, T3> {
		const e = new Event2<T2, T3>(false);
		e.signal.once(this.dispatch.bind(null, value), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce_2_(value: T2): Event2<T1, T3> {
		const e = new Event2<T1, T3>(false);
		e.signal.add((v1, v2) => this.dispatch(v1, value, v2), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce__3(value: T3): Event2<T1, T2> {
		const e = new Event2<T1, T2>(false);
		e.signal.add((v1, v2) => this.dispatch(v1, v2, value), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce12_(value1: T1, value2: T2): Event1<T3> {
		const e = new Event1<T3>(false);
		e.signal.add(this.dispatch.bind(null, value1, value2), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce1_3(value1: T1, value3: T3): Event1<T2> {
		const e = new Event1<T2>(false);
		e.signal.add((v) => this.dispatch(value1, v, value3), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce_23(value2: T2, value3: T3): Event1<T1> {
		const e = new Event1<T1>(false);
		e.signal.add((v) => this.dispatch(v, value2, value3), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * bind once
	 */
	public bindOnce123(value1: T1, value2: T2, value3: T3): Event0 {
		const e = new Event0(false);
		e.signal.add(this.dispatch.bind(null, value1, value2, value3), this);
		e.signal.once(e.destroy, this);
		this.listenDestroy(e.destroy, e);
		return e;
	}

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

}