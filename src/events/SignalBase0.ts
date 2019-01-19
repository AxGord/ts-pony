import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Listener0 from './Listener0';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalBase from './SignalBase';
import SignalController from './SignalController';

/**
 * SignalBase0
 * @author AxGord <axgord@gmail.com>
 */
export default class SignalBase0 extends SignalBase<Listener0, (c: SignalController<Listener0, Signal0>) => void> {

	protected createListener(
		fn: (c: SignalController<Listener0, Signal0>) => void,
		context?: object|undefined,
		once: boolean = false): Listener0 {
		return new Listener0(fn, context, once);
	}

	protected or(s: Signal0): Signal0 {
		const e: Event0 = new Event0();
		this.addEvent0(e);
		s.addEvent0(e);
		return e.signal;
	}

	/**
	 * Add promise for once call signal
	 */
	protected promise(priority: number = 0): Promise<SignalController<Listener0, Signal0>> {
		return new Promise<SignalController<Listener0, Signal0>>(
			(resolve: (c: SignalController<Listener0, Signal0>) => void) =>
				this.once((c: SignalController<Listener0, Signal0>) => resolve(c), undefined, priority));
	}

	protected connect1<R>(
		fn: (e: Event1<R>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener0(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce1<R>(
		fn: (e: Event1<R>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal1<R> {
		const e = new Event1<R>(this.watched);
		e.connectChild([this, new Listener0(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener0(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce2<R1, R2>(
		fn: (e: Event2<R1, R2>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal2<R1, R2> {
		const e = new Event2<R1, R2>(this.watched);
		e.connectChild([this, new Listener0(fn(e), undefined, true), priority]);
		return e.signal;
	}

	protected connect3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener0(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce3<R1, R2, R3>(
		fn: (e: Event3<R1, R2, R3>) => (c: SignalController<Listener0, Signal0>) => void,
		priority: number = 0): Signal3<R1, R2, R3> {
		const e = new Event3<R1, R2, R3>(this.watched);
		e.connectChild([this, new Listener0(fn(e), undefined, true), priority]);
		return e.signal;
	}

}