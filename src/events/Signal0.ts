import Event0 from './Event0';
import ISignalBase from './ISignalBase';
import Listener0 from './Listener0';
import SignalBase0 from './SignalBase0';
import SignalController from './SignalController';

/**
 * Signal0
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Signal0 extends SignalBase0
implements ISignalBase<(c: SignalController<Listener0, Signal0>) => void, Listener0> {

	/**
	 * Add signal listener
	 */
	public add(
		fn: (c: SignalController<Listener0, Signal0>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.add(fn, context, priority);
	}

	/**
	 * Add signal listener for once call
	 */
	public once(
		fn: (c: SignalController<Listener0, Signal0>) => void,
		context?: object|undefined,
		priority: number = 0): void {
		super.once(fn, context, priority);
	}

	/**
	 * Add promise for once call signal
	 */
	public promise(priority: number = 0): Promise<SignalController<Listener0, Signal0>> {
		return super.promise(priority);
	}

	/**
	 * Remove signal listener
	 */
	public remove(fn: (c: SignalController<Listener0, Signal0>) => void, context?: object|undefined): void {
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

	public addListener(listener: Listener0, priority: number = 0): void {
		super.addListener(listener, priority);
	}

	public removeListener(listener: Listener0): void {
		super.removeListener(listener);
	}

	public removeAll(): void { super.removeAll(); }

}