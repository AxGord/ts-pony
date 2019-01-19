import TestBase from '../../../src/testengine/TestBase';
import F from '../../../src/utils/F';

export default class TestF extends TestBase {

	public testFy() {
		this.isTrue(F.y1(true));
		this.isTrue(F.y2(true, true));
		this.isTrue(F.y3(true, true, true));
		this.isTrue(F.y4(true, true, true, true));
		this.isTrue(F.y5(true, true, true, true, true));
		this.isFalse(F.y1(false));
		this.isFalse(F.y2(false, false));
		this.isFalse(F.y3(false, false, false));
		this.isFalse(F.y4(false, false, false, false));
		this.isFalse(F.y5(false, false, false, false, false));
	}

	public testFn() {
		this.isTrue(F.n1(false));
		this.isTrue(F.n2(false, false));
		this.isTrue(F.n3(false, false, false));
		this.isTrue(F.n4(false, false, false, false));
		this.isTrue(F.n5(false, false, false, false, false));
		this.isFalse(F.n1(true));
		this.isFalse(F.n2(true, true));
		this.isFalse(F.n3(true, true, true));
		this.isFalse(F.n4(true, true, true, true));
		this.isFalse(F.n5(true, true, true, true, true));
	}

}