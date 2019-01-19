import ArrayUtils from '../utils/ArrayUtils';
import F from '../utils/F';
import PriorityIterator from './PriorityIterator';

/**
 * Priority object list
 * @author AxGord <axgord@gmail.com>
 */
export default class Priority<T> {

	private readonly data: T[] = [];
	private hash: Map<number, number> = new Map<number, number>();

	public constructor(findFn?: (a: T, b: T) => boolean) {
		if (findFn != null)	this.findIndexFn = findFn;
	}

	public [Symbol.iterator](): IterableIterator<T> {
		return new PriorityIterator(this.data);
	}

	public get length(): number {
		return this.data.length;
	}

	/**
	 * Get result array
	 */
	public get result(): ReadonlyArray<T> { return this.data; }

	/**
	 * Get priorities
	 */
	public get priorities(): number[] { return [...this.hash.keys()].sort(F.simpleSort); }

	public values(priority: number): T[]|null {
		let pos: number = 0;
		for (const key of this.priorities) {
			const c = this.hash.get(key) as number;
			if (priority === key) {
				return this.data.slice(pos, pos + c);
			}
			pos += c;
		}
		return null;
	}

	/**
	 * Clear priority list
	 */
	public clear(): void {
		this.data.length = 0; // = [];
		this.hash.clear();
	}

	/**
	 * Add item to priotity list
	 * @param value item for add
	 * @param priority priority for item
	 */
	public add(value: T, priority: number = 0): void {
		if (this.has(value)) return;
		let count: number = 0;
		let pos: number = 0;
		for (const key of this.hash.keys()) {
			if (key <= priority)
				pos += this.hash.get(key) as number;
			if (key == priority)
				count = this.hash.get(key) as number;
		}
		ArrayUtils.insert(this.data, pos, value);
		this.hash.set(priority, count + 1);
	}

	/**
	 * Remove item from priotity list
	 * @param value item for remove
	 */
	public remove(value: T): T|null {
		let index: number = this.indexOf(value);
		if (index == -1) return null;
		const deletedValue: T = this.data.splice(index, 1)[0];
		for (const key of this.priorities) {
			const priority = this.hash.get(key) as number;
			if (index > 0) {
				index -= priority;
			} else {
				if (priority > 1)
					this.hash.set(key, priority - 1);
				else
					this.hash.delete(key);
				break;
			}
		}
		return deletedValue;
	}

	/**
	 * Get priority
	 * @param value item for search
	 */
	public get(value: T): number|null {
		let i: number = 0;
		for (const key of this.priorities) {
			const priority = this.hash.get(key) as number;
			for (let n = i; n < i + priority; n++)
				if (this.findIndexFn(this.data[n], value))
					return key;
			i += priority;
		}
		return null;
	}

	/**
	 * Change item priority
	 * @param value item for change priority
	 * @param priority priority for item
	 */
	public change(value: T, priority: number = 0): void {
		const v: T|null = this.remove(value);
		if (v) this.add(v, priority);
	}

	/**
	 * Set zero or custom priority for all items
	 * @param priority priority for all items
	 */
	public normalize(priority: number = 0): void {
		this.hash.clear();
		this.hash.set(priority, this.data.length);
	}

	/**
	 * Check item exists
	 * @param value item for check
	 */
	public has(value: T): boolean {
		return this.indexOf(value) != -1;
	}

	/**
	 * Returns the index of the first occurrence of a value in an array.
	 * @param searchElement The value to locate in the array.
	 */
	public indexOf(searchElement: T): number {
		return this.data.findIndex(this.findIndexFn.bind(this, searchElement));
	}

	public get have(): boolean { return this.data.length > 0; }

	/**
	 * destroy
	 */
	public destroy(): void {
		// @ts-ignore
		delete this.data;
		delete this.hash;
	}

	private findIndexFn(a: T, b: T): boolean { return a === b; }

}