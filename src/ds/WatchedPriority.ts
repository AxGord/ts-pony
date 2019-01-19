import Event0 from '../events/Event0';
import Signal0 from '../events/Signal0';
import Priority from './Priority';

/**
 * Watched priority object list
 * @author AxGord <axgord@gmail.com>
 */
export default class WatchedPriority<T> extends Priority<T> {

	private readonly eventLost: Event0 = new Event0(false);
	private readonly eventTake: Event0 = new Event0(false);

	public readonly signalLost: Signal0 = this.eventLost.signal;
	public readonly signalTake: Signal0 = this.eventTake.signal;

	/**
	 * Add item to priotity list
	 * @param value item for add
	 * @param priority priority for item
	 */
	public add(value: T, priority: number = 0): void {
		const haveBefore: boolean = this.have;
		super.add(value, priority);
		if (!haveBefore) this.eventTake.dispatch();
	}

	/**
	 * Remove item from priotity list
	 * @param value item for remove
	 */
	public remove(value: T): T|null {
		return this.lostCheck(super.remove.bind(this, value));
	}

	/**
	 * Clear priority list
	 */
	public clear(): void {
		this.lostCheck(super.clear.bind(this));
	}

	private lostCheck<R>(fn: () => R): R {
		const haveBefore: boolean = this.have;
		const r: R = fn();
		if (haveBefore && !this.have)
			this.eventLost.dispatch();
		return r;
	}

	/**
	 * destroy
	 */
	public destroy(): void {
		this.clear();
		this.eventLost.destroy();
		this.eventTake.destroy();
		// @ts-ignore
		delete this.eventLost;
		// @ts-ignore
		delete this.eventTake;
		// @ts-ignore
		delete this.signalLost;
		// @ts-ignore
		delete this.signalTake;
		super.destroy();
	}

}