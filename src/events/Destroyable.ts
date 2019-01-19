import Event0 from './Event0';
import ListenHelper from './ListenHelper';
import Signal0 from './Signal0';

/**
 * Destroyable
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class Destroyable extends ListenHelper {

	private readonly eventDestroy: Event0 = new Event0(false);
	public readonly signalDestroy: Signal0 = this.eventDestroy.signal;

	/**
	 * get destroyed
	 */
	public get destroyed(): boolean { return this.eventDestroy == null; }

	/**
	 * regDestroy
	 */
	public regDestroy(fn: () => void, priority: number = 0): void { this.once0(this.signalDestroy, fn, priority); }

	/**
	 * destroy
	 */
	public destroy(): void {
		if (this.destroyed) return;
		this.eventDestroy.dispatch();
		this.eventDestroy.destroy();
		// @ts-ignore
		delete this.eventDestroy;
		// @ts-ignore
		delete this.signalDestroy;
	}

}