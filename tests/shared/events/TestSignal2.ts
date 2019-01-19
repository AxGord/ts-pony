import Event0 from '../../../src/events/Event0';
import Event1 from '../../../src/events/Event1';
import Event2 from '../../../src/events/Event2';
import Listener0 from '../../../src/events/Listener0';
import Listener1 from '../../../src/events/Listener1';
import Listener2 from '../../../src/events/Listener2';
import Signal0 from '../../../src/events/Signal0';
import Signal1 from '../../../src/events/Signal1';
import Signal2 from '../../../src/events/Signal2';
import TestBase from '../../../src/testengine/TestBase';
import DTimer from '../../../src/time/DTimer';

export default class TestSignal2 extends TestBase {

	public eventEmpty: Event0 = new Event0();
	public signalEmpty: Signal0 = this.eventEmpty.signal;

	public eventOne: Event1<number> = new Event1<number>();
	public signalOne: Signal1<number> = this.eventOne.signal;

	public eventTwo: Event2<number, number> = new Event2<number, number>();
	public signalTwo: Signal2<number, number> = this.eventTwo.signal;

	public sum: number = 0;
	public num: number = 5;
	public prList: string = '';

	public before() {
		this.eventEmpty = new Event0();
		this.signalEmpty = this.eventEmpty.signal;
		this.eventOne = new Event1();
		this.signalOne = this.eventOne.signal;
		this.eventTwo = new Event2();
		this.signalTwo = this.eventTwo.signal;

		this.sum = 0;
		this.num = 5;
		this.prList = '';
	}

