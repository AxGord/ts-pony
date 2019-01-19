import Priority from '../../../src/ds/Priority';
import TestBase from '../../../src/testengine/TestBase';

export default class TestPriority extends TestBase {

	public priority: Priority<string> = new Priority();

	public before() {
		this.priority = new Priority();
		this.priority.add('a');
		this.priority.add('b');
		this.priority.add('a', 1);
		this.priority.add('c', -1);
		this.priority.add('d', -1);
	}

	public testAdd() {
		this.equals(this.priority.result, ['c', 'd', 'a', 'b']);
	}

	public testClear() {
		this.priority.clear();
		this.equals(this.priority.result, []);
	}

	public testDestroy() {
		this.priority.destroy();
		this.equals(this.priority.result, undefined);
	}

	public testRemove() {
		this.priority.remove('a');
		this.equals(this.priority.result, ['c', 'd', 'b']);
		this.priority.remove('d');
		this.equals(this.priority.result, ['c', 'b']);
		this.priority.remove('c');
		this.equals(this.priority.result, ['b']);
		this.priority.remove('b');
		this.equals(this.priority.result, []);
	}

	public testExists() {
		this.isTrue(this.priority.has('c'));
		this.isFalse(this.priority.has('e'));
	}

	public testTakeValues() {
		const p = new Priority<number>();
		p.add(7);
		p.add(5, -1);
		p.add(3);
		const a: number[][] = [];
		for (const e of p.priorities)
			a.push(p.values(e) as number[]);
		this.equals(a, [[5], [7, 3]]);

	}

}