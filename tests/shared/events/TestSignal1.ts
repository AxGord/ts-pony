import Event0 from '../../../src/events/Event0';
import Event1 from '../../../src/events/Event1';
import Listener0 from '../../../src/events/Listener0';
import Listener1 from '../../../src/events/Listener1';
import Signal0 from '../../../src/events/Signal0';
import Signal1 from '../../../src/events/Signal1';
import TestBase from '../../../src/testengine/TestBase';
import DTimer from '../../../src/time/DTimer';

export default class TestSignal1 extends TestBase {

	public eventEmpty: Event0 = new Event0();
	public signalEmpty: Signal0 = this.eventEmpty.signal;

	public eventOne: Event1<number> = new Event1<number>();
	public signalOne: Signal1<number> = this.eventOne.signal;

	public sum: number = 0;
	public num: number = 5;
	public prList: string = '';

	public before() {
		this.eventEmpty = new Event0();
		this.signalEmpty = this.eventEmpty.signal;
		this.eventOne = new Event1();
		this.signalOne = this.eventOne.signal;

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
		this.equals(this.sum, 8);
		this.eventEmpty.dispatch();
		this.equals(this.sum, 8);
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

	public testAddListener1() {
		this.signalOne.addListener(new Listener1(this.add3, this));
		this.signalOne.addListener(new Listener1(this.add5, this));
		this.signalOne.addListener(new Listener1(this.add5, this));
		this.eventOne.dispatch(7);
		this.equals(this.sum, 8);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 16);
	}

	public testProrityListener1() {
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

	public testProrityOnceListener1() {
		this.signalOne.addListener(new Listener1(this.adda, this, true));
		this.signalOne.addListener(new Listener1(this.addb, this, true));
		this.signalOne.addListener(new Listener1(this.adda, this, true), 1);
		this.signalOne.addListener(new Listener1(this.addc, this, true), -1);
		this.signalOne.addListener(new Listener1(this.addd, this, true), -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdab');
	}

	public testAdd() {
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.signalOne.add(this.add5, this);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 7 + 3 + 5 + this.num);
		this.eventOne.dispatch(10);
		this.equals(this.sum, 10 + 3 + 5 + this.num);
	}

	public testPriorityAdd() {
		this.signalOne.add(this.adda, this);
		this.signalOne.add(this.addb, this);
		this.signalOne.add(this.adda, this, 1);
		this.signalOne.add(this.addc, this, -1);
		this.signalOne.add(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdab');
	}

	public testAddOnce() {
		this.signalOne.add(this.calc, this);
		this.signalOne.once(this.add3, this);
		this.signalOne.once(this.add5, this);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 7 + 3 + 5 + this.num);
		this.eventOne.dispatch(10);
		this.equals(this.sum, 10 + this.num);
	}

	public testPriorityAddOnce() {
		this.signalOne.once(this.adda, this);
		this.signalOne.once(this.addb, this);
		this.signalOne.once(this.adda, this, 1);
		this.signalOne.once(this.addc, this, -1);
		this.signalOne.once(this.addd, this, -1);
		this.eventOne.dispatch(1);
		this.equals(this.prList, 'cdab');
	}

	public testRemove() {
		this.signalOne.add(this.calc, this);
		this.signalOne.add(this.add3, this);
		this.signalOne.add(this.add5, this);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 7 + 3 + 5 + this.num);
		this.signalOne.remove(this.add5, this);
		this.eventOne.dispatch(10);
		this.equals(this.sum, 10 + 3 + this.num);
		this.signalOne.remove(this.add3, this);
		this.eventOne.dispatch(3);
		this.equals(this.sum, 3 + this.num);
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
		this.isFalse(this.eventOne.have);
		this.signalOne.add(this.add3, this);
		this.isTrue(this.eventOne.have);
	}

	public testConvert1() {
		this.signalOne.convert1((v) => v * 2).add(this.calc, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 10 + this.num);
	}