	public testAddListener0() {
		this.signalEmpty.addListener(new Listener0(this.add3, this));
		this.signalEmpty.addListener(new Listener0(this.add5, this));
		this.signalEmpty.addListener(new Listener0(this.add5, this));
		this.eventEmpty.dispatch();
		this.equals(this.sum, 8);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 16);
	}

	public testPriorityListener0() {
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
		this.equals(this.sum, 8);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 8);
	}

	public testPriorityOnceListener0() {
		this.signalEmpty.addListener(new Listener0(this.adda, this, true));
		this.signalEmpty.addListener(new Listener0(this.addb, this, true));
		this.signalEmpty.addListener(new Listener0(this.adda, this, true), 1);
		this.signalEmpty.addListener(new Listener0(this.addc, this, true), -1);
		this.signalEmpty.addListener(new Listener0(this.addd, this, true), -1);
		this.eventEmpty.dispatch();
		this.equals(this.prList, 'cdab');
	}

	public testAddListener1() {
		this.signalOne.addListener(new Listener1(this.add3, this));
		this.signalOne.addListener(new Listener1(this.add5, this));
		this.signalOne.addListener(new Listener1(this.add5, this));
		this.eventOne.dispatch(7);
		this.equals(this.sum, 8);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 16);
	}

	public testPriorityListener1() {
		this.signalOne.addListener(new Listener1(this.adda, this));
		this.signalOne.addListener(new Listener1(this.addb, this));
		this.signalOne.addListener(new Listener1(this.adda, this), 1);
		this.signalOne.addListener(new Listener1(this.addc, this), -1);
		this.signalOne.addListener(new Listener1(this.addd, this), -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdab');
	}

	public testAddOnceListener1() {
		this.signalOne.addListener(new Listener1(this.add3, this, true));
		this.signalOne.addListener(new Listener1(this.add5, this, true));
		this.signalOne.addListener(new Listener1(this.add5, this));
		this.eventOne.dispatch(7);
		this.equals(this.sum, 8);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 8);
	}

	public testPriorityOnceListener1() {
		this.signalOne.addListener(new Listener1(this.adda, this, true));
		this.signalOne.addListener(new Listener1(this.addb, this, true));
		this.signalOne.addListener(new Listener1(this.adda, this, true), 1);
		this.signalOne.addListener(new Listener1(this.addc, this, true), -1);
		this.signalOne.addListener(new Listener1(this.addd, this, true), -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdab');
	}

	public testAddListener2() {
		this.signalTwo.addListener(new Listener2(this.add3, this));
		this.signalTwo.addListener(new Listener2(this.add5, this));
		this.signalTwo.addListener(new Listener2(this.add5, this));
		this.eventTwo.dispatch(0, 0);
		this.equals(this.sum, 8);
		this.eventTwo.dispatch(0, 0);
		this.equals(this.sum, 16);
	}

	public testPriorityListener2() {
		this.signalTwo.addListener(new Listener2(this.adda, this));
		this.signalTwo.addListener(new Listener2(this.addb, this));
		this.signalTwo.addListener(new Listener2(this.adda, this), 1);
		this.signalTwo.addListener(new Listener2(this.addc, this), -1);
		this.signalTwo.addListener(new Listener2(this.addd, this), -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testAddOnceListener2() {
		this.signalTwo.addListener(new Listener2(this.add3, this, true));
		this.signalTwo.addListener(new Listener2(this.add5, this, true));
		this.signalTwo.addListener(new Listener2(this.add5, this));
		this.eventTwo.dispatch(0, 0);
		this.equals(this.sum, 8);
		this.eventTwo.dispatch(0, 0);
		this.equals(this.sum, 8);
	}

	public testPriorityOnceListener2() {
		this.signalTwo.addListener(new Listener2(this.adda, this, true));
		this.signalTwo.addListener(new Listener2(this.addb, this, true));
		this.signalTwo.addListener(new Listener2(this.adda, this, true), 1);
		this.signalTwo.addListener(new Listener2(this.addc, this, true), -1);
		this.signalTwo.addListener(new Listener2(this.addd, this, true), -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testAdd() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.signalTwo.add(this.add5, this);
		this.eventTwo.dispatch(7, 9);
		this.equals(this.sum, 7 + 9 + 3 + 5 + this.num);
		this.eventTwo.dispatch(10, 9);
		this.equals(this.sum, 10 + 9 + 3 + 5 + this.num);
	}

	public testPriorityAdd() {
		this.signalTwo.add(this.adda, this);
		this.signalTwo.add(this.addb, this);
		this.signalTwo.add(this.adda, this, 1);
		this.signalTwo.add(this.addc, this, -1);
		this.signalTwo.add(this.addd, this, -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testAddOnce() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.once(this.add3, this);
		this.signalTwo.once(this.add5, this);
		this.eventTwo.dispatch(7, 9);
		this.equals(this.sum, 7 + 9 + 3 + 5 + this.num);
		this.eventTwo.dispatch(10, 9);
		this.equals(this.sum, 10 + 9 + this.num);
	}

	public testPriorityAddOnce() {
		this.signalTwo.once(this.adda, this);
		this.signalTwo.once(this.addb, this);
		this.signalTwo.once(this.adda, this, 1);
		this.signalTwo.once(this.addc, this, -1);
		this.signalTwo.once(this.addd, this, -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testRemove() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.eventTwo.dispatch(7, 9);
		this.equals(this.sum, 7 + 9 + 3 + 5 + this.num);
		this.signalTwo.remove(this.add5, this);
		this.eventTwo.dispatch(10, 4);
		this.equals(this.sum, 10 + 4 + 3 + this.num);
		this.signalTwo.remove(this.add3, this);
		this.eventTwo.dispatch(5, 6);
		this.equals(this.sum, 5 + 6 + this.num);
	}

	public testAddEvent0() {
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
	}

	public testPriorityAddEvent0() {
		this.signalOne.add(this.adda, this);
		this.signalOne.add(this.addb, this);
		this.signalOne.add(this.adda, this, 1);
		this.signalOne.add(this.addc, this, -1);
		this.signalOne.add(this.addd, this, -1);
		this.signalOne.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.adda, this);
		this.signalEmpty.add(this.addb, this);
		this.signalEmpty.add(this.adda, this, 1);
		this.signalEmpty.add(this.addc, this, -1);
		this.signalEmpty.add(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testOnceEvent0() {
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.onceEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
		this.eventOne.dispatch(9);
		this.equals(this.sum, 9 + 3 + 5 + this.num);
	}

	public testPriorityOnceEvent0() {
		this.signalOne.add(this.adda, this);
		this.signalOne.add(this.addb, this);
		this.signalOne.add(this.adda, this, 1);
		this.signalOne.add(this.addc, this, -1);
		this.signalOne.add(this.addd, this, -1);
		this.signalOne.onceEvent0(this.eventEmpty);
		this.signalEmpty.add(this.adda, this);
		this.signalEmpty.add(this.addb, this);
		this.signalEmpty.add(this.adda, this, 1);
		this.signalEmpty.add(this.addc, this, -1);
		this.signalEmpty.add(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testRemoveEvent0() {
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.addEvent0(this.eventEmpty);
		this.signalEmpty.add(this.add3, this);
		this.signalEmpty.add(this.add5, this);
		this.signalEmpty.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
		this.signalOne.removeEvent0(this.eventEmpty);
		this.eventOne.dispatch(9);
		this.equals(this.sum, 9 + 3 + 5 + this.num);
	}

	public testAddEvent1() {
		const e1: Event1<number> = new Event1<number>();
		const s1: Signal1<number> = e1.signal;
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.addEvent1(e1);
		s1.add(this.add3, this);
		s1.add(this.add5, this);
		s1.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
	}

	public testPriorityAddEvent1() {
		const e1: Event1<number> = new Event1<number>();
		const s1: Signal1<number> = e1.signal;
		this.signalOne.add(this.adda, this);
		this.signalOne.add(this.addb, this);
		this.signalOne.add(this.adda, this, 1);
		this.signalOne.add(this.addc, this, -1);
		this.signalOne.add(this.addd, this, -1);
		this.signalOne.addEvent1(e1);
		s1.add(this.adda, this);
		s1.add(this.addb, this);
		s1.add(this.adda, this, 1);
		s1.add(this.addc, this, -1);
		s1.add(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testOnceEvent1() {
		const e1: Event1<number> = new Event1<number>();
		const s1: Signal1<number> = e1.signal;
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.onceEvent1(e1);
		s1.add(this.add3, this);
		s1.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + this.num);
	}

	public testPriorityOnceEvent1() {
		const e1: Event1<number> = new Event1<number>();
		const s1: Signal1<number> = e1.signal;
		this.signalOne.add(this.adda, this);
		this.signalOne.add(this.addb, this);
		this.signalOne.add(this.adda, this, 1);
		this.signalOne.add(this.addc, this, -1);
		this.signalOne.add(this.addd, this, -1);
		this.signalOne.onceEvent1(e1);
		s1.add(this.adda, this);
		s1.add(this.addb, this);
		s1.add(this.adda, this, 1);
		s1.add(this.addc, this, -1);
		s1.add(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testRemoveEvent1() {
		const e1: Event1<number> = new Event1<number>();
		const s1: Signal1<number> = e1.signal;
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.addEvent1(e1);
		s1.add(this.add3, this);
		s1.add(this.add5, this);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + 3 + 5 + this.num);
		this.signalOne.removeEvent1(e1);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + 3 + 5 + this.num);
	}

	public testAddEvent2() {
		const e2: Event2<number, number> = new Event2<number, number>();
		const s2: Signal2<number, number> = e2.signal;
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.signalTwo.addEvent2(e2);
		s2.add(this.add3, this);
		s2.add(this.add5, this);
		s2.add(this.add5, this);
		this.eventTwo.dispatch(2, 9);
		this.equals(this.sum, 2 + 9 + 3 + 5 + 3 + 5 + this.num);
	}

	public testPriorityAddEvent2() {
		const e2: Event2<number, number> = new Event2<number, number>();
		const s2: Signal2<number, number> = e2.signal;
		this.signalTwo.add(this.adda, this);
		this.signalTwo.add(this.addb, this);
		this.signalTwo.add(this.adda, this, 1);
		this.signalTwo.add(this.addc, this, -1);
		this.signalTwo.add(this.addd, this, -1);
		this.signalTwo.addEvent2(e2);
		s2.add(this.adda, this);
		s2.add(this.addb, this);
		s2.add(this.adda, this, 1);
		s2.add(this.addc, this, -1);
		s2.add(this.addd, this, -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testOnceEvent2() {
		const e2: Event2<number, number> = new Event2<number, number>();
		const s2: Signal2<number, number> = e2.signal;
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.signalTwo.onceEvent2(e2);
		s2.add(this.add3, this);
		s2.add(this.add5, this);
		this.eventTwo.dispatch(2, 9);
		this.equals(this.sum, 2 + 9 + 3 + 5 + 3 + 5 + this.num);
		this.eventTwo.dispatch(2, 9);
		this.equals(this.sum, 2 + 9 + 3 + 5 + this.num);
	}

	public testPriorityOnceEvent2() {
		const e2: Event2<number, number> = new Event2<number, number>();
		const s2: Signal2<number, number> = e2.signal;
		this.signalTwo.add(this.adda, this);
		this.signalTwo.add(this.addb, this);
		this.signalTwo.add(this.adda, this, 1);
		this.signalTwo.add(this.addc, this, -1);
		this.signalTwo.add(this.addd, this, -1);
		this.signalTwo.onceEvent2(e2);
		s2.add(this.adda, this);
		s2.add(this.addb, this);
		s2.add(this.adda, this, 1);
		s2.add(this.addc, this, -1);
		s2.add(this.addd, this, -1);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testRemoveEvent2() {
		const e2: Event2<number, number> = new Event2<number, number>();
		const s2: Signal2<number, number> = e2.signal;
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.signalTwo.addEvent2(e2);
		s2.add(this.add3, this);
		s2.add(this.add5, this);
		this.eventTwo.dispatch(2, 9);
		this.equals(this.sum, 2 + 9 + 3 + 5 + 3 + 5 + this.num);
		this.signalTwo.removeEvent2(e2);
		this.eventTwo.dispatch(2, 9);
		this.equals(this.sum, 2 + 9 + 3 + 5 + this.num);
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
		this.isFalse(this.eventTwo.have);
		this.signalTwo.add(this.add3, this);
		this.isTrue(this.eventTwo.have);
	}

	public testConvert1() {
		this.signalOne.convert1((v) => v * 2).add(this.calc, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 10 + this.num);
	}

	public testPriorityConvert1() {
		this.signalOne.convert1((v) => v * 2).add(this.adda, this);
		this.signalOne.convert1((v) => v * 2).add(this.addb, this);
		this.signalOne.convert1((v) => v * 2, 1).add(this.adda, this);
		this.signalOne.convert1((v) => v * 2, -1).add(this.addc, this);
		this.signalOne.convert1((v) => v * 2, -1).add(this.addd, this);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdaba');
	}

	public testConvert2() {
		this.signalTwo.convert2((a, b) => [a * 2, b * 3]).add(this.calc2, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 5 * 2 + 8 * 3 + this.num);
	}

	public testPriorityConvert2() {
		this.signalTwo.convert2((a, b) => [a * 2, b * 3]).add(this.adda, this);
		this.signalTwo.convert2((a, b) => [a * 2, b * 3]).add(this.addb, this);
		this.signalTwo.convert2((a, b) => [a * 2, b * 3], 1).add(this.adda, this);
		this.signalTwo.convert2((a, b) => [a * 2, b * 3], -1).add(this.addc, this);
		this.signalTwo.convert2((a, b) => [a * 2, b * 3], -1).add(this.addd, this);
		this.eventTwo.dispatch(1, 1);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter1_() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filter1_((v) => v > 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 1);
		this.equals(this.sum, 5 + 1 + 3 + this.num);
		this.eventTwo.dispatch(1, 6);
		this.equals(this.sum, 1 + 6 + this.num);
		this.eventTwo.dispatch(7, 5);
		this.equals(this.sum, 7 + 5 + 3 + this.num);
	}

	public testPriorityFilter1_() {
		this.signalTwo.filter1_((v) => v > 2).add(this.adda, this);
		this.signalTwo.filter1_((v) => v > 2).add(this.addb, this);
		this.signalTwo.filter1_((v) => v > 2, 1).add(this.adda, this);
		this.signalTwo.filter1_((v) => v > 2, -1).add(this.addc, this);
		this.signalTwo.filter1_((v) => v > 2, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce1_() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filterOnce1_((v) => v > 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 1);
		this.equals(this.sum, 5 + 1 + 3 + this.num);
		this.eventTwo.dispatch(1, 6);
		this.equals(this.sum, 1 + 6 + this.num);
		this.eventTwo.dispatch(6, 5);
		this.equals(this.sum, 6 + 5 + this.num);
	}

	public testPriorityFilterOnce1_() {
		this.signalTwo.filterOnce1_((v) => v > 2).add(this.adda, this);
		this.signalTwo.filterOnce1_((v) => v > 2).add(this.addb, this);
		this.signalTwo.filterOnce1_((v) => v > 2, 1).add(this.adda, this);
		this.signalTwo.filterOnce1_((v) => v > 2, -1).add(this.addc, this);
		this.signalTwo.filterOnce1_((v) => v > 2, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter_2() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filter_2((v) => v > 3).add(this.add3, this);
		this.eventTwo.dispatch(4, 8);
		this.equals(this.sum, 4 + 8 + 3 + this.num);
		this.eventTwo.dispatch(7, 2);
		this.equals(this.sum, 7 + 2 + this.num);
		this.eventTwo.dispatch(6, 5);
		this.equals(this.sum, 6 + 5 + 3 + this.num);
	}

	public testPriorityFilter_2() {
		this.signalTwo.filter_2((v) => v > 2).add(this.adda, this);
		this.signalTwo.filter_2((v) => v > 2).add(this.addb, this);
		this.signalTwo.filter_2((v) => v > 2, 1).add(this.adda, this);
		this.signalTwo.filter_2((v) => v > 2, -1).add(this.addc, this);
		this.signalTwo.filter_2((v) => v > 2, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce_2() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filterOnce_2((v) => v > 3).add(this.add3, this);
		this.eventTwo.dispatch(4, 8);
		this.equals(this.sum, 4 + 8 + 3 + this.num);
		this.eventTwo.dispatch(7, 2);
		this.equals(this.sum, 7 + 2 + this.num);
		this.eventTwo.dispatch(6, 5);
		this.equals(this.sum, 6 + 5 + this.num);
	}

	public testPriorityFilterOnce_2() {
		this.signalTwo.filterOnce_2((v) => v > 2).add(this.adda, this);
		this.signalTwo.filterOnce_2((v) => v > 2).add(this.addb, this);
		this.signalTwo.filterOnce_2((v) => v > 2, 1).add(this.adda, this);
		this.signalTwo.filterOnce_2((v) => v > 2, -1).add(this.addc, this);
		this.signalTwo.filterOnce_2((v) => v > 2, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter12() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventTwo.dispatch(6, 5);
		this.equals(this.sum, 6 + 5 + 3 + this.num);
		this.eventTwo.dispatch(4, 2);
		this.equals(this.sum, 4 + 2 + this.num);
		this.eventTwo.dispatch(3, 8);
		this.equals(this.sum, 3 + 8 + this.num);
		this.eventTwo.dispatch(6, 9);
		this.equals(this.sum, 6 + 9 + 3 + this.num);
	}

	public testPriorityFilter12() {
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalTwo.filter12((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventTwo.dispatch(4, 4);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce12() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventTwo.dispatch(6, 5);
		this.equals(this.sum, 6 + 5 + 3 + this.num);
		this.eventTwo.dispatch(4, 2);
		this.equals(this.sum, 4 + 2 + this.num);
		this.eventTwo.dispatch(1, 2);
		this.equals(this.sum, 1 + 2 + this.num);
		this.eventTwo.dispatch(7, 8);
		this.equals(this.sum, 7 + 8 + this.num);
	}

	public testPriorityFilterOnce12() {
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalTwo.filterOnce12((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventTwo.dispatch(4, 4);
		this.equals(this.prList, 'cdaba');
	}

	public testDel1_() {
		this.signalTwo.del1_().add(this.calc, this);
		this.signalTwo.add(this.add3, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 8 + 3 + this.num);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 4 + 3 + this.num);
	}

	public testPriorityDel1_() {
		this.signalTwo.del1_().add(this.adda, this);
		this.signalTwo.del1_().add(this.addb, this);
		this.signalTwo.del1_(1).add(this.adda, this);
		this.signalTwo.del1_(-1).add(this.addc, this);
		this.signalTwo.del1_(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce1_() {
		this.signalTwo.delOnce1_().add(this.calc, this);
		this.signalTwo.once(this.add3, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 8 + 3 + this.num);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 8 + 3 + this.num);
	}

	public testPriorityDelOnce1_() {
		this.signalTwo.delOnce1_().add(this.adda, this);
		this.signalTwo.delOnce1_().add(this.addb, this);
		this.signalTwo.delOnce1_(1).add(this.adda, this);
		this.signalTwo.delOnce1_(-1).add(this.addc, this);
		this.signalTwo.delOnce1_(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel_2() {
		this.signalTwo.del_2().add(this.calc, this);
		this.signalTwo.add(this.add3, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 7 + 3 + this.num);
	}

	public testPriorityDel_2() {
		this.signalTwo.del_2().add(this.adda, this);
		this.signalTwo.del_2().add(this.addb, this);
		this.signalTwo.del_2(1).add(this.adda, this);
		this.signalTwo.del_2(-1).add(this.addc, this);
		this.signalTwo.del_2(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce_2() {
		this.signalTwo.delOnce_2().add(this.calc, this);
		this.signalTwo.once(this.add3, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 5 + 3 + this.num);
	}

	public testPriorityDelOnce_2() {
		this.signalTwo.delOnce_2().add(this.adda, this);
		this.signalTwo.delOnce_2().add(this.addb, this);
		this.signalTwo.delOnce_2(1).add(this.adda, this);
		this.signalTwo.delOnce_2(-1).add(this.addc, this);
		this.signalTwo.delOnce_2(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel12() {
		this.signalTwo.del12().add(this.add3, this);
		this.signalTwo.add(this.add5, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 3 + 5);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 3 + 5 + 3 + 5);
	}

	public testPriorityDel12() {
		this.signalTwo.del12().add(this.adda, this);
		this.signalTwo.del12().add(this.addb, this);
		this.signalTwo.del12(1).add(this.adda, this);
		this.signalTwo.del12(-1).add(this.addc, this);
		this.signalTwo.del12(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce12() {
		this.signalTwo.delOnce12().add(this.add3, this);
		this.signalTwo.once(this.add5, this);
		this.eventTwo.dispatch(5, 8);
		this.equals(this.sum, 5 + 3);
		this.eventTwo.dispatch(7, 4);
		this.equals(this.sum, 5 + 3);
	}

	public testPriorityDelOnce12() {
		this.signalTwo.delOnce12().add(this.adda, this);
		this.signalTwo.delOnce12().add(this.addb, this);
		this.signalTwo.delOnce12(1).add(this.adda, this);
		this.signalTwo.delOnce12(-1).add(this.addc, this);
		this.signalTwo.delOnce12(-1).add(this.addd, this);
		this.eventTwo.dispatch(3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testSub1_() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.sub1_((v) => v >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 6);
		this.equals(this.sum, 5 + 6 + 3 + this.num);
		this.eventTwo.dispatch(2, 5);
		this.equals(this.sum, 2 + 5 + this.num);
		this.eventTwo.dispatch(8, 4);
		this.equals(this.sum, 8 + 4 + 3 + this.num);
	}

	public testPrioritySub1_() {
		this.signalTwo.sub1_((v) => v >= 3).add(this.adda, this);
		this.signalTwo.sub1_((v) => v >= 3).add(this.addb, this);
		this.signalTwo.sub1_((v) => v >= 3, 1).add(this.adda, this);
		this.signalTwo.sub1_((v) => v >= 3, -1).add(this.addc, this);
		this.signalTwo.sub1_((v) => v >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 4);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce1_() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.subOnce1_((v) => v >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 7);
		this.equals(this.sum, 5 + 7 + 3 + this.num);
		this.eventTwo.dispatch(2, 3);
		this.equals(this.sum, 2 + 3 + this.num);
		this.eventTwo.dispatch(8, 8);
		this.equals(this.sum, 8 + 8 + this.num);
	}

	public testPrioritySubOnce1_() {
		this.signalTwo.subOnce1_((v) => v >= 3).add(this.adda, this);
		this.signalTwo.subOnce1_((v) => v >= 3).add(this.addb, this);
		this.signalTwo.subOnce1_((v) => v >= 3, 1).add(this.adda, this);
		this.signalTwo.subOnce1_((v) => v >= 3, -1).add(this.addc, this);
		this.signalTwo.subOnce1_((v) => v >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub_2() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.sub_2((v) => v >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 6);
		this.equals(this.sum, 5 + 6 + 3 + this.num);
		this.eventTwo.dispatch(4, 1);
		this.equals(this.sum, 4 + 1 + this.num);
		this.eventTwo.dispatch(8, 4);
		this.equals(this.sum, 8 + 4 + 3 + this.num);
	}

	public testPrioritySub_2() {
		this.signalTwo.sub_2((v) => v >= 3).add(this.adda, this);
		this.signalTwo.sub_2((v) => v >= 3).add(this.addb, this);
		this.signalTwo.sub_2((v) => v >= 3, 1).add(this.adda, this);
		this.signalTwo.sub_2((v) => v >= 3, -1).add(this.addc, this);
		this.signalTwo.sub_2((v) => v >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 4);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce_2() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.subOnce_2((v) => v >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 7);
		this.equals(this.sum, 5 + 7 + 3 + this.num);
		this.eventTwo.dispatch(5, 1);
		this.equals(this.sum, 5 + 1 + this.num);
		this.eventTwo.dispatch(8, 8);
		this.equals(this.sum, 8 + 8 + this.num);
	}

	public testPrioritySubOnce_2() {
		this.signalTwo.subOnce_2((v) => v >= 3).add(this.adda, this);
		this.signalTwo.subOnce_2((v) => v >= 3).add(this.addb, this);
		this.signalTwo.subOnce_2((v) => v >= 3, 1).add(this.adda, this);
		this.signalTwo.subOnce_2((v) => v >= 3, -1).add(this.addc, this);
		this.signalTwo.subOnce_2((v) => v >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub12() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 6);
		this.equals(this.sum, 5 + 6 + 3 + this.num);
		this.eventTwo.dispatch(4, 1);
		this.equals(this.sum, 4 + 1 + this.num);
		this.eventTwo.dispatch(1, 4);
		this.equals(this.sum, 1 + 4 + this.num);
		this.eventTwo.dispatch(5, 4);
		this.equals(this.sum, 5 + 4 + 3 + this.num);
	}

	public testPrioritySub12() {
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalTwo.sub12((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 4);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce12() {
		this.signalTwo.add(this.calc2, this);
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventTwo.dispatch(5, 7);
		this.equals(this.sum, 5 + 7 + 3 + this.num);
		this.eventTwo.dispatch(5, 1);
		this.equals(this.sum, 5 + 1 + this.num);
		this.eventTwo.dispatch(1, 8);
		this.equals(this.sum, 1 + 8 + this.num);
		this.eventTwo.dispatch(5, 7);
		this.equals(this.sum, 5 + 7 + this.num);
	}

	public testPrioritySubOnce12() {
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalTwo.subOnce12((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventTwo.dispatch(3, 5);
		this.equals(this.prList, 'cdaba');
	}

	public async asyncTestsPromise(): Promise<void> {
		DTimer.fixedDelay(10, () => this.eventTwo.dispatch(1, 2));
		const [a, b] = await this.signalTwo.promise();
		this.equals(a + b, 3);
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

	public calc(a: number) {
		this.sum = a + this.num;
	}

	public calc2(a: number, b: number) {
		this.sum = a + b + this.num;
	}

}