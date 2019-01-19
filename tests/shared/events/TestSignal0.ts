import Event0 from '../../../src/events/Event0';
import Listener0 from '../../../src/events/Listener0';
import Signal0 from '../../../src/events/Signal0';
import TestBase from '../../../src/testengine/TestBase';
import DTimer from '../../../src/time/DTimer';

export default class TestSignal0 extends TestBase {

	public eventEmpty: Event0 = new Event0();
	public signalEmpty: Signal0 = this.eventEmpty.signal;

	public sum: number = 0;
	public prList: string = '';

	public before() {
		this.eventEmpty = new Event0();
		this.signalEmpty = this.eventEmpty.signal;
		this.sum = 0;
		this.prList = '';
	}

	public testAddListener0() {
		this.signalEmpty.addListener(new Listener0(this.add3, this));
		this.signalEmpty.addListener(new Listener0(this.add5, this));
		this.signalEmpty.addListener(new Listener0(this.add5, this));
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5);
	}

	public testProrityListener0() {
		this.signalEmpty.addListener(new Listener0(this.adda, this));
		this.signalEmpty.addListener(new Listener0(this.addb, this));
		this.signalEmpty.addListener(new Listener0(this.adda, this), 1);
		this.signalEmpty.addListener(new Listener0(this.addc, this), -1);
		this.signalEmpty.addListener(new Listener0(this.addd, this), -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdab');
	}

	public testAddOnceListener0() {
		this.signalEmpty.addListener(new Listener0(this.add3, this, true));
		this.signalEmpty.addListener(new Listener0(this.add5, this, true));
		this.signalEmpty.addListener(new Listener0(this.add5, this));
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
	}

	public testProrityOnceListener0() {
		this.signalEmpty.addListener(new Listener0(this.adda, this, true));
		this.signalEmpty.addListener(new Listener0(this.addb, this, true));
		this.signalEmpty.addListener(new Listener0(this.adda, this, true), 1);
		this.signalEmpty.addListener(new Listener0(this.addc, this, true), -1);
		this.signalEmpty.addListener(new Listener0(this.addd, this, true), -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdab');
	}

	public testAdd() {
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5);
	}

	public testPriorityAdd() {
		this.signalEmpty.add(this.adda, this);
		this.signalEmpty.add(this.addb, this);
		this.signalEmpty.add(this.adda, this, 1);
		this.signalEmpty.add(this.addc, this, -1);
		this.signalEmpty.add(this.addd, this, -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdab');
	}

	public testAddOnce() {
		this.signalEmpty.once(this.add3, this);
		this.signalEmpty.once(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
	}

	public testPriorityAddOnce() {
		this.signalEmpty.once(this.adda, this);
		this.signalEmpty.once(this.addb, this);
		this.signalEmpty.once(this.adda, this, 1);
		this.signalEmpty.once(this.addc, this, -1);
		this.signalEmpty.once(this.addd, this, -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdab');
	}

	public testRemove() {
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5);
		this.signalEmpty.remove(this.add3, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 5);
		this.signalEmpty.remove(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 5);
	}

	public testAddEvent0() {
		const e: Event0 = new Event0();
		const s: Signal0 = e.signal;
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.addEvent0(e);
		s.add(this.add3, this);
		s.add(this.add5, this);
		s.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5);
	}

	public testPriorityAddEvent0() {
		const e: Event0 = new Event0();
		const s: Signal0 = e.signal;
		this.signalEmpty.add(this.adda, this);
		this.signalEmpty.add(this.addb, this);
		this.signalEmpty.add(this.adda, this, 1);
		this.signalEmpty.add(this.addc, this, -1);
		this.signalEmpty.add(this.addd, this, -1);
		this.signalEmpty.addEvent0(e);
		s.add(this.adda, this);
		s.add(this.addb, this);
		s.add(this.adda, this, 1);
		s.add(this.addc, this, -1);
		s.add(this.addd, this, -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdabcdab');
	}

	public testOnceEvent0() {
		const e: Event0 = new Event0();
		const s: Signal0 = e.signal;
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.onceEvent0(e);
		s.add(this.add3, this);
		s.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5 + 3 + 5);
	}

	public testPriorityOnceEvent0() {
		const e: Event0 = new Event0();
		const s: Signal0 = e.signal;
		this.signalEmpty.add(this.adda, this);
		this.signalEmpty.add(this.addb, this);
		this.signalEmpty.add(this.adda, this, 1);
		this.signalEmpty.add(this.addc, this, -1);
		this.signalEmpty.add(this.addd, this, -1);
		this.signalEmpty.onceEvent0(e);
		s.add(this.adda, this);
		s.add(this.addb, this);
		s.add(this.adda, this, 1);
		s.add(this.addc, this, -1);
		s.add(this.addd, this, -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdabcdab');
	}

	public testRemoveEvent0() {
		const e: Event0 = new Event0();
		const s: Signal0 = e.signal;
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.addEvent0(e);
		s.add(this.add3, this);
		s.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5);
		this.signalEmpty.removeEvent0(e);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3 + 5 + 3 + 5 + 3 + 5);
	}

	public testSelfReqursion() {
		this.signalEmpty.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3);
	}

	public testReqursion1() {
		const e1 = new Event0();
		const s1 = e1.signal;
		this.signalEmpty.addEvent0(e1);
		s1.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		s1.add(this.add5, this);
		e1.dispatch();
		this.equals(this.sum, 8);
	}

	public testReqursion2() {
		const e1 = new Event0();
		const s1 = e1.signal;
		this.signalEmpty.addEvent0(e1);
		s1.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		s1.add(this.add5, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 8);
	}

	public testTake() {
		let c = 0;
		this.eventEmpty.signalTake.add(() => c++);
		this.signalEmpty.add(this.add3);
		this.equals(c, 1);
		this.signalEmpty.add(this.add5);
		this.equals(c, 1);
	}

	public testLost() {
		let c = 0;
		this.eventEmpty.signalLost.add(() => c++);
		this.signalEmpty.add(this.add3);
		this.signalEmpty.add(this.add5);
		this.equals(c, 0);
		this.signalEmpty.remove(this.add3);
		this.equals(c, 0);
		this.signalEmpty.remove(this.add5);
		this.equals(c, 1);
	}

	public testTakeAfterLost() {
		let c = 0;
		this.eventEmpty.signalTake.add(() => c++);
		this.signalEmpty.add(this.add3);
		this.equals(c, 1);
		this.signalEmpty.remove(this.add3);
		this.equals(c, 1);
		this.signalEmpty.add(this.add3);
		this.equals(c, 2);
	}

	public testLostAfterTake() {
		let c = 0;
		this.eventEmpty.signalLost.add(() => c++);
		this.signalEmpty.add(this.add3);
		this.equals(c, 0);
		this.signalEmpty.remove(this.add3);
		this.equals(c, 1);
		this.signalEmpty.add(this.add3);
		this.equals(c, 1);
		this.signalEmpty.remove(this.add3);
		this.equals(c, 2);
	}

	public testTakeAndLost() {
		let t = 0;
		let l = 0;
		this.eventEmpty.signalTake.add(() => t++);
		this.eventEmpty.signalLost.add(() => l++);
		this.signalEmpty.add(this.add3);
		this.signalEmpty.add(this.add5);
		this.equals(t, 1);
		this.equals(l, 0);
		this.signalEmpty.remove(this.add3);
		this.equals(t, 1);
		this.equals(l, 0);
		this.signalEmpty.remove(this.add5);
		this.equals(t, 1);
		this.equals(l, 1);
		this.signalEmpty.add(this.add5);
		this.equals(t, 2);
		this.equals(l, 1);
		this.signalEmpty.remove(this.add5);
		this.equals(t, 2);
		this.equals(l, 2);
	}

	public testHave() {
		this.isFalse(this.eventEmpty.have);
		this.signalEmpty.add(this.add3);
		this.isTrue(this.eventEmpty.have);
		this.signalEmpty.remove(this.add3);
		this.isFalse(this.eventEmpty.have);
		this.signalEmpty.add(this.add3);
		this.isTrue(this.eventEmpty.have);
		this.signalEmpty.remove(this.add3);
		this.isFalse(this.eventEmpty.have);
	}

	public testControllerStop() {
		this.signalEmpty.add((c) => c.stop());
		this.signalEmpty.add(this.add3, this);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 0);
	}

	public testControllerRemoveFn() {
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add((c) => c.signal.remove(this.add3, this));
		this.eventEmpty.dispatch();
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3);
	}

	public testControllerRemove() {
		this.signalEmpty.add((c) => {
			this.add3();
			c.remove();
		});
		this.eventEmpty.dispatch();
		this.eventEmpty.dispatch();
		this.equals(this.sum, 3);
	}

	public async asyncTestsPromise(): Promise<void> {
		DTimer.fixedDelay(10, () => this.eventEmpty.dispatch());
		await this.signalEmpty.promise();
	}

	public add3() {
		this.sum += 3;
	}

	public add5() {
		this.sum += 5;
	}

	public adda() {
		this.prList += 'a';
	}

	public addb() {
		this.prList += 'b';
	}

	public addc() {
		this.prList += 'c';
	}

	public addd() {
		this.prList += 'd';
	}

}