import Listener0 from './Listener0';
import Signal0 from './Signal0';
import SignalBase0 from './SignalBase0';

/**
 * Event0
 * @author AxGord <axgord@gmail.com>
 */
export default class Event0 extends SignalBase0 {

	/**
	 * constructor
	 */
	public constructor(watched: boolean = true) { super(watched); }

	public get have(): boolean { return this._have; }
	public get signalLost(): Signal0 { return this._signalLost; }
	public get signalTake(): Signal0 { return this._signalTake; }
	public get signalDestroy(): Signal0 { return this._signalDestroy as Signal0; }

	/**
	 * Dispatch
	 */
	public dispatch(): void { this.callListeners(Event0.call); }

	public get signal(): Signal0 { return this as any; }

	public toListener0(once: boolean = false): Listener0 {
		const l: Listener0 = new Listener0(this.dispatch, this, once);
		this.listenDestroy(l.destroy, l);
		return l;
	}

	/**
	 * destroy
	 */
	public destroy(): void { super.destroy(); }

	private static call(l: Listener0): void { l.call(); }

}