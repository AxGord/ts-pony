import Listener0 from './Listener0';
import Listener1 from './Listener1';
import Listener2 from './Listener2';
import Listener3 from './Listener3';
import Signal0 from './Signal0';
import Signal1 from './Signal1';
import Signal2 from './Signal2';
import Signal3 from './Signal3';
import SignalController from './SignalController';

/**
 * ListenHelper
 * @author AxGord <axgord@gmail.com>
 */
export default class ListenHelper {

	public on0(signal: Signal0, method: (c: SignalController<Listener0, Signal0>) => void, priority: number = 0): void {
		signal.add(method, this, priority);
	}

	public once0(signal: Signal0, method: (c: SignalController<Listener0, Signal0>) => void, priority: number = 0): void {
		signal.once(method, this, priority);
	}

	public off0(signal: Signal0, method: (c: SignalController<Listener0, Signal0>) => void): void {
		signal.remove(method, this);
	}

	public on1<T>(
		signal: Signal1<T>,
		method: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): void {
		signal.add(method, this, priority);
	}

	public once1<T>(
		signal: Signal1<T>,
		method: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void,
		priority: number = 0): void {
		signal.once(method, this, priority);
	}

	public off1<T>(
		signal: Signal1<T>,
		method: (v: T, c: SignalController<Listener1<T>, Signal1<T>>) => void): void {
		signal.remove(method, this);
	}

	public on2<T1, T2>(
		signal: Signal2<T1, T2>,
		method: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): void {
		signal.add(method, this, priority);
	}

	public once2<T1, T2>(
		signal: Signal2<T1, T2>,
		method: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void,
		priority: number = 0): void {
		signal.once(method, this, priority);
	}

	public off2<T1, T2>(
		signal: Signal2<T1, T2>,
		method: (v1: T1, v2: T2, c: SignalController<Listener2<T1, T2>, Signal2<T1, T2>>) => void): void {
		signal.remove(method, this);
	}

	public on3<T1, T2, T3>(
		signal: Signal3<T1, T2, T3>,
		method: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): void {
		signal.add(method, this, priority);
	}

	public once3<T1, T2, T3>(
		signal: Signal3<T1, T2, T3>,
		method: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void,
		priority: number = 0): void {
		signal.once(method, this, priority);
	}

	public off3<T1, T2, T3>(
		signal: Signal3<T1, T2, T3>,
		method: (v1: T1, v2: T2, v3: T3, c: SignalController<Listener3<T1, T2, T3>, Signal3<T1, T2, T3>>) => void): void {
		signal.remove(method, this);
	}

}