	public testConver1Take() {
		let r: boolean = false;
		let runned: boolean = false;
		const convertedSignal = this.signalOne.convert1((v) => {
			runned = true;
			return v * 2;
		});
		this.eventOne.signalTake.add(() => r = true);
		this.isFalse(r);
		this.isFalse(runned);
		this.eventOne.dispatch(3);
		convertedSignal.add(this.calc, this);
		this.isTrue(r);
		this.isFalse(runned);
		this.eventOne.dispatch(3);
		this.isTrue(runned);
		this.equals(this.sum, 6 + this.num);
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

	public testFilter1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.filter1((v) => v >= 3).add(this.add3, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + this.num);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + 3 + this.num);
	}

	public testPriorityFilter1() {
		this.signalOne.filter1((v) => v > 2).add(this.adda, this);
		this.signalOne.filter1((v) => v > 2).add(this.addb, this);
		this.signalOne.filter1((v) => v > 2, 1).add(this.adda, this);
		this.signalOne.filter1((v) => v > 2, -1).add(this.addc, this);
		this.signalOne.filter1((v) => v > 2, -1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public testFilterOnce1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.filterOnce1((v) => v >= 3).add(this.add3, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + this.num);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + this.num);
	}

	public testPriorityFilterOnce1() {
		this.signalOne.filterOnce1((v) => v > 2).add(this.adda, this);
		this.signalOne.filterOnce1((v) => v > 2).add(this.addb, this);
		this.signalOne.filterOnce1((v) => v > 2, 1).add(this.adda, this);
		this.signalOne.filterOnce1((v) => v > 2, -1).add(this.addc, this);
		this.signalOne.filterOnce1((v) => v > 2, -1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public testDel1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.del1().add(this.add3, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 8 + this.num);
	}

	public testPriorityDel1() {
		this.signalOne.del1().add(this.adda, this);
		this.signalOne.del1().add(this.addb, this);
		this.signalOne.del1(1).add(this.adda, this);
		this.signalOne.del1(-1).add(this.addc, this);
		this.signalOne.del1(-1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public testDelOnce1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.delOnce1().add(this.add3, this);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 7 + 3 + this.num);
		this.eventOne.dispatch(7);
		this.equals(this.sum, 7 + this.num);
	}

	public testPriorityDelOnce1() {
		this.signalOne.delOnce1().add(this.adda, this);
		this.signalOne.delOnce1().add(this.addb, this);
		this.signalOne.delOnce1(1).add(this.adda, this);
		this.signalOne.delOnce1(-1).add(this.addc, this);
		this.signalOne.delOnce1(-1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public testSub1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.sub1((v) => v >= 3).add(this.add3, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + this.num);
		this.eventOne.dispatch(8);
		this.equals(this.sum, 8 + 3 + this.num);
	}

	public testPrioritySub1() {
		this.signalOne.sub1((v) => v >= 3).add(this.adda, this);
		this.signalOne.sub1((v) => v >= 3).add(this.addb, this);
		this.signalOne.sub1((v) => v >= 3, 1).add(this.adda, this);
		this.signalOne.sub1((v) => v >= 3, -1).add(this.addc, this);
		this.signalOne.sub1((v) => v >= 3, -1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public testSubOnce1() {
		this.signalOne.add(this.calc, this);
		this.signalOne.subOnce1((v) => v >= 3).add(this.add3, this);
		this.eventOne.dispatch(5);
		this.equals(this.sum, 5 + 3 + this.num);
		this.eventOne.dispatch(2);
		this.equals(this.sum, 2 + this.num);
		this.eventOne.dispatch(8);
		this.equals(this.sum, 8 + this.num);
	}

	public testPriritySubOnce1() {
		this.signalOne.subOnce1((v) => v >= 3).add(this.adda, this);
		this.signalOne.subOnce1((v) => v >= 3).add(this.addb, this);
		this.signalOne.subOnce1((v) => v >= 3, 1).add(this.adda, this);
		this.signalOne.subOnce1((v) => v >= 3, -1).add(this.addc, this);
		this.signalOne.subOnce1((v) => v >= 3, -1).add(this.addd, this);
		this.eventOne.dispatch(3);
		this.equals(this.prList, 'cdaba');
	}

	public async asyncTestsPromise(): Promise<void> {
		DTimer.fixedDelay(10, () => this.eventOne.dispatch(5));
		const [r] = await this.signalOne.promise();
		this.equals(r, 5);
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

}