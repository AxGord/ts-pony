import Logable from '../events/Logable';

/**
 * TestCounter
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class TestCounter extends Logable {

	protected _okCount: number = 0;
	protected _errorCount: number = 0;
	protected _count: number = 0;

	public get okCount(): number { return this._okCount; }
	public get errorCount(): number { return this._errorCount; }
	public get count(): number { return this._count; }

	protected addTestCounter(t: TestCounter): void {
		this._okCount += t._okCount;
		this._errorCount += t._errorCount;
		this._count += t._count;
	}

	public logCounts(): void {
		this.log('Completed tests: ' + this.okCount);
		if (this.errorCount > 0)
			this.log('Failed tests: ' + this.errorCount + ' of ' + this.count);
	}

}