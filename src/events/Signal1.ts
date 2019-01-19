import Event0 from './Event0';
import Event1 from './Event1';
import ISignalBase from './ISignalBase';
import Listener1 from './Listener1';
import Signal0 from './Signal0';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalBase1 from './SignalBase1';
import SignalController from './SignalController';

/**
 * Signal1
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Signal1<T> extends SignalBase1<T>
implements ISignalBase<(v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void, Listener1<T>> {

	/**
	 * Add signal listener
	 */
	public add(
		fn: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.add(fn, context, priority);
	}

	/**
	 * Add signal listener for once call
	 */
	public once(
		fn: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.once(fn, context, priority);
	}

	/**
	 * Add promise for once call signal
	 */
	public promise(priority: number = 0): Promise<[T, SignalController<Listener1<T>, Signal1<T>>]> {
		return super.promise(priority);
	}

	/**
	 * Remove signal listener
	 */
	public remove(fn: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void, context?: object|undefined): void {
		super.remove(fn, context);
	}

	public addEvent0(event: Event0, priority: number = 0): void {
		super.addEvent0(event, priority);
	}

	public onceEvent0(event: Event0, priority: number = 0): void {
		super.onceEvent0(event, priority);
	}

	public removeEvent0(event: Event0): void {
		super.removeEvent0(event);
	}

	public addEvent1(event: Event1<T>, priority: number = 0): void {
		super.addEvent1(event, priority);
	}

	public onceEvent1(event: Event1<T>, priority: number = 0): void {
		super.onceEvent1(event, priority);
	}

	public removeEvent1(event: Event1<T>): void {
		super.removeEvent1(event);
	}

	public addListener(listener: Listener1<T>, priority: number = 0): void {
		super.addListener(listener, priority);
	}

	public removeListener(listener: Listener1<T>): void {
		super.removeListener(listener);
	}

	public convert1<R>(rule: (v: T) => R, priority: number = 0): Signal1<R> {
		return super.convert1(rule, priority);
	}

	public convertOnce1<R>(rule: (v: T) => R, priority: number = 0): Signal1<R> {
		return super.convertOnce1(rule, priority);
	}

	public waitConvert1<R>(rule: (v: T, cb: (r: R) => void) => void, priority: number = 0): Signal1<R> {
		return super.waitConvert1(rule, priority);
	}

	public convert2<R1, R2>(rule: (v: T) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		return super.convert2(rule, priority);
	}

	public convert3<R1, R2, R3>(rule: (v: T) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		return this.convert3(rule, priority);
	}

	/**
	 * filter
	 */
	public filter1(rule: (v: T) => boolean, priority: number = 0, context?: object|undefined): Signal1<T> {
		return super.filter1(rule, priority, context);
	}

	/**
	 * filter once
	 */
	public filterOnce1(rule: (v: T) => boolean, priority: number = 0, context?: object|undefined): Signal1<T> {
		return super.filterOnce1(rule, priority, context);
	}

	public del1(priority: number = 0): Signal0 {
		return super.del1(priority);
	}

	public delOnce1(priority: number = 0): Signal0 {
		return super.delOnce1(priority);
	}

	/**
	 * sub rule
	 */
	public sub1(rule: (v: T) => boolean, priority: number = 0): Signal0 {
		return super.sub1(rule, priority);
	}

	/**
	 * sub once rule
	 */
	public subOnce1(rule: (v: T) => boolean, priority: number = 0): Signal0 {
		return super.subOnce1(rule, priority);
	}

	// public join1<V>(s:Signal1<V>, priority1:number = 0, priority2:number = 0):Signal2<T|null, V|null> {
	// 	return super.join1(s, priority1, priority2);
	// }

	public removeAll(): void { super.removeAll(); }

}