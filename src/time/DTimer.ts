import Event1 from '../events/Event1';
import Signal1 from '../events/Signal1';
import Tumbler from '../events/Tumbler';
import DeltaTime from './DeltaTime';

/**
 * DTimer
 * @author AxGord <axgord@gmail.com>
 */
export default class DTimer extends Tumbler {

	private readonly eventComplete: Event1<number> = new Event1<number>();
	private readonly eventCompleteRepeats: Event1<number> = new Event1<number>();
	private readonly time: number; // in ms
	private currentTime: number = 0;
	private repeat: number;
	private readonly fixedTime: boolean;

	/**
	 * constructor
	 * @arg time - in seconds
	 */
	public constructor(time: number, repeat: number = 0, fixedTime: boolean = false, enabled: boolean = false) {
		super(enabled);
		this.time = time / 1000;
		this.repeat = repeat;
		this.fixedTime = fixedTime;
		this.on0(this.signalEnable, this.enableHandler);
		this.on0(this.signalDisable, this.disableHandler);
		this.on0(this.signalDestroy, this.destroyDTimer);
		if (this.enabled) this.enableHandler();
	}

	/**
	 * get signalCompleteRepeats
	 */
	public get signalCompleteRepeats(): Signal1<number> {
		return this.eventCompleteRepeats.signal;
	}

	/**
	 * get signalComplete
	 */
	public get signalComplete(): Signal1<number> {
		return this.eventComplete.signal;
	}

	/**
	 * start
	 */
	public start(dt: number = 0): void {
		this.currentTime = dt;
		this.enable();
		if (this.currentTime > 0)
			this.updateHandler(0);
	}

	/**
	 * stop
	 */
	public stop() {
		this.disable();
		this.reset();
	}

	private enableHandler(): void {
		this.on1(this.fixedTime ? DeltaTime.signalFixedUpdate : DeltaTime.signalUpdate, this.updateHandler);
	}

	private disableHandler(): void {
		this.off1(this.fixedTime ? DeltaTime.signalFixedUpdate : DeltaTime.signalUpdate, this.updateHandler);
	}

	private updateHandler(dt: number): void {
		this.currentTime += dt;
		const d: number = this.currentTime - this.time;
		if (d >= 0) {
			if (this.repeat == 0)
				this.stop();
			this.eventComplete.dispatch(d);
			if (this.repeat != 0) {
				this.repeat--;
				this.start(d);
			} else {
				this.eventCompleteRepeats.dispatch(d);
			}
		}
	}

	/**
	 * destroyAfterComplete
	 */
	public destroyAfterComplete(): void {
		this.on1(this.signalCompleteRepeats, this.destroy, 100);
	}

	/**
	 * reset
	 */
	public reset(): void {
		this.currentTime = 0;
	}

	private destroyDTimer(): void {
		this.eventComplete.destroy();
		this.eventCompleteRepeats.destroy();
		// @ts-ignore
		delete this.eventComplete;
		// @ts-ignore
		delete this.eventCompleteRepeats;
		// @ts-ignore
		delete this.time;
		delete this.currentTime;
		delete this.repeat;
		// @ts-ignore
		delete this.fixedTime;
	}

	public static delay(time: number, listener: (dt: number) => void): DTimer {
		const t: DTimer = new DTimer(time, 0, false, true);
		t.signalComplete.add(listener);
		t.destroyAfterComplete();
		return t;
	}

	public static async delayPromise(time: number): Promise<number> {
		const t: DTimer = new DTimer(time, 0, false, true);
		t.destroyAfterComplete();
		const [dt] = await t.signalComplete.promise();
		return dt;
	}

	public static fixedDelay(time: number, listener: (dt: number) => void): DTimer {
		const t: DTimer = new DTimer(time, 0, true, true);
		t.signalComplete.add(listener);
		t.destroyAfterComplete();
		return t;
	}

	public static async fixedDelayPromise(time: number): Promise<number> {
		const t: DTimer = new DTimer(time, 0, true, true);
		t.destroyAfterComplete();
		const [dt] = await t.signalComplete.promise();
		return dt;
	}

	public static repeat(time: number, listener: (dt: number) => void): DTimer {
		const t: DTimer = new DTimer(time, -1, false, true);
		t.signalComplete.add(listener);
		t.destroyAfterComplete();
		return t;
	}

	public static async repeatPromise(time: number): Promise<number> {
		const t: DTimer = new DTimer(time, -1, false, true);
		t.destroyAfterComplete();
		const [dt] = await t.signalComplete.promise();
		return dt;
	}

	public static fixedRepeat(time: number, listener: (dt: number) => void): DTimer {
		const t: DTimer = new DTimer(time, -1, true, true);
		t.signalComplete.add(listener);
		t.destroyAfterComplete();
		return t;
	}

	public static async fixedRepeatPromise(time: number): Promise<number> {
		const t: DTimer = new DTimer(time, -1, true, true);
		t.destroyAfterComplete();
		const [dt] = await t.signalComplete.promise();
		return dt;
	}

}