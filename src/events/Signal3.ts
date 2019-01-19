import Event0 from './Event0';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import ISignalBase from './ISignalBase';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import SignalBase3 from './SignalBase3';
import SignalController from './SignalController';

/**
 * Signal3
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Signal3<T1, T2, T3> extends SignalBase3<T1, T2, T3>
implements ISignalBase<
	(v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
	Listener3<T1, T2, T3>> {

	/**
	 * Add signal listener
	 */
	public add(
		fn: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.add(fn, context, priority);
	}

	/**
	 * Add signal listener for once call
	 */
	public once(
		fn: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.once(fn, context, priority);
	}

	/**
	 * Add promise for once call signal
	 */
	public promise(priority: number = 0): Promise<
		[T1, T2, T3, SignalController<Listener3<T1, T2, T3>,
		Signal3<T1, T2, T3>>]> {
		return super.promise(priority);
	}

	/**
	 * Remove signal listener
	 */
	public remove(
		fn: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
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

	public addEvent3(event: Event3<T1, T2, T3>, priority: number = 0): void {
		super.addEvent3(event, priority);
	}

	public onceEvent3(event: Event3<T1, T2, T3>, priority: number = 0): void {
		super.onceEvent3(event, priority);
	}

	public removeEvent3(event: Event3<T1, T2, T3>): void {
		super.removeEvent3(event);
	}

	public addListener(listener: Listener3<T1, T2, T3>, priority: number = 0): void {
		super.addListener(listener, priority);
	}

	public removeListener(listener: Listener3<T1, T2, T3>): void {
		super.removeListener(listener);
	}

	public removeAll(): void { super.removeAll(); }

	public convert1<R>(rule: (v1: T1, v2: T2, v3: T3) => R, priority: number = 0): Signal1<R> {
		return super.convert1(rule, priority);
	}

	public convert2<R1, R2>(rule: (v1: T1, v2: T2, v3: T3) => [R1, R2], priority: number = 0): Signal2<R1, R2> {
		return super.convert2(rule, priority);
	}

	public convert3<R1, R2, R3>(
		rule: (v1: T1, v2: T2, v3: T3) => [R1, R2, R3],
		priority: number = 0): Signal3<R1, R2, R3> {
		return super.convert3(rule, priority);
	}

	/**
	 * filters
	 */
	public filter1__(rule: (v: T1) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter1__(rule, priority);
	}

	public filterOnce1__(rule: (v: T1) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce1__(rule, priority);
	}

	public filter_2_(rule: (v: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter_2_(rule, priority);
	}

	public filterOnce_2_(rule: (v: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce_2_(rule, priority);
	}

	public filter__3(rule: (v: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter__3(rule, priority);
	}

	public filterOnce__3(rule: (v: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce__3(rule, priority);
	}

	public filter12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter12_(rule, priority);
	}

	public filterOnce12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce12_(rule, priority);
	}

	public filter1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter1_3(rule, priority);
	}

	public filterOnce1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce1_3(rule, priority);
	}

	public filter_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter_23(rule, priority);
	}

	public filterOnce_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce_23(rule, priority);
	}

	public filter123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filter123(rule, priority);
	}

	public filterOnce123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal3<T1, T2, T3> {
		return super.filterOnce123(rule, priority);
	}

	/**
	 * deletes
	 */
	public del1__(priority: number = 0): Signal2<T2, T3> {
		return super.del1__(priority);
	}

	public delOnce1__(priority: number = 0): Signal2<T2, T3> {
		return super.delOnce1__(priority);
	}

	public del_2_(priority: number = 0): Signal2<T1, T3> {
		return super.del_2_(priority);
	}

	public delOnce_2_(priority: number = 0): Signal2<T1, T3> {
		return super.delOnce_2_(priority);
	}

	public del__3(priority: number = 0): Signal2<T1, T2> {
		return super.del__3(priority);
	}

	public delOnce__3(priority: number = 0): Signal2<T1, T2> {
		return super.delOnce__3(priority);
	}

	public del12_(priority: number = 0): Signal1<T3> {
		return super.del12_(priority);
	}

	public delOnce12_(priority: number = 0): Signal1<T3> {
		return super.delOnce12_(priority);
	}

	public del1_3(priority: number = 0): Signal1<T2> {
		return super.del1_3(priority);
	}

	public delOnce1_3(priority: number = 0): Signal1<T2> {
		return super.delOnce1_3(priority);
	}

	public del_23(priority: number = 0): Signal1<T1> {
		return super.del_23(priority);
	}

	public delOnce_23(priority: number = 0): Signal1<T1> {
		return super.delOnce_23(priority);
	}

	public del123(priority: number = 0): Signal0 {
		return super.del123(priority);
	}

	public delOnce123(priority: number = 0): Signal0 {
		return super.delOnce123(priority);
	}

	/**
	 * sub rules
	 */
	public sub1__(rule: (v: T1) => boolean, priority: number = 0): Signal2<T2, T3> {
		return super.sub1__(rule, priority);
	}

	public subOnce1__(rule: (v: T1) => boolean, priority: number = 0): Signal2<T2, T3> {
		return super.subOnce1__(rule, priority);
	}

	public sub_2_(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T3> {
		return super.sub_2_(rule, priority);
	}

	public subOnce_2_(rule: (v: T2) => boolean, priority: number = 0): Signal2<T1, T3> {
		return super.subOnce_2_(rule, priority);
	}

	public sub__3(rule: (v: T3) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.sub__3(rule, priority);
	}

	public subOnce__3(rule: (v: T3) => boolean, priority: number = 0): Signal2<T1, T2> {
		return super.subOnce__3(rule, priority);
	}

	public sub12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal1<T3> {
		return super.sub12_(rule, priority);
	}

	public subOnce12_(rule: (a: T1, b: T2) => boolean, priority: number = 0): Signal1<T3> {
		return super.subOnce12_(rule, priority);
	}

	public sub1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal1<T2> {
		return super.sub1_3(rule, priority);
	}

	public subOnce1_3(rule: (a: T1, c: T3) => boolean, priority: number = 0): Signal1<T2> {
		return super.subOnce1_3(rule, priority);
	}

	public sub_23(rule: (d: T2, c: T3) => boolean, priority: number = 0): Signal1<T1> {
		return super.sub_23(rule, priority);
	}

	public subOnce_23(rule: (b: T2, c: T3) => boolean, priority: number = 0): Signal1<T1> {
		return super.subOnce_23(rule, priority);
	}

	public sub123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal0 {
		return super.sub123(rule, priority);
	}

	public subOnce123(rule: (a: T1, b: T2, c: T3) => boolean, priority: number = 0): Signal0 {
		return super.subOnce123(rule, priority);
	}

}