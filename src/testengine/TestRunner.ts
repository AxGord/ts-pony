import DeltaTime from '../time/DeltaTime';
import TestBase from './TestBase';
import TestCounter from './TestCounter';

/**
 * TestRunner
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class TestRunner extends TestCounter {

	private list: object = {};
	private packs: string[] = [];
	private units: TestBase[] = [];

	// tslint:disable-next-line: no-unnecessary-initializer
	public constructor(finish: (() => void)|undefined = undefined) {
		super();
		if (finish)
			this.finish = finish;
	}

	public run(list: object): void {
		this.startTime();

		this.list = list;
		this.packs = Object.getOwnPropertyNames(list);
		this.runNextPack();
		// Object.getOwnPropertyNames(list).forEach(name => {
		// 	this.log(name);
		// 	// @ts-ignore
		// 	list[name].forEach(this.unit, this);
		// });

	}

	private finish(): void {}

	protected abstract checkErrors(): void;

	private runNextPack(): void {
		if (this.packs.length == 0) {
			this.logCounts();
			this.endTime('Tests duration');
			this.checkErrors();
			this.finish();
		} else {
			const name: string = this.packs.shift() as string;
			this.log(name);
			// @ts-ignore
			this.units = this.list[name];
			this.runNextUnit();
		}
	}

	private runNextUnit(): void {
		if (this.units.length == 0) {
			this.runNextPack();
		} else {
			this.unit(this.units.shift(), this.unitCompleteHandler.bind(this));
		}
	}

	private unitCompleteHandler(): void {
		this.once1(DeltaTime.signalFixedUpdate, this.runNextUnit);
	}

	public unit(unit: any, cb: () => void): void {
		if (Object.getPrototypeOf(unit) != TestBase && Object.getPrototypeOf(Object.getPrototypeOf(unit)) != TestBase)
			throw new Error('Unit ' + unit.name + ' not test!');
		const instance: TestBase = new unit();
		instance.signalLog.add((v) => this.log('\t' + v));
		instance.signalError.addEvent1(this.eventError);
		instance.run(() => {
			this.addTestCounter(instance);
			cb();
		});
	}

}