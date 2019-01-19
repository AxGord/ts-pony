import F from '../utils/F';
import Bindable from './Bindable';
import Destroyable from './Destroyable';
import RTumbler from './RTumbler';
import Signal0 from './Signal0';
import Signal1 from './Signal1';

/**
 * Tumbler
 * @author AxGord <axgord@gmail.com>
 */
export default class Tumbler extends Destroyable implements RTumbler {

	public readonly signalEnable: Signal0;
	public readonly signalDisable: Signal0;
	public readonly signalState: Signal1<boolean>;

	protected readonly _enabled: Bindable<boolean>;

	public constructor(enabled: boolean = false) {
		super();
		this._enabled = new Bindable<boolean>(enabled);
		this.signalEnable = this._enabled.sub12(F.y1);
		this.signalDisable = this._enabled.sub12(F.n1);
		this.signalState = this._enabled.del_2();
		this.regDestroy(this.tumblerDestroy, 30);
	}

	/**
	 * get enabled
	 */
	public get enabled(): boolean { return this._enabled.value; }

	/**
	 * set enabled
	 */
	public set enabled(v: boolean) { this._enabled.value = v; }

	/**
	 * enable
	 */
	public enable(): void { this.enabled = true; }

	/**
	 * disable
	 */
	public disable(): void { this.enabled = false; }

	/**
	 * switch
	 */
	public switch(): void { this.enabled = !this.enabled; }

	/**
	 * tumblers
	 */
	public tumblers(ts: RTumbler[]): void {

		const checkStates: () => void = () => {
			for (const t of ts) if (!t.enabled) {
				this.enabled = false;
				return;
			}
			this.enabled = true;
		};

		for (const t of ts) t.signalState.add(checkStates);

	}

	/**
	 * destroyHandler
	 */
	private tumblerDestroy(): void {
		this.disable();
		this._enabled.destroy();
		// @ts-ignore
		delete this._enabled;
		// @ts-ignore
		delete this.signalEnable;
		// @ts-ignore
		delete this.signalDisable;
	}

}