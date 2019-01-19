import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Listener2 from './Listener2';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalBase from './SignalBase';
import SignalController from './SignalController';

/**
 * SignalBase2
 * @author AxGord <axgord@gmail.com>
 */
export default class SignalBase2<T1, T2>
extends SignalBase<
	Listener2<T1, T2>,
	(v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void> {

	protected createListener(
		fn: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		context?: object|undefined, once: boolean = false): Listener2<T1, T2> {
		return new Listener2(fn, context, once);
	}

	/**
	 * Dispatch
	 */
	protected dispatch(value1: T1, value2: T2): void {
		this.callListeners((l) => l.call(value1, value2));
	}

	/**
	 * Dispatch set
	 */
	protected dispatchSet(value: [T1, T2]): void {
		this.callListeners((l) => l.call(value[0], value[1]));
	}

	protected get signal(): Signal2<T1, T2> {
		return this as any;
	}

	/**
	 * Add promise for once call signal
	 */
	protected promise(priority: number = 0): Promise<[T1, T2, SignalController<Listener2<T1, T2>, Signal2<T1, T2>>]> {
		return new Promise<[T1, T2, SignalController<Listener2<T1, T2>, Signal2<T1, T2>>]>(
			(resolve: (c: [T1, T2, SignalController<Listener2<T1, T2>, Signal2<T1, T2>>]) => void) =>
				this.once(
					(v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => resolve([v1, v2, c]),
					undefined,
					priority));
	}

	protected addEvent1(event: Event1<T1>, priority: number = 0): void {
		this.addListener(event.toListener2(), priority);
	}

	protected onceEvent1(event: Event1<T1>, priority: number = 0): void {
		this.addListener(event.toListener2(true), priority);
	}

	protected removeEvent1(event: Event1<T1>): void {
		this.removeListener(event.toListener2());
	}

	protected addEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		this.addListener(event.toListener2(), priority);
	}

	protected onceEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		this.addListener(event.toListener2(true), priority);
	}

	protected removeEvent2(event: Event2<T1, T2>): void {
		this.removeListener(event.toListener2());
	}

	protected connect1<R>(
		fn: (e: Event1<R>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce1<R>(
		fn: (e: Event1<R>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener2<T1, T2>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected convert1<R>(rule: (v1: T1, v2: T2) => R, priority: number = 0): Signal1<R> {
		const e = new Event1<R>(false);
		this.add((v1, v2) => e.dispatch(rule(v1, v2)), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convertOnce1<R>(rule: (v1: T1, v2: T2) => R, priority: number = 0): Signal1<R> {
		const e = new Event1<R>(false);
		this.once((v1, v2) => e.dispatch(rule(v1, v2)), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convert2<R1, R2>(rule: (v1: T1, v2: T2) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(false);
		this.add((v1, v2) => {
			const r: [R1, R2] = rule(v1, v2);
			e.dispatch(r[0], r[1]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convertOnce2<R1, R2>(rule: (v1: T1, v2: T2) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(false);
		this.once((v1, v2) => {
			const r: [R1, R2] = rule(v1, v2);
			e.dispatch(r[0], r[1]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convert3<R1, R2, R3>(rule: (v1: T1, v2: T2) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(false);
		this.add((v1, v2) => {
			const r: [R1, R2, R3] = rule(v1, v2);
			e.dispatch(r[0], r[1], r[2]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected convertOnce3<R1, R2, R3>(rule: (v1: T1, v2: T2) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(false);
		this.once((v1, v2) => {
			const r: [R1, R2, R3] = rule(v1, v2);
			e.dispatch(r[0], r[1], r[2]);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	/**
	 * filters
	 */
	protected filter1_(rule: (v: T1) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.add((a, b) => {
		 	if (rule(a)) e.dispatch(a, b);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce1_(rule: (v: T1) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.once((a, b) => {
			if (rule(a)) {
				e.dispatch(a, b);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter_2(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.add((a, b) => {
			if (rule(b)) e.dispatch(a, b);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce_2(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.once((a, b) => {
			if (rule(b)) {
				e.dispatch(a, b);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filter12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.add((a, b) => {
			if (rule(a, b)) e.dispatch(a, b);
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected filterOnce12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		const e = new SignalBase2<T1, T2>(false);
		this.once((a, b) => {
			if (rule(a, b)) {
				e.dispatch(a, b);
				e.destroy();
			}
		}, undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del1_(priority: number = 0): Signal1<T2> {
		const e = new Event1<T2>(false);
		this.add((a, b) => e.dispatch(b), undefined, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce1_(priority: number = 0): Signal1<T2> {
		const e = new Event1<T2>(false);
		this.once((a, b) => e.dispatch(b), undefined, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del_2(priority: number = 0): Signal1<T1> {
		const e = new Event1<T1>(false);
		this.addEvent1(e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce_2(priority: number = 0): Signal1<T1> {
		const e = new Event1<T1>(false);
		this.onceEvent1(e, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected del12(priority: number = 0): Signal0 {
		const e = new Event0(false);
		this.addEvent0(e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	protected delOnce12(priority: number = 0): Signal0 {
		const e = new Event0(false);
		this.onceEvent0(e, priority);
		this.once(e.destroy, e, priority);
		this.listenDestroy(e.destroy, e);
		return e.signal;
	}

	/**
	 * sub rules
	 */
	protected sub1_(rule: (v: T1) => boolean, priority: number = 0): Signal1<T2> {
		return this.filter1_(rule, priority).del1_();
	}

	protected subOnce1_(rule: (v: T1) => boolean, priority: number = 0): Signal1<T2> {
		return this.filterOnce1_(rule, priority).delOnce1_();
	}

	protected sub_2(rule: (v: T2) => boolean, priority: number = 0): Signal1<T1> {
		return this.filter_2(rule, priority).del_2();
	}

	protected subOnce_2(rule: (v: T2) => boolean, priority: number = 0): Signal1<T1> {
		return this.filterOnce_2(rule, priority).delOnce_2();
	}

	protected sub12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal0 {
		return this.filter12(rule, priority).del12();
	}

	protected subOnce12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal0 {
		return this.filterOnce12(rule, priority).delOnce12();
	}

}