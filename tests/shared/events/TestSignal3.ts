import Event0 from '../../../src/events/Event0';
import Event1 from '../../../src/events/Event1';
import Event2 from '../../../src/events/Event2';
import Event3 from '../../../src/events/Event3';
import Listener0 from '../../../src/events/Listener0';
import Listener1 from '../../../src/events/Listener1';
import Listener2 from '../../../src/events/Listener2';
import Listener3 from '../../../src/events/Listener3';
import Signal0 from '../../../src/events/Signal0';
import Signal1 from '../../../src/events/Signal1';
import Signal2 from '../../../src/events/Signal2';
import Signal3 from '../../../src/events/Signal3';
import TestBase from '../../../src/testengine/TestBase';
import DTimer from '../../../src/time/DTimer';

export default class TestSignal3 extends TestBase {

	public eventEmpty: Event0 = new Event0();
	public signalEmpty: Signal0 = this.eventEmpty.signal;

	public eventOne: Event1<number> = new Event1<number>();
	public signalOne: Signal1<number> = this.eventOne.signal;

	public eventTwo: Event2<number, number> = new Event2<number, number>();
	public signalTwo: Signal2<number, number> = this.eventTwo.signal;

	public eventThree: Event3<number, number, number> = new Event3<number, number, number>();
	public signalThree: Signal3<number, number, number> = this.eventThree.signal;

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
		this.eventThree = new Event3();
		this.signalThree = this.eventThree.signal;

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

	public testAddListener3() {
		this.signalThree.addListener(new Listener3(this.add3, this));
		this.signalThree.addListener(new Listener3(this.add5, this));
		this.signalThree.addListener(new Listener3(this.add5, this));
		this.eventThree.dispatch(0, 0, 0);
		this.equals(this.sum, 8);
		this.eventThree.dispatch(0, 0, 0);
		this.equals(this.sum, 16);
	}

