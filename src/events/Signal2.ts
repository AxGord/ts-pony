import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import ISignalBase from './ISignalBase';
import Listener2 from './Listener2';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal3 from './Signal3';
import SignalBase2 from './SignalBase2';
import SignalController from './SignalController';

/**
 * Signal2
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Signal2<T1, T2> extends SignalBase2<T1, T2>
implements ISignalBase<
	(v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void, Listener2<T1, T2>> {

	/**
	 * Add signal listener
	 */
	public add(
		fn: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.add(fn, context, priority);
	}

	/**
	 * Add signal listener for once call
	 */
	public once(
		fn: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.once(fn, context, priority);
	}

	/**
	 * Add promise for once call signal
	 */
	public promise(priority: number = 0): Promise<[T1, T2, SignalController<Listener2<T1, T2>, Signal2<T1, T2>>]> {
		return super.promise(priority);
	}

	/**
	 * Remove signal listener
	 */
	public remove(
		fn: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		context?: object|undefined): void {
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

	public addEvent1(event: Event1<T1>, priority: number = 0): void {
		super.addEvent1(event, priority);
	}

	public onceEvent1(event: Event1<T1>, priority: number = 0): void {
		super.onceEvent1(event, priority);
	}

	public removeEvent1(event: Event1<T1>): void {
		super.removeEvent1(event);
	}

	public addEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		super.addEvent2(event, priority);
	}

	public onceEvent2(event: Event2<T1, T2>, priority: number = 0): void {
		super.onceEvent2(event, priority);
	}

	public removeEvent2(event: Event2<T1, T2>): void {
		super.removeEvent2(event);
	}

	public addListener(listener: Listener2<T1, T2>, priority: number = 0): void {
		super.addListener(listener, priority);
	}

	public removeListener(listener: Listener2<T1, T2>): void {
		super.removeListener(listener);
	}

	public removeAll(): void { super.removeAll(); }

	/**
	 * filters
	 */
	public filter1_(rule: (v: T1) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filter1_(rule, priority);
	}

	public filterOnce1_(rule: (v: T1) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filterOnce1_(rule, priority);
	}

	public filter_2(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filter_2(rule, priority);
	}

	public filterOnce_2(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filterOnce_2(rule, priority);
	}

	public filter12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filter12(rule, priority);
	}

	public filterOnce12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.filterOnce12(rule, priority);
	}

	public del1_(priority: number = 0): Signal1<T2> {
		return super.del1_(priority);
	}

	public delOnce1_(priority: number = 0): Signal1<T2> {
		return super.delOnce1_(priority);
	}

	public del_2(priority: number = 0): Signal1<T1> {
		return super.del_2(priority);
	}

	public delOnce_2(priority: number = 0): Signal1<T1> {
		return super.delOnce_2(priority);
	}

	public del12(priority: number = 0): Signal0 {
		return super.del12(priority);
	}

	public delOnce12(priority: number = 0): Signal0 {
		return super.delOnce12(priority);
	}

	public convert1<R>(rule: (v1: T1, v2: T2) => R, priority: number = 0): Signal1<R> {
		return super.convert1(rule, priority);
	}

	public convert2<R1, R2>(rule: (v1: T1, v2: T2) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		return super.convert2(rule, priority);
	}

	public convert3<R1, R2, R3>(rule: (v1: T1, v2: T2) => [R1, R2, R3], priority: number = 0): Signal3<R1, R2, R3> {
		return super.convert3(rule, priority);
	}

	/**
	 * sub rules
	 */
	public sub1_(rule: (v: T1) => boolean, priority: number = 0): Signal1<T2> {
		return super.sub1_(rule, priority);
	}

	public subOnce1_(rule: (v: T1) => boolean, priority: number = 0): Signal1<T2> {
		return super.subOnce1_(rule, priority);
	}

	public sub_2(rule: (v: T2) => boolean, priority: number = 0): Signal1<T1> {
		return super.sub_2(rule, priority);
	}

	public subOnce_2(rule: (v: T2) => boolean, priority: number = 0): Signal1<T1> {
		return super.subOnce_2(rule, priority);
	}

	public sub12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal0 {
		return super.sub12(rule, priority);
	}

	public subOnce12(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal0 {
		return super.subOnce12(rule, priority);
	}

}