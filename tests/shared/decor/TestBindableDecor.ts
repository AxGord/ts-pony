import DBindable from '../../../src/decor/DBindable';
import Event2 from '../../../src/events/Event2';
import Signal2 from '../../../src/events/Signal2';
import TestBase from '../../../src/testengine/TestBase';

export default class TestBindableDecor extends TestBase {

	public changeNum: Signal2<number, number> = new Event2<number, number>().signal;

	@DBindable
	public num: number = 5;

	public testNum() {
		let r: number = -1;
		this.changeNum.add((v) => r = v);
		this.equals(this.num, 5);
		this.num = 3;
		this.equals(this.num, 3);
		this.equals(r, 3);
	}

}