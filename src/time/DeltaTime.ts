import Event1 from '../events/Event1';
import Signal1 from '../events/Signal1';

/**
 * DeltaTime
 * @author AxGord <axgord@gmail.com>
 */
export default class DeltaTime {

	public static speed: number = 1;

	private static readonly eventFixedUpdate: Event1<number> = new Event1<number>();
	private static readonly eventUpdate: Event1<number> = new Event1<number>();

	public static get signalFixedUpdate(): Signal1<number> {
		return DeltaTime.eventFixedUpdate.signal;
	}

	public static get signalUpdate(): Signal1<number> {
		return DeltaTime.eventUpdate.signal;
	}

	/**
	 * tick
	 */
	public static tick(dt: number): void {
		DeltaTime.eventFixedUpdate.dispatch(dt);
		DeltaTime.eventUpdate.dispatch(dt * DeltaTime.speed);
	}

}