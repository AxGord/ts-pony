import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Listener1 from './Listener1';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalBase from './SignalBase';
import SignalController from './SignalController';

/**
 * SignalBase1
 * @author AxGord <axgord@gmail.com>
 */
export default class SignalBase1<T>
extends SignalBase<Listener1<T>, (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void> {

	/**
	 * Dispatch
	 */
	protected dispatch(value1: T): void { this.callListeners((l) => l.call(value1)); }

	protected get signal(): Signal1<T> { return this as any; }

	/**
	 * Add promise for once call signal
	 */
	protected promise(priority: number = 0): Promise<[T, SignalController<Listener1<T>, Signal1<T>>]> {
		return new Promise<[T, SignalController<Listener1<T>, Signal1<T>>]>(
			(resolve: (c: [T, SignalController<Listener1<T>, Signal1<T>>]) => void) =>
				this.once((v: T, c: SignalController<Listener1<T>, Signal1<T>>) => resolve([v, c]), undefined, priority));
	}

	protected createListener(
		fn: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		context?: object|undefined,
		once: boolean = false): Listener1<T> {
		return new Listener1(fn, context, once);
	}

	protected addEvent1(event: Event1<T>, priority: number = 0): void {
		this.addListener(event.toListener1(), priority);
	}

	protected onceEvent1(event: Event1<T>, priority: number = 0): void {
		this.addListener(event.toListener1(true), priority);
	}

	protected removeEvent1(event: Event1<T>): void {
		this.removeListener(event.toListener1());
	}

	protected connect1<R>(
		fn: (e: Event1<R>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce1<R>(
		fn: (e: Event1<R>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener1<T>(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected convert1<R>(rule: (v: T) => R, priority: number = 0): Signal1<R> {
		return this.connect1((e) => (v) => e.dispatch(rule(v)), priority);
	}

	protected convertOnce1<R>(rule: (v: T) => R, priority: number = 0): Signal1<R> {
		return this.connectOnce1((e) => (v) => e.dispatch(rule(v)), priority);
	}

	protected waitConvert1<R>(rule: (v: T, cb: (r: R) => void) => void, priority: number = 0): Signal1<R> {
		return this.connect1((e) => (v) => rule(v, (r) => e.dispatch(r)), priority);
	}

	protected waitConvertOnce1<R>(rule: (v: T, cb: (r: R) => void) => void, priority: number = 0): Signal1<R> {
		return this.connectOnce1((e) => (v) => rule(v, (r) => e.dispatch(r)), priority);
	}

	protected convert2<R1, R2>(rule: (v: T) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		return this.connect2((e) => (v) => e.dispatchSet(rule(v)), priority);
	}

	protected convertOnce2<R1, R2>(rule: (v: T) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		return this.connectOnce2((e) => (v) => e.dispatchSet(rule(v)), priority);
	}

	protected waitConvert2<R1, R2>(
		rule: (v: T, cb: (r1: R1, r2: R2) => void) => void,
		priority: number = 0): Signal2<R1, R2> {
		return this.connect2((e) => (v) => rule(v, (r1, r2) => e.dispatch(r1, r2)), priority);
	}

	protected waitConvertOnce2<R1, R2>(
		rule: (v: T, cb: (r1: R1, r2: R2) => void) => void,
		priority: number = 0): Signal2<R1, R2> {
		return this.connectOnce2((e) => (v) => rule(v, (r1, r2) => e.dispatch(r1, r2)), priority);
	}

	protected convert3<R1, R2, R3>(rule: (v: T) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		return this.connect3((e) => (v) => e.dispatchSet(rule(v)), priority);
	}

	protected convertOnce3<R1, R2, R3>(rule: (v: T) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		return this.connectOnce3((e) => (v) => e.dispatchSet(rule(v)), priority);
	}

	protected waitConvert3<R1, R2, R3>(
		rule: (v: T, cb: (r1: R1, r2: R2, r3: R3) => void) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		return this.connect3((e) => (v) => rule(v, (r1, r2, r3) => e.dispatch(r1, r2, r3)), priority);
	}

	protected waitConvertOnce3<R1, R2, R3>(
		rule: (v: T, cb: (r1: R1, r2: R2, r3: R3) => void) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		return this.connectOnce3((e) => (v) => rule(v, (r1, r2, r3) => e.dispatch(r1, r2, r3)), priority);
	}

	/**
	 * filters
	 */
	protected filter1(rule: (v: T) => boolean, priority: number = 0, context?: object|undefined): Signal1<T> {
		return this.connect1((e) => (v) => { if (rule.call(context, v)) e.dispatch(v); }, priority);
	}

	protected filterOnce1(rule: (v: T) => boolean, priority: number = 0, context?: object|undefined): Signal1<T> {
		return this.connectOnce1((e) => (v) => { if (rule.call(context, v)) e.dispatch(v); }, priority);
	}

	protected del1(priority: number = 0): Signal0 {
		return this.connect0((e) => e.dispatch.bind(e), priority);
	}

	protected delOnce1(priority: number = 0): Signal0 {
		return this.connectOnce0((e) => e.dispatch.bind(e), priority);
	}

	/**
	 * sub rule
	 */
	protected sub1(rule: (v: T) => boolean, priority: number = 0, context?: object): Signal0 {
		return this.connect0((e) => (v) => { if (rule.call(context, v)) e.dispatch(); }, priority);
	}

	protected subOnce1(rule: (v: T) => boolean, priority: number = 0, context?: object): Signal0 {
		return this.connectOnce0((e) => (v) => { if (rule.call(context, v)) e.dispatch(); }, priority);
	}

	// protected join1<V>(s:Signal1<V>, priority1:number = 0, priority2:number = 0):Signal2<T|null, V|null> {
	// 	let e = new Event2<T|null, V|null>(false);
	// 	let v1:T|null = null;
	// 	let v2:V|null = null;
	// 	this.add(v => {
	// 		v1 = v;
	// 		e.dispatch(v1, v2);
	// 	}, undefined, priority1);
	// 	s.add(v => {
	// 		v2 = v;
	// 		e.dispatch(v1, v2);
	// 	}, undefined, priority2);
	// 	return e.signal;
	// }

}