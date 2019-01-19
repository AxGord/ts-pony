import TestBase from '../../../src/testengine/TestBase';
import ArrayUtils from '../../../src/utils/ArrayUtils';

export default class TestArrayUtils extends TestBase {

	public testInsertInt() {
		const a = [1, 2, 3, 4];
		ArrayUtils.insert(a, 2, 5);
		this.equals(a, [1, 2, 5, 3, 4]);
	}

	public testInsertString() {
		const a = ['one', 'two', 'three', 'four'];
		ArrayUtils.insert(a, 2, 'five');
		this.equals(a, ['one', 'two', 'five', 'three', 'four']);
	}

	public testInsertBoolean() {
		const a = [true, false, true, false];
		ArrayUtils.insert(a, 3, true);
		this.equals(a, [true, false, true, true, false]);
	}

	public testInsertAny() {
		const a = [true, 1, 'text', false];
		ArrayUtils.insert(a, 3, 238);
		this.equals(a, [true, 1, 'text', 238, false]);
	}

	public testEqualsInt() {
		const a = [1, 2, 3];
		const b = [1, 2, 3];
		const c = [3, 2, 1];
		this.isTrue(ArrayUtils.equals(a, b));
		this.isFalse(ArrayUtils.equals(a, c));
	}

	public testEqualsString() {
		const a = ['one', 'two', 'three'];
		const b = ['one', 'two', 'three'];
		const c = ['three', 'two', 'one'];
		this.isTrue(ArrayUtils.equals(a, b));
		this.isFalse(ArrayUtils.equals(a, c));
	}

	public testEqualsBoolean() {
		const a = [true, false, true];
		const b = [true, false, true];
		const c = [true, true, false];
		this.isTrue(ArrayUtils.equals(a, b));
		this.isFalse(ArrayUtils.equals(a, c));
	}

	public testEqualsAny() {
		const a = [true, +Infinity, 'text'];
		const b = [true, +Infinity, 'text'];
		const c = [13123, false, 'text'];
		this.isTrue(ArrayUtils.equals(a, b));
		this.isFalse(ArrayUtils.equals(a, c));
	}

	// testIndex() {
	// 	let a = [1, 2, 3, 4, 5]
	// 	ArrayUtils.findIndex(a, (v) => v === 5);
	// 	this.equals(ArrayUtils.findIndex(a, (v) => v === 5), 4);
	// 	this.equals(ArrayUtils.findIndex(a, (v) => v === 1), 0);
	// 	this.equals(ArrayUtils.findIndex(a, (v) => v === 2), 1);
	// }
}