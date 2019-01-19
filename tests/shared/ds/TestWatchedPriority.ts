import WatchedPriority from '../../../src/ds/WatchedPriority';
import TestBase from '../../../src/testengine/TestBase';

export default class TestWatchedPriority extends TestBase {

	public testTake() {
		let c = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalTake, () => c++);
		wp.add(1);
		wp.add(2);
		wp.add(3);
		this.equals(c, 1);
	}

	public testLost() {
		let c = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalLost, () => c++);
		wp.add(1);
		wp.add(2);
		wp.add(3);
		this.equals(c, 0);
		wp.remove(3);
		this.equals(c, 0);
		wp.remove(2);
		this.equals(c, 0);
		wp.remove(1);
		this.equals(c, 1);
	}

	public testTakeAfterLost() {
		let c = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalTake, () => c++);
		wp.add(1);
		wp.add(2);
		this.equals(c, 1);
		wp.remove(1);
		wp.remove(2);
		wp.add(1);
		wp.add(2);
		this.equals(c, 2);
	}

	public testLostAfterTake() {
		let c = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalLost, () => c++);
		wp.add(1);
		wp.add(2);
		this.equals(c, 0);
		wp.remove(1);
		wp.remove(2);
		this.equals(c, 1);
		wp.add(1);
		wp.add(2);
		wp.remove(1);
		wp.remove(2);
		this.equals(c, 2);
	}

	public testTakeAndLost() {
		let t = 0;
		let l = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalTake, () => t++);
		this.on0(wp.signalLost, () => l++);
		wp.add(1);
		wp.add(2);
		this.equals(t, 1);
		this.equals(l, 0);
		wp.remove(1);
		this.equals(t, 1);
		this.equals(l, 0);
		wp.remove(2);
		this.equals(t, 1);
		this.equals(l, 1);
		wp.add(3);
		this.equals(t, 2);
		wp.add(4);
		this.equals(t, 2);
		this.equals(l, 1);
		wp.remove(3);
		this.equals(t, 2);
		this.equals(l, 1);
		wp.remove(4);
		this.equals(t, 2);
		this.equals(l, 2);
	}

	public testClear() {
		let c = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalTake, () => c++);
		wp.add(1);
		wp.add(2);
		wp.add(3);
		this.equals(c, 1);
		wp.clear();
		wp.add(1);
		this.equals(c, 2);
		wp.clear();
		wp.add(1);
		this.equals(c, 3);
	}

	public testDestroy() {
		let t = 0;
		let l = 0;
		const wp = new WatchedPriority();
		this.on0(wp.signalTake, () => t++);
		this.on0(wp.signalLost, () => l++);
		wp.add(1);
		wp.add(2);
		wp.add(3);
		this.equals(t, 1);
		wp.destroy();
		this.equals(l, 1);
	}

}