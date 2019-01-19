import TestBase from '../../../src/testengine/TestBase';
import Format from '../../../src/utils/Format';

export default class TestFormat extends TestBase {

	public testFromInt() {
		this.equals(Format.fromInt(100), '1.00');
		this.equals(Format.fromInt(999), '9.99');
	}

}