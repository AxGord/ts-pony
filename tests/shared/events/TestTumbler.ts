import Tumbler from '../../../src/events/Tumbler';
import TestBase from '../../../src/testengine/TestBase';

export default class TestTumbler extends TestBase {

	public testSet() {
		const t = new Tumbler();
		this.isFalse(t.enabled);
		t.enable();
		this.isTrue(t.enabled);
	}

	public testStateSignal() {
		let flag = true;
		let counter: number = 0;
		const t = new Tumbler(true);
		this.isTrue(t.enabled);
		t.signalState.add((v) => flag = v);
		t.signalState.add(() => counter++);
		t.enabled = true;
		this.isTrue(flag);
		this.isTrue(t.enabled);
		this.equals(counter, 0);
		t.enabled = false;
		this.isFalse(flag);
		this.isFalse(t.enabled);
		this.equals(counter, 1);
		t.enabled = false;
		this.equals(counter, 1);
		t.enabled = true;
		t.enabled = true;
		this.isTrue(flag);
		this.isTrue(t.enabled);
		this.equals(counter, 2);
	}

	public testOnOffSignals() {
		let counterOn: number = 0;
		let counterOff: number = 0;
		const t = new Tumbler();
		t.signalEnable.add(() => counterOn++);
		t.signalDisable.add(() => counterOff++);
		t.enable();
		t.enable();
		t.disable();
		t.enable();
		t.disable();
		t.disable();
		t.enable();
		this.equals(counterOn, 3);
		this.equals(counterOff, 2);
	}

}