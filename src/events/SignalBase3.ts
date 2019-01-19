import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalBase from './SignalBase';
import SignalController from './SignalController';

/**
 * SignalBase3
 * @author AxGord <axgord@gmail.com>
 */
export default class SignalBase3<T1, T2, T3>
extends SignalBase<
	Listener3<T1, T2, T3>, (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>,
	Signal3<T1, T2, T3>>) => void> {

	protected createListener(
		fn: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		context?: object|undefined,
		once: boolean = false): Listener3<T1, T2, T3> {
		return new Listener3<T1, T2, T3>(fn, context, once);
	}

	/**
	 * Dispatch
	 */
	protected dispatch(value1: T1, value2: T2, value3: T3): void {
		this.callListeners((l) => l.call(value1, value2, value3));
	}

	/**
	 * Dispatch set
	 */
	protected dispatchSet(values: [T1, T2, T3]): void {
		this.callListeners((l) => l.call(values[0], values[1], values[2]));
	}

	protected get signal(): Signal3<T1, T2, T3> {
		return this as any;
	}

	/**
	 * Add promise for once call signal
	 */
	protected promise(priority: number = 0):
		Promise<[T1, T2, T3, SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>]> {
		return new Promise<[T1, T2, T3, SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>]>(
			(resolve: (c: [T1, T2, T3, SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>]) => void) =>
				this.once(
					(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) =>
						resolve([v1, v2, v3, c]),
					undefined,
					priority));
	}

	protected addEvent1(event: Event1<T1>, priority: number = 0): void {
		this.addListener(event.toListener3(), priority);
	}

	protected onceEvent1(event: Event1<T1>, priority: number = 0): void {
		this.addListener(event.toListener3(true), priority);
	}

	protected removeEvent1(event: Event1<T1>): void {
		this.removeListener(event.toListener3());
	}

	protected addEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		this.addListener(event.toListener3(), priority);
	}

	protected onceEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		this.addListener(event.toListener3(true), priority);
	}

	protected removeEvent2(event: Event2<T1, T2>): void {
		this.removeListener(event.toListener3());
	}

	protected addEvent3(event: Event3<T1, T2, T3>, priority: number = 0): void {
		this.addListener(event.toListener3(), priority);
	}

	protected onceEvent3(event: Event3<T1, T2, T3>, priority: number = 0): void {
		this.addListener(event.toListener3(true), priority);
	}

	protected removeEvent3(event: Event3<T1, T2, T3>): void {
		this.removeListener(event.toListener3());
	}

	protected connect1<R>(
		fn: (e: Event1<R>) =>
			(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce1<R>(
		fn: (e: Event1<R>) =>
			(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect2<R1, R2>(
		fn: (e: Event2<R1, R2>) =>
			(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce2<R1, R2>(
		fn: (e: Event2<R1, R2>) =>
			(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>)
			=> (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce3<R1, R2, R3>(
			fn: (e: Event3<R1, R2, R3>) =>
				(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
			priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener3<T1, T2, T3>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	/**
	 * filters
	 */
	protected filter1__(rule: (v: T1) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(a)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce1__(rule: (v: T1) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(a)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter_2_(rule: (v: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(b)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce_2_(rule: (v: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(b)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter__3(rule: (v: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(c)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce__3(rule: (v: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(c)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(a, b)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(a, b)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(a, c)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(a, c)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(b, c)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(b, c)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.add((a, b, c) => {
			if (rule(a, b, c)) e.dispatch(a, b, c);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		const e = new SignalBase3<T1, T2, T3>(false);
		this.once((a, b, c) => {
			if (rule(a, b, c)) {
				e.dispatch(a, b, c);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	/**
	 * deletes
	 */
	protected del1__(priority: number = 0): Signal2<T2, T3> {
		const e = new Event2<T2, T3>(false);
		this.add((a, b, c) => e.dispatch(b, c), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce1__(priority: number = 0): Signal2<T2, T3> {
		const e = new Event2<T2, T3>(false);
		this.once((a, b, c) => e.dispatch(b, c), undefined, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del_2_(priority: number = 0): Signal2<T1, T3> {
		const e = new Event2<T1, T3>(false);
		this.add((a, b, c) => e.dispatch(a, c), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce_2_(priority: number = 0): Signal2<T1, T3> {
		const e = new Event2<T1, T3>(false);
		this.once((a, b, c) => e.dispatch(a, c), undefined, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del__3(priority: number = 0): Signal2<T1, T2> {
		const e = new Event2<T1, T2>(false);
		this.addEvent2(e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce__3(priority: number = 0): Signal2<T1, T2> {
		const e = new Event2<T1, T2>(false);
		this.onceEvent2(e, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del12_(priority: number = 0): Signal1<T3> {
		const e = new Event1<T3>(false);
		this.add((a, b, c) => e.dispatch(c), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce12_(priority: number = 0): Signal1<T3> {
		const e = new Event1<T3>(false);
		this.once((a, b, c) => e.dispatch(c), undefined, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del1_3(priority: number = 0): Signal1<T2> {
		const e = new Event1<T2>(false);
		this.add((a, b, c) => e.dispatch(b), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce1_3(priority: number = 0): Signal1<T2> {
		const e = new Event1<T2>(false);
		this.once((a, b, c) => e.dispatch(b), undefined, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del_23(priority: number = 0): Signal1<T1> {
		const e = new Event1<T1>(false);
		this.addEvent1(e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce_23(priority: number = 0): Signal1<T1> {
		const e = new Event1<T1>(false);
		this.onceEvent1(e, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del123(priority: number = 0): Signal0 {
		const e = new Event0(false);
		this.addEvent0(e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce123(priority: number = 0): Signal0 {
		const e = new Event0(false);
		this.onceEvent0(e, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convert1<R>(rule: (v1: T1, v2: T2, v3: T3) => R, priority: number = 0): Signal1<R> {
		const e = new Event1<R>(false);
		this.add((v1, v2, v3) => e.dispatch(rule(v1, v2, v3)), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convert2<R1, R2>(rule: (v1: T1, v2: T2, v3: T3) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(false);
		this.add((v1, v2, v3) => {
			const r: [R1, R2] = rule(v1, v2, v3);
			e.dispatch(r[0], r[1]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convert3<R1, R2, R3>(
		rule: (v1: T1, v2: T2, v3: T3) => [R1, R2, R3],
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new SignalBase3<R1, R2, R3>(false);
		this.add((v1, v2, v3) => {
			const r: [R1, R2, R3] = rule(v1, v2, v3);
			e.dispatch(r[0], r[1], r[2]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	/**
	 * sub rules
	 */

	protected sub1__(rule: (v: T1) => boolean, priority: number = 0): Signal2<T2, T3> {
		return this.filter1__(rule, priority).del1__();
	}

	protected subOnce1__(rule: (v: T1) => boolean, priority: number = 0): Signal2<T2, T3> {
		return this.filterOnce1__(rule, priority).delOnce1__();
	}

	protected sub_2_(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T3> {
		return this.filter_2_(rule, priority).del_2_();
	}

	protected subOnce_2_(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T3> {
		return this.filterOnce_2_(rule, priority).delOnce_2_();
	}

	protected sub__3(rule: (v: T3) => boolean, priority: number = 0): Signal2<T1, T2> {
		return this.filter__3(rule, priority).del__3();
	}

	protected subOnce__3(rule: (v: T3) => boolean, priority: number = 0): Signal2<T1, T2> {
		return this.filterOnce__3(rule, priority).delOnce__3();
	}

	protected sub12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal1<T3> {
		return this.filter12_(rule, priority).del12_();
	}

	protected subOnce12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal1<T3> {
		return this.filterOnce12_(rule, priority).delOnce12_();
	}

	protected sub1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal1<T2> {
		return this.filter1_3(rule, priority).del1_3();
	}

	protected subOnce1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal1<T2> {
		return this.filterOnce1_3(rule, priority).delOnce1_3();
	}

	protected sub_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal1<T1> {
		return this.filter_23(rule, priority).del_23();
	}

	protected subOnce_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal1<T1> {
		return this.filterOnce_23(rule, priority).delOnce_23();
	}

	protected sub123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal0 {
		return this.filter123(rule, priority).del123();
	}

	protected subOnce123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal0 {
		return this.filterOnce123(rule, priority).delOnce123();
	}

}