import Priority from '../ds/Priority';
import WatchedPriority from '../ds/WatchedPriority';
import Event0 from './Event0';
import ISignalBase from './ISignalBase';
import ListenerBase from './ListenerBase';
import Signal0 from './Signal0';
import SignalControllerInner from './SignalControllerInner';

/**
 * SignalBase
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable: ban-types
export default abstract class SignalBase<T extends ListenerBase<F>, F extends Function> {

	private lock: boolean = false;
	private readonly eventDestroy: Event0|null;
	protected readonly _signalDestroy: Signal0|null;
	private readonly list: WatchedPriority<T>;
	protected readonly watched: boolean;
	protected _parent: [SignalBase<ListenerBase<Function>, Function>, ListenerBase<Function>, number]|undefined;

	protected constructor(watched: boolean) {
		this.watched = watched;
		if (watched) {
			this.eventDestroy = new Event0(false);
			this._signalDestroy = this.eventDestroy.signal;
			this.list = new WatchedPriority(this.compare);
		} else {
			this.eventDestroy = null;
			this._signalDestroy = null;
			this.list = new Priority<T>(this.compare) as any;
		}
	}

	/**
	 * Add signal listener
	 */
	protected add(fn: F, context?: object|undefined, priority: number = 0): void {
		this.addListener(this.createListener(fn, context), priority);
	}

	/**
	 * Add signal listener for once call
	 */
	protected once(fn: F, context?: object|undefined, priority: number = 0): void {
		this.addListener(this.createListener(fn, context, true), priority);
	}

	/**
	 * Remove signal listener
	 */
	protected remove(fn: F, context?: object|undefined): void {
		this.removeListener(this.createListener(fn, context));
	}

	protected get _have(): boolean { return this.list.have; }
	protected get _signalLost(): Signal0 { return this.list.signalLost; }
	protected get _signalTake(): Signal0 { return this.list.signalTake; }

	private compare(a: T, b: T): boolean { return a.fn === b.fn && a.context === b.context; }

	protected abstract createListener(fn: F, context?: object|undefined, once?: boolean): T;

	protected addListener(listener: T, priority: number): void {
		this.list.add(listener, priority);
	}

	protected changeListenerPriority(listener: T, priority: number = 0): void {
		this.list.change(listener, priority);
	}

	protected removeListener(listener: T): void {
		const v = this.list.remove(listener);
		if (v != null) v.destroy();
		listener.destroy();
	}

	protected connect0(fn: (e: Event0) => F, priority: number = 0): Signal0 {
		const e = new Event0(this.watched);
		e.connectChild([this, this.createListener(fn(e)), priority]);
		return e.signal;
	}

	protected connectOnce0(fn: (e: Event0) => F, priority: number = 0): Signal0 {
		const e = new Event0(this.watched);
		e.connectChild([this, this.createListener(fn(e), undefined, true), priority]);
		return e.signal;
	}

	public destroyChild(): void {
		if (!this._parent) return;
		this.unconnectChild();
		delete this._parent;
		this.destroy();
	}

	protected listenChild(): void {
		if (!this._parent) return;
		this._parent[0].addListener(this._parent[1], this._parent[2]);
	}

	protected unlistenChild(): void {
		if (!this._parent) return;
		this._parent[0].removeListener(this._parent[1]);
	}

	public connectChild(parent: [SignalBase<ListenerBase<Function>, Function>, ListenerBase<Function>, number]): void {
		this._parent = parent;
		const target = parent[0];
		if (target.watched) {
			if (target._have) this.listenChild();
			this._signalTake.add(this.listenChild, this, -1);
			this._signalLost.add(this.unlistenChild, this, -1);
		} else {
			this.listenChild();
		}
		target.listenDestroy(this.destroyChild, this);
		if (parent[1].once) {
			this.addListener(this.createListener(this.destroyChild as any, this), 1000);
		}
	}

	protected unconnectChild(): void {
		if (!this._parent) return;
		const target = this._parent[0];
		if (target.watched) {
			this._signalTake.remove(this.listenChild, this);
			this._signalLost.remove(this.unlistenChild, this);
		} else {
			this.unlistenChild();
		}
		target.unlistenDestroy(this.destroyChild, this);
	}

	protected callListeners(callF: (l: T) => void): void {
		if (!this.list || this.lock) return;
		this.lock = true;
		const c: SignalControllerInner<T, ISignalBase<Function, T>> =
			new SignalControllerInner<T, ISignalBase<Function, T>>(this as any);
		for (const l of this.list.result.concat()) {
			if (l.once)
				this.list.remove(l);
			c.listener = l;
			l.csc = c;
			callF(l);
			l.csc = null;
			if (l.once)
				l.destroy();
			if (c.stopState)
				break;
		}
		c.destroy();
		if (this.list)
			this.lock = false;
	}

	protected addEvent0(event: Event0, priority: number = 0): void {
		this.addListener(event.toListener0() as ListenerBase<Function> as T, priority);
	}

	protected onceEvent0(event: Event0, priority: number = 0): void {
		this.addListener(event.toListener0(true) as ListenerBase<Function> as T, priority);
	}

	protected removeEvent0(event: Event0): void {
		this.removeListener(event.toListener0() as ListenerBase<Function> as T);
	}

	protected changeEvent0Priority(event: Event0, priority: number = 0): void {
		this.changeListenerPriority(event.toListener0() as ListenerBase<Function> as T, priority);
	}

	/**
	 * removeAll
	 */
	protected removeAll(): void {
		this.list.result.forEach((l) => l.destroy());
		this.list.clear();
	}

	/**
	 * destroy
	 */
	protected destroy(): void {
		if (!this.list) return;
		if (this.eventDestroy) {
			this.eventDestroy.dispatch();
			this.eventDestroy.destroy();
		}
		// @ts-ignore
		delete this.eventDestroy;
		this.list.result.forEach((l) => l.destroy());
		this.list.destroy();
		// @ts-ignore
		delete this.list;
	}

	protected listenDestroy(fn: () => void, context: object): void {
		if (this._signalDestroy) this._signalDestroy.add(fn, context);
	}

	protected unlistenDestroy(fn: () => void, context: object): void {
		if (this._signalDestroy) this._signalDestroy.remove(fn, context);
	}

}