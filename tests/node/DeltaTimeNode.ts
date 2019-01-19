import DeltaTime from '../../src/time/DeltaTime';

export default class DeltaTimeNode {

	private static lastTime: number = 0;
	private static tid: number = -1;
	private static needStop: boolean = false;

	/**
	 * start
	 */
	public static start(): void {
		DeltaTimeNode.lastTime = Date.now();
		DeltaTimeNode.tid =  setTimeout(DeltaTimeNode.tick, 1000 / 60) as any;
	}

	private static tick(): void {
		DeltaTime.tick((Date.now() - DeltaTimeNode.lastTime) / 1000);
		if (!DeltaTimeNode.needStop)
			DeltaTimeNode.start();
	}

	/**
	 * stop
	 */
	public static stop() {
		clearTimeout(DeltaTimeNode.tid);
		DeltaTimeNode.needStop = true;
	}

}