	public testPriorityListener3() {
		this.signalThree.addListener(new Listener3(this.adda, this));
		this.signalThree.addListener(new Listener3(this.addb, this));
		this.signalThree.addListener(new Listener3(this.adda, this), 1);
		this.signalThree.addListener(new Listener3(this.addc, this), -1);
		this.signalThree.addListener(new Listener3(this.addd, this), -1);
		this.eventThree.dispatch(1, 1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testAddOnceListener3() {
		this.signalThree.addListener(new Listener3(this.add3, this, true));
		this.signalThree.addListener(new Listener3(this.add5, this, true));
		this.signalThree.addListener(new Listener3(this.add5, this));
		this.eventThree.dispatch(0, 0, 0);
		this.equals(this.sum, 8);
		this.eventThree.dispatch(0, 0, 0);
		this.equals(this.sum, 8);
	}

	public testPriorityOnceListener3() {
		this.signalThree.addListener(new Listener3(this.adda, this, true));
		this.signalThree.addListener(new Listener3(this.addb, this, true));
		this.signalThree.addListener(new Listener3(this.adda, this, true), 1);
		this.signalThree.addListener(new Listener3(this.addc, this, true), -1);
		this.signalThree.addListener(new Listener3(this.addd, this, true), -1);
		this.eventThree.dispatch(1, 1, 1);
		this.equals(this.prList, 'cdab');
	}

	public testAdd() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.add(this.add3, this);
		this.signalThree.add(this.add5, this);
		this.signalThree.add(this.add5, this);
		this.eventThree.dispatch(7, 9, 6);
		this.equals(this.sum, 7 + 9 + 6 + 3 + 5 + this.num);
		this.eventThree.dispatch(10, 9, 8);
		this.equals(this.sum, 10 + 9 + 8 + 3 + 5 + this.num);
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
		this.signalThree.add(this.calc3, this);
		this.signalThree.once(this.add3, this);
		this.signalThree.once(this.add5, this);
		this.eventThree.dispatch(7, 9, 9);
		this.equals(this.sum, 7 + 9 + 9 + 3 + 5 + this.num);
		this.eventThree.dispatch(10, 9, 7);
		this.equals(this.sum, 10 + 9 + 7 + this.num);
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
		this.signalThree.add(this.calc3, this);
		this.signalThree.add(this.add3, this);
		this.signalThree.add(this.add5, this);
		this.eventThree.dispatch(7, 9, 2);
		this.equals(this.sum, 7 + 9 + 2 + 3 + 5 + this.num);
		this.signalThree.remove(this.add5, this);
		this.eventThree.dispatch(10, 4, 8);
		this.equals(this.sum, 10 + 4 + 8 + 3 + this.num);
		this.signalThree.remove(this.add3, this);
		this.eventThree.dispatch(5, 6, 8);
		this.equals(this.sum, 5 + 6 + 8 + this.num);
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

	public testAddEvent3() {
		const e3: Event3<number, number, number> = new Event3<number, number, number>();
		const s3: Signal3<number, number, number> = e3.signal;
		this.signalThree.add(this.calc3, this);
		this.signalThree.add(this.add3, this);
		this.signalThree.add(this.add5, this);
		this.signalThree.addEvent3(e3);
		s3.add(this.add3, this);
		s3.add(this.add5, this);
		s3.add(this.add5, this);
		this.eventThree.dispatch(2, 9, 4);
		this.equals(this.sum, 2 + 9 + 4 + 3 + 5 + 3 + 5 + this.num);
	}

	public testPriorityAddEvent3() {
		const e3: Event3<number, number, number> = new Event3<number, number, number>();
		const s3: Signal3<number, number, number> = e3.signal;
		this.signalThree.add(this.adda, this);
		this.signalThree.add(this.addb, this);
		this.signalThree.add(this.adda, this, 1);
		this.signalThree.add(this.addc, this, -1);
		this.signalThree.add(this.addd, this, -1);
		this.signalThree.addEvent3(e3);
		s3.add(this.adda, this);
		s3.add(this.addb, this);
		s3.add(this.adda, this, 1);
		s3.add(this.addc, this, -1);
		s3.add(this.addd, this, -1);
		this.eventThree.dispatch(1, 1, 1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testOnceEvent3() {
		const e3: Event3<number, number, number> = new Event3<number, number, number>();
		const s3: Signal3<number, number, number> = e3.signal;
		this.signalThree.add(this.calc3, this);
		this.signalThree.add(this.add3, this);
		this.signalThree.add(this.add5, this);
		this.signalThree.onceEvent3(e3);
		s3.add(this.add3, this);
		s3.add(this.add5, this);
		this.eventThree.dispatch(2, 9, 5);
		this.equals(this.sum, 2 + 9 + 5 + 3 + 5 + 3 + 5 + this.num);
		this.eventThree.dispatch(2, 9, 8);
		this.equals(this.sum, 2 + 9 + 8 + 3 + 5 + this.num);
	}

	public testPriorityOnceEvent3() {
		const e3: Event3<number, number, number> = new Event3<number, number, number>();
		const s3: Signal3<number, number, number> = e3.signal;
		this.signalThree.add(this.adda, this);
		this.signalThree.add(this.addb, this);
		this.signalThree.add(this.adda, this, 1);
		this.signalThree.add(this.addc, this, -1);
		this.signalThree.add(this.addd, this, -1);
		this.signalThree.onceEvent3(e3);
		s3.add(this.adda, this);
		s3.add(this.addb, this);
		s3.add(this.adda, this, 1);
		s3.add(this.addc, this, -1);
		s3.add(this.addd, this, -1);
		this.eventThree.dispatch(1, 1, 1);
		this.equals(this.prList, 'cdabcdab');
	}

	public testRemoveEvent3() {
		const e3: Event3<number, number, number> = new Event3<number, number, number>();
		const s3: Signal3<number, number, number> = e3.signal;
		this.signalThree.add(this.calc3, this);
		this.signalThree.add(this.add3, this);
		this.signalThree.add(this.add5, this);
		this.signalThree.addEvent3(e3);
		s3.add(this.add3, this);
		s3.add(this.add5, this);
		this.eventThree.dispatch(2, 9, 5);
		this.equals(this.sum, 2 + 9 + 5 + 3 + 5 + 3 + 5 + this.num);
		this.signalThree.removeEvent3(e3);
		this.eventThree.dispatch(2, 9, 8);
		this.equals(this.sum, 2 + 9 + 8 + 3 + 5 + this.num);
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
		this.isFalse(this.eventThree.have);
		this.signalThree.add(this.add3, this);
		this.isTrue(this.eventThree.have);
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

	public testConvert3() {
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2]).add(this.calc3, this);
		this.eventThree.dispatch(5, 8, 9);
		this.equals(this.sum, 5 * 2 + 8 * 3 + 9 * 2 + this.num);
	}

	public testPriorityConvert3() {
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2]).add(this.adda, this);
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2]).add(this.addb, this);
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2], 1).add(this.adda, this);
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2], -1).add(this.addc, this);
		this.signalThree.convert3((a, b, c) => [a * 2, b * 3, c * 2], -1).add(this.addd, this);
		this.eventThree.dispatch(1, 1, 1);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter1__() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter1__((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(5, 1, 3);
		this.equals(this.sum, 5 + 1 + 3 + 3 + this.num);
		this.eventThree.dispatch(1, 6, 7);
		this.equals(this.sum, 1 + 6 + 7 + this.num);
		this.eventThree.dispatch(7, 5, 1);
		this.equals(this.sum, 7 + 5 + 1 + 3 + this.num);
	}

	public testPriorityFilter1__() {
		this.signalThree.filter1__((v) => v > 2).add(this.adda, this);
		this.signalThree.filter1__((v) => v > 2).add(this.addb, this);
		this.signalThree.filter1__((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filter1__((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filter1__((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce1__() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce1__((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(5, 1, 2);
		this.equals(this.sum, 5 + 1 + 2 + 3 + this.num);
		this.eventThree.dispatch(1, 6, 2);
		this.equals(this.sum, 1 + 6 + 2 + this.num);
		this.eventThree.dispatch(6, 5, 6);
		this.equals(this.sum, 6 + 5 + 6 + this.num);
	}

	public testPriorityFilterOnce1__() {
		this.signalThree.filterOnce1__((v) => v > 2).add(this.adda, this);
		this.signalThree.filterOnce1__((v) => v > 2).add(this.addb, this);
		this.signalThree.filterOnce1__((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filterOnce1__((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filterOnce1__((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter_2_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter_2_((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(4, 8, 6);
		this.equals(this.sum, 4 + 8 + 6 + 3 + this.num);
		this.eventThree.dispatch(7, 2, 6);
		this.equals(this.sum, 7 + 2 + 6 + this.num);
		this.eventThree.dispatch(6, 5, 8);
		this.equals(this.sum, 6 + 5 + 8 + 3 + this.num);
	}

	public testPriorityFilter_2_() {
		this.signalThree.filter_2_((v) => v > 2).add(this.adda, this);
		this.signalThree.filter_2_((v) => v > 2).add(this.addb, this);
		this.signalThree.filter_2_((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filter_2_((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filter_2_((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce_2_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce_2_((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(4, 8, 3);
		this.equals(this.sum, 4 + 8 + 3 + 3 + this.num);
		this.eventThree.dispatch(7, 2, 7);
		this.equals(this.sum, 7 + 2 + 7 + this.num);
		this.eventThree.dispatch(6, 5, 7);
		this.equals(this.sum, 6 + 5 + 7 + this.num);
	}

	public testPriorityOnceFilter_2_() {
		this.signalThree.filterOnce_2_((v) => v > 2).add(this.adda, this);
		this.signalThree.filterOnce_2_((v) => v > 2).add(this.addb, this);
		this.signalThree.filterOnce_2_((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filterOnce_2_((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filterOnce_2_((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter__3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter__3((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(4, 8, 6);
		this.equals(this.sum, 4 + 8 + 6 + 3 + this.num);
		this.eventThree.dispatch(7, 2, 1);
		this.equals(this.sum, 7 + 2 + 1 + this.num);
		this.eventThree.dispatch(6, 5, 8);
		this.equals(this.sum, 6 + 5 + 8 + 3 + this.num);
	}

	public testPriorityFilter__3() {
		this.signalThree.filter__3((v) => v > 2).add(this.adda, this);
		this.signalThree.filter__3((v) => v > 2).add(this.addb, this);
		this.signalThree.filter__3((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filter__3((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filter__3((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce__3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce__3((v) => v > 3).add(this.add3, this);
		this.eventThree.dispatch(4, 8, 4);
		this.equals(this.sum, 4 + 8 + 4 + 3 + this.num);
		this.eventThree.dispatch(7, 2, 1);
		this.equals(this.sum, 7 + 2 + 1 + this.num);
		this.eventThree.dispatch(6, 5, 7);
		this.equals(this.sum, 6 + 5 + 7 + this.num);
	}

	public testPriorityFilterOnce__3() {
		this.signalThree.filterOnce__3((v) => v > 2).add(this.adda, this);
		this.signalThree.filterOnce__3((v) => v > 2).add(this.addb, this);
		this.signalThree.filterOnce__3((v) => v > 2, 1).add(this.adda, this);
		this.signalThree.filterOnce__3((v) => v > 2, -1).add(this.addc, this);
		this.signalThree.filterOnce__3((v) => v > 2, -1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter12_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 3);
		this.equals(this.sum, 6 + 5 + 3 + 3 + this.num);
		this.eventThree.dispatch(4, 2, 8);
		this.equals(this.sum, 4 + 2 + 8 + this.num);
		this.eventThree.dispatch(4, 8, 5);
		this.equals(this.sum, 4 + 8 + 8 + this.num);
		this.eventThree.dispatch(6, 9, 8);
		this.equals(this.sum, 6 + 9 + 8 + 3 + this.num);
	}

	public testPriorityFilter12_() {
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filter12_((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce12_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 5);
		this.equals(this.sum, 6 + 5 + 5 + 3 + this.num);
		this.eventThree.dispatch(4, 2, 5);
		this.equals(this.sum, 4 + 2 + 5 + this.num);
		this.eventThree.dispatch(1, 2, 8);
		this.equals(this.sum, 1 + 2 + 8 + this.num);
		this.eventThree.dispatch(7, 8, 3);
		this.equals(this.sum, 7 + 8 + 3 + this.num);
	}

	public testPriorityFilterOnce12_() {
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filterOnce12_((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter1_3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 4);
		this.equals(this.sum, 6 + 5 + 4 + 3 + this.num);
		this.eventThree.dispatch(1, 5, 8);
		this.equals(this.sum, 1 + 5 + 8 + this.num);
		this.eventThree.dispatch(4, 8, 2);
		this.equals(this.sum, 4 + 8 + 2 + this.num);
		this.eventThree.dispatch(6, 9, 8);
		this.equals(this.sum, 6 + 9 + 8 + 3 + this.num);
	}

	public testPriorityFilter1_3() {
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filter1_3((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce1_3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 5);
		this.equals(this.sum, 6 + 5 + 5 + 3 + this.num);
		this.eventThree.dispatch(2, 2, 5);
		this.equals(this.sum, 2 + 2 + 5 + this.num);
		this.eventThree.dispatch(6, 2, 1);
		this.equals(this.sum, 6 + 2 + 1 + this.num);
		this.eventThree.dispatch(7, 8, 4);
		this.equals(this.sum, 7 + 8 + 4 + this.num);
	}

	public testPriorityFilterOnce1_3() {
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filterOnce1_3((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter_23() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 4);
		this.equals(this.sum, 6 + 5 + 4 + 3 + this.num);
		this.eventThree.dispatch(4, 2, 8);
		this.equals(this.sum, 4 + 2 + 8 + this.num);
		this.eventThree.dispatch(3, 8, 1);
		this.equals(this.sum, 3 + 8 + 1 + this.num);
		this.eventThree.dispatch(6, 9, 8);
		this.equals(this.sum, 6 + 9 + 8 + 3 + this.num);
	}

	public testPriorityFilter_23() {
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filter_23((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce_23() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 5);
		this.equals(this.sum, 6 + 5 + 3 + 5 + this.num);
		this.eventThree.dispatch(4, 2, 5);
		this.equals(this.sum, 4 + 2 + 5 + this.num);
		this.eventThree.dispatch(1, 2, 8);
		this.equals(this.sum, 1 + 2 + 8 + this.num);
		this.eventThree.dispatch(7, 8, 3);
		this.equals(this.sum, 7 + 8 + 3 + this.num);
	}

	public testPriorityFilterOnce_23() {
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3)).add(this.adda, this);
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3)).add(this.addb, this);
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3), 1).add(this.adda, this);
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3), -1).add(this.addc, this);
		this.signalThree.filterOnce_23((a, b) => (a > 3 && b > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilter123() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 5);
		this.equals(this.sum, 6 + 5 + 5 + 3 + this.num);
		this.eventThree.dispatch(4, 2, 8);
		this.equals(this.sum, 4 + 2 + 8 + this.num);
		this.eventThree.dispatch(3, 8, 5);
		this.equals(this.sum, 3 + 8 + 5 + this.num);
		this.eventThree.dispatch(6, 9, 1);
		this.equals(this.sum, 6 + 9 + 1 + this.num);
		this.eventThree.dispatch(6, 9, 7);
		this.equals(this.sum, 6 + 9 + 7 + 3 + this.num);
	}

	public testPriorityFilter123() {
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.adda, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.addb, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3), 1).add(this.adda, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3), -1).add(this.addc, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce123() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.filter123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.add3, this);
		this.eventThree.dispatch(6, 5, 5);
		this.equals(this.sum, 6 + 5 + 3 + 5 + this.num);
		this.eventThree.dispatch(4, 2, 5);
		this.equals(this.sum, 4 + 2 + 5 + this.num);
		this.eventThree.dispatch(1, 2, 8);
		this.equals(this.sum, 1 + 2 + 8 + this.num);
		this.eventThree.dispatch(7, 8, 3);
		this.equals(this.sum, 7 + 8 + 3 + this.num);
	}

	public testPriorityFilteOnce123() {
		this.signalThree.filterOnce123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.adda, this);
		this.signalThree.filterOnce123((a, b, c) => (a > 3 && b > 3 && c > 3)).add(this.addb, this);
		this.signalThree.filterOnce123((a, b, c) => (a > 3 && b > 3 && c > 3), 1).add(this.adda, this);
		this.signalThree.filterOnce123((a, b, c) => (a > 3 && b > 3 && c > 3), -1).add(this.addc, this);
		this.signalThree.filterOnce123((a, b, c) => (a > 3 && b > 3 && c > 3), -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testDel1__() {
		this.signalThree.del1__().add(this.calc2, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 8 + 4 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 2);
		this.equals(this.sum, 4 + 2 + 3 + this.num);
	}

	public testPriorityDel1__() {
		this.signalThree.del1__().add(this.adda, this);
		this.signalThree.del1__().add(this.addb, this);
		this.signalThree.del1__(1).add(this.adda, this);
		this.signalThree.del1__(-1).add(this.addc, this);
		this.signalThree.del1__(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce1__() {
		this.signalThree.delOnce1__().add(this.calc2, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 8 + 4 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 6);
		this.equals(this.sum, 8 + 4 + 3 + this.num);
	}

	public testPriorityDelOnce1__() {
		this.signalThree.delOnce1__().add(this.adda, this);
		this.signalThree.delOnce1__().add(this.addb, this);
		this.signalThree.delOnce1__(1).add(this.adda, this);
		this.signalThree.delOnce1__(-1).add(this.addc, this);
		this.signalThree.delOnce1__(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel_2_() {
		this.signalThree.del_2_().add(this.calc2, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 5 + 1 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 3);
		this.equals(this.sum, 7 + 3 + 3 + this.num);
	}

	public testPriorityDel_2_() {
		this.signalThree.del_2_().add(this.adda, this);
		this.signalThree.del_2_().add(this.addb, this);
		this.signalThree.del_2_(1).add(this.adda, this);
		this.signalThree.del_2_(-1).add(this.addc, this);
		this.signalThree.del_2_(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce_2_() {
		this.signalThree.delOnce_2_().add(this.calc2, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 9);
		this.equals(this.sum, 5 + 9 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 4);
		this.equals(this.sum, 5 + 9 + 3 + this.num);
	}

	public testPriorityDelOnce_2_() {
		this.signalThree.delOnce_2_().add(this.adda, this);
		this.signalThree.delOnce_2_().add(this.addb, this);
		this.signalThree.delOnce_2_(1).add(this.adda, this);
		this.signalThree.delOnce_2_(-1).add(this.addc, this);
		this.signalThree.delOnce_2_(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel__3() {
		this.signalThree.del__3().add(this.calc2, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 5 + 8 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 3);
		this.equals(this.sum, 7 + 4 + 3 + this.num);
	}

	public testPriorityDel__3() {
		this.signalThree.del__3().add(this.adda, this);
		this.signalThree.del__3().add(this.addb, this);
		this.signalThree.del__3(1).add(this.adda, this);
		this.signalThree.del__3(-1).add(this.addc, this);
		this.signalThree.del__3(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce__3() {
		this.signalThree.delOnce__3().add(this.calc2, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 9);
		this.equals(this.sum, 5 + 8 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 4);
		this.equals(this.sum, 5 + 8 + 3 + this.num);
	}

	public testPriorityDelOnce__3() {
		this.signalThree.delOnce__3().add(this.adda, this);
		this.signalThree.delOnce__3().add(this.addb, this);
		this.signalThree.delOnce__3(1).add(this.adda, this);
		this.signalThree.delOnce__3(-1).add(this.addc, this);
		this.signalThree.delOnce__3(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel12_() {
		this.signalThree.del12_().add(this.calc, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 1 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 6);
		this.equals(this.sum, 6 + 3 + this.num);
	}

	public testPriorityDel12_() {
		this.signalThree.del12_().add(this.adda, this);
		this.signalThree.del12_().add(this.addb, this);
		this.signalThree.del12_(1).add(this.adda, this);
		this.signalThree.del12_(-1).add(this.addc, this);
		this.signalThree.del12_(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce12_() {
		this.signalThree.delOnce12_().add(this.calc, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 4 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 8);
		this.equals(this.sum, 4 + 3 + this.num);
	}

	public testPriorityDelOnce12_() {
		this.signalThree.delOnce12_().add(this.adda, this);
		this.signalThree.delOnce12_().add(this.addb, this);
		this.signalThree.delOnce12_(1).add(this.adda, this);
		this.signalThree.delOnce12_(-1).add(this.addc, this);
		this.signalThree.delOnce12_(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel1_3() {
		this.signalThree.del1_3().add(this.calc, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 8 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 6);
		this.equals(this.sum, 4 + 3 + this.num);
	}

	public testPriorityDel1_3() {
		this.signalThree.del1_3().add(this.adda, this);
		this.signalThree.del1_3().add(this.addb, this);
		this.signalThree.del1_3(1).add(this.adda, this);
		this.signalThree.del1_3(-1).add(this.addc, this);
		this.signalThree.del1_3(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce1_3() {
		this.signalThree.delOnce1_3().add(this.calc, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 8 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 8);
		this.equals(this.sum, 8 + 3 + this.num);
	}

	public testPriorityDelOnce1_3() {
		this.signalThree.delOnce1_3().add(this.adda, this);
		this.signalThree.delOnce1_3().add(this.addb, this);
		this.signalThree.delOnce1_3(1).add(this.adda, this);
		this.signalThree.delOnce1_3(-1).add(this.addc, this);
		this.signalThree.delOnce1_3(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel_23() {
		this.signalThree.del_23().add(this.calc, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 6);
		this.equals(this.sum, 7 + 3 + this.num);
	}

	public testPriorityDel_23() {
		this.signalThree.del_23().add(this.adda, this);
		this.signalThree.del_23().add(this.addb, this);
		this.signalThree.del_23(1).add(this.adda, this);
		this.signalThree.del_23(-1).add(this.addc, this);
		this.signalThree.del_23(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce_23() {
		this.signalThree.delOnce_23().add(this.calc, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventThree.dispatch(7, 4, 8);
		this.equals(this.sum, 5 + 3 + this.num);
	}

	public testPriorityDelOnce_23() {
		this.signalThree.delOnce_23().add(this.adda, this);
		this.signalThree.delOnce_23().add(this.addb, this);
		this.signalThree.delOnce_23(1).add(this.adda, this);
		this.signalThree.delOnce_23(-1).add(this.addc, this);
		this.signalThree.delOnce_23(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel123() {
		this.signalThree.del123().add(this.add5, this);
		this.signalThree.add(this.add3, this);
		this.eventThree.dispatch(5, 8, 1);
		this.equals(this.sum, 5 + 3);
		this.eventThree.dispatch(7, 4, 6);
		this.equals(this.sum, 5 + 3 + 5 + 3);
	}

	public testPriorityDel123() {
		this.signalThree.del123().add(this.adda, this);
		this.signalThree.del123().add(this.addb, this);
		this.signalThree.del123(1).add(this.adda, this);
		this.signalThree.del123(-1).add(this.addc, this);
		this.signalThree.del123(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce123() {
		this.signalThree.delOnce123().add(this.add5, this);
		this.signalThree.once(this.add3, this);
		this.eventThree.dispatch(5, 8, 4);
		this.equals(this.sum, 5 + 3);
		this.eventThree.dispatch(7, 4, 8);
		this.equals(this.sum, 5 + 3);
	}

	public testPriorityDelOnce123() {
		this.signalThree.delOnce123().add(this.adda, this);
		this.signalThree.delOnce123().add(this.addb, this);
		this.signalThree.delOnce123(1).add(this.adda, this);
		this.signalThree.delOnce123(-1).add(this.addc, this);
		this.signalThree.delOnce123(-1).add(this.addd, this);
		this.eventThree.dispatch(3, 3, 3);
		this.equals(this.prList, 'cdaba');
	}

	public testSub1__() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub1__((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 4);
		this.equals(this.sum, 5 + 6 + 4 + 3 + this.num);
		this.eventThree.dispatch(2, 5, 7);
		this.equals(this.sum, 2 + 5 + 7 + this.num);
		this.eventThree.dispatch(8, 4, 1);
		this.equals(this.sum, 8 + 4 + 1 + 3 + this.num);
	}

	public testPrioritySub1__() {
		this.signalThree.sub1__((v) => v >= 3).add(this.adda, this);
		this.signalThree.sub1__((v) => v >= 3).add(this.addb, this);
		this.signalThree.sub1__((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.sub1__((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.sub1__((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce1__() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce1__((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 8);
		this.equals(this.sum, 5 + 7 + 8 + 3 + this.num);
		this.eventThree.dispatch(2, 3, 9);
		this.equals(this.sum, 2 + 3 + 9 + this.num);
		this.eventThree.dispatch(8, 8, 7);
		this.equals(this.sum, 8 + 8 + 7 + this.num);
	}

	public testPrioritySuOnce11__() {
		this.signalThree.subOnce1__((v) => v >= 3).add(this.adda, this);
		this.signalThree.subOnce1__((v) => v >= 3).add(this.addb, this);
		this.signalThree.subOnce1__((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce1__((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce1__((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub_2_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub_2_((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 4);
		this.equals(this.sum, 5 + 6 + 4 + 3 + this.num);
		this.eventThree.dispatch(4, 1, 8);
		this.equals(this.sum, 4 + 1 + 8 + this.num);
		this.eventThree.dispatch(8, 4, 1);
		this.equals(this.sum, 8 + 4 + 1 + 3 + this.num);
	}

	public testPrioritySub_2_() {
		this.signalThree.sub_2_((v) => v >= 3).add(this.adda, this);
		this.signalThree.sub_2_((v) => v >= 3).add(this.addb, this);
		this.signalThree.sub_2_((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.sub_2_((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.sub_2_((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce_2_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce_2_((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 1);
		this.equals(this.sum, 5 + 7 + 1 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 9);
		this.equals(this.sum, 5 + 1 + 9 + this.num);
		this.eventThree.dispatch(8, 8, 2);
		this.equals(this.sum, 8 + 8 + 2 + this.num);
	}

	public testPrioritySubOnce_2_() {
		this.signalThree.subOnce_2_((v) => v >= 3).add(this.adda, this);
		this.signalThree.subOnce_2_((v) => v >= 3).add(this.addb, this);
		this.signalThree.subOnce_2_((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce_2_((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce_2_((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub__3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub__3((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 4);
		this.equals(this.sum, 5 + 6 + 4 + 3 + this.num);
		this.eventThree.dispatch(4, 1, 2);
		this.equals(this.sum, 4 + 1 + 2 + this.num);
		this.eventThree.dispatch(8, 4, 5);
		this.equals(this.sum, 8 + 4 + 5 + 3 + this.num);
	}

	public testPrioritySub__3() {
		this.signalThree.sub__3((v) => v >= 3).add(this.adda, this);
		this.signalThree.sub__3((v) => v >= 3).add(this.addb, this);
		this.signalThree.sub__3((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.sub__3((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.sub__3((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce__3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce__3((v) => v >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 4);
		this.equals(this.sum, 5 + 7 + 4 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 3);
		this.equals(this.sum, 5 + 1 + 3 + this.num);
		this.eventThree.dispatch(8, 8, 4);
		this.equals(this.sum, 8 + 8 + 4 + this.num);
	}

	public testPrioritySubOnce__3() {
		this.signalThree.subOnce__3((v) => v >= 3).add(this.adda, this);
		this.signalThree.subOnce__3((v) => v >= 3).add(this.addb, this);
		this.signalThree.subOnce__3((v) => v >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce__3((v) => v >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce__3((v) => v >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub12_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 8);
		this.equals(this.sum, 5 + 6 + 8 + 3 + this.num);
		this.eventThree.dispatch(4, 1, 4);
		this.equals(this.sum, 4 + 1 + 4 + this.num);
		this.eventThree.dispatch(1, 4, 2);
		this.equals(this.sum, 1 + 4 + 2 + this.num);
		this.eventThree.dispatch(5, 4, 1);
		this.equals(this.sum, 5 + 4 + 1 + 3 + this.num);
	}

	public testPrioritySub12_() {
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.sub12_((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce12_() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 9);
		this.equals(this.sum, 5 + 7 + 9 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 2);
		this.equals(this.sum, 5 + 1 + 2 + this.num);
		this.eventThree.dispatch(1, 8, 7);
		this.equals(this.sum, 1 + 8 + 7 + this.num);
		this.eventThree.dispatch(5, 7, 8);
		this.equals(this.sum, 5 + 7 + 8 + this.num);
	}

	public testPrioritySubOnce12_() {
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce12_((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub1_3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 8);
		this.equals(this.sum, 5 + 6 + 8 + 3 + this.num);
		this.eventThree.dispatch(2, 1, 4);
		this.equals(this.sum, 2 + 1 + 4 + this.num);
		this.eventThree.dispatch(5, 4, 2);
		this.equals(this.sum, 5 + 4 + 2 + this.num);
		this.eventThree.dispatch(5, 1, 6);
		this.equals(this.sum, 5 + 1 + 6 + 3 + this.num);
	}

	public testPrioritySub1_3() {
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.sub1_3((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce1_3() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 9);
		this.equals(this.sum, 5 + 7 + 9 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 2);
		this.equals(this.sum, 5 + 1 + 2 + this.num);
		this.eventThree.dispatch(1, 8, 7);
		this.equals(this.sum, 1 + 8 + 7 + this.num);
		this.eventThree.dispatch(5, 7, 8);
		this.equals(this.sum, 5 + 7 + 8 + this.num);
	}

	public testPrioritySubOnce1_3() {
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce1_3((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub_23() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 8);
		this.equals(this.sum, 5 + 6 + 8 + 3 + this.num);
		this.eventThree.dispatch(4, 1, 4);
		this.equals(this.sum, 4 + 1 + 4 + this.num);
		this.eventThree.dispatch(1, 4, 2);
		this.equals(this.sum, 1 + 4 + 2 + this.num);
		this.eventThree.dispatch(5, 4, 6);
		this.equals(this.sum, 5 + 4 + 6 + 3 + this.num);
	}

	public testPrioritySub_23() {
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.sub_23((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce_23() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 9);
		this.equals(this.sum, 5 + 7 + 9 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 2);
		this.equals(this.sum, 5 + 1 + 2 + this.num);
		this.eventThree.dispatch(1, 8, 1);
		this.equals(this.sum, 1 + 8 + 1 + this.num);
		this.eventThree.dispatch(5, 7, 8);
		this.equals(this.sum, 5 + 7 + 8 + this.num);
	}

	public testPrioritySubOnce_23() {
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3).add(this.adda, this);
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3).add(this.addb, this);
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3, 1).add(this.adda, this);
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3, -1).add(this.addc, this);
		this.signalThree.subOnce_23((a, b) => a >= 3 && b >= 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSub123() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.sub123((a, b, c) => a >= 3 && b >= 3 && c >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 6, 8);
		this.equals(this.sum, 5 + 6 + 8 + 3 + this.num);
		this.eventThree.dispatch(4, 1, 4);
		this.equals(this.sum, 4 + 1 + 4 + this.num);
		this.eventThree.dispatch(5, 4, 2);
		this.equals(this.sum, 5 + 4 + 2 + this.num);
		this.eventThree.dispatch(5, 1, 6);
		this.equals(this.sum, 5 + 1 + 6 + this.num);
		this.eventThree.dispatch(5, 4, 6);
		this.equals(this.sum, 5 + 4 + 6 + 3 + this.num);
	}

	public testPrioritySub123() {
		this.signalThree.sub123((a, b, c) => a > 3 && b > 3 && c > 3).add(this.adda, this);
		this.signalThree.sub123((a, b, c) => a > 3 && b > 3 && c > 3).add(this.addb, this);
		this.signalThree.sub123((a, b, c) => a > 3 && b > 3 && c > 3, 1).add(this.adda, this);
		this.signalThree.sub123((a, b, c) => a > 3 && b > 3 && c > 3, -1).add(this.addc, this);
		this.signalThree.sub123((a, b, c) => a > 3 && b > 3 && c > 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce123() {
		this.signalThree.add(this.calc3, this);
		this.signalThree.subOnce123((a, b, c) => a >= 3 && b >= 3 && c >= 3).add(this.add3, this);
		this.eventThree.dispatch(5, 7, 9);
		this.equals(this.sum, 5 + 7 + 9 + 3 + this.num);
		this.eventThree.dispatch(5, 1, 2);
		this.equals(this.sum, 5 + 1 + 2 + this.num);
		this.eventThree.dispatch(1, 8, 1);
		this.equals(this.sum, 1 + 8 + 1 + this.num);
		this.eventThree.dispatch(5, 7, 8);
		this.equals(this.sum, 5 + 7 + 8 + this.num);
	}

	public testPrioritySubOnce123() {
		this.signalThree.subOnce123((a, b, c) => a > 3 && b > 3 && c > 3).add(this.adda, this);
		this.signalThree.subOnce123((a, b, c) => a > 3 && b > 3 && c > 3).add(this.addb, this);
		this.signalThree.subOnce123((a, b, c) => a > 3 && b > 3 && c > 3, 1).add(this.adda, this);
		this.signalThree.subOnce123((a, b, c) => a > 3 && b > 3 && c > 3, -1).add(this.addc, this);
		this.signalThree.subOnce123((a, b, c) => a > 3 && b > 3 && c > 3, -1).add(this.addd, this);
		this.eventThree.dispatch(5, 5, 5);
		this.equals(this.prList, 'cdaba');
	}

	public async asyncTestsPromise(): Promise<void> {
		DTimer.fixedDelay(10, () => this.eventThree.dispatch(1, 2, 4));
		const [a, b, c] = await this.signalThree.promise();
		this.equals(a + b + c, 7);
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

	public calc3(a: number, b: number, c: number) {
		this.sum = a + b + c + this.num;
	}

}