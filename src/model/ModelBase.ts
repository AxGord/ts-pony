import Bindable from '../events/Bindable';
import Logable from '../events/Logable';
import Signal0 from '../events/Signal0';
import F from '../utils/F';

/**
 * ModelBase
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class ModelBase extends Logable {

	private _inited: Bindable<boolean> = new Bindable<boolean>(false);

	public readonly singalInit: Signal0 = this._inited.subOnce12(F.y1);

	private _active: Bindable<boolean> = this._inited.bjoin(this._enabled, F.y2);

	public readonly signalActivate: Signal0 = this._active.sub12(F.y1);
	public readonly signalDeactivate: Signal0 = this._active.sub12(F.n1);

	public constructor(enabled?: boolean) {
		super(enabled);
		this.regDestroy(this.modelBaseDestroy, 10);
	}

	/**
	 * get active
	 */
	public get active(): boolean {
		return this._active.value;
	}

	public get inited(): boolean {
		return this._inited.value;
	}

	protected init(): void {
		this._inited.value = true;
	}

	/**
	 * modelBaseDestroy
	 */
	protected modelBaseDestroy(): void {
		this._inited.destroy();
		delete this._inited;
		this._active.destroy();
		delete this._active;
		// @ts-ignore
		delete this.singalInit;
		// @ts-ignore
		delete this.signalActivate;
		// @ts-ignore
		delete this.signalDeactivate;
	}

}