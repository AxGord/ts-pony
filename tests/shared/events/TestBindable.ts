import Bindable from '../../../src/events/Bindable';
import TestBase from '../../../src/testengine/TestBase';

export default class TestBindable extends TestBase {

	public testBoolSet() {
		const obj = new Bindable<boolean>(false);
		this.isFalse(obj.value);
		obj.value = true;
		this.isTrue(obj.value);
	}

	public testBool() {
		let flag = true;
		let counter: number = 0;
		const obj = new Bindable<boolean>(true);
		this.isTrue(obj.value);
		obj.add((v) => flag = v);
		obj.add(() => counter++);
		obj.value = true;
		this.isTrue(flag);
		this.isTrue(obj.value);
		this.equals(counter, 0);
		obj.value = false;
		this.isFalse(flag);
		this.isFalse(obj.value);
		this.equals(counter, 1);
		obj.value = false;
		this.equals(counter, 1);
		obj.value = true;
		this.isTrue(flag);
		this.isTrue(obj.value);
		this.equals(counter, 2);
		obj.value = true;
		this.equals(counter, 2);
	}

}