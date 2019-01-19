/**
 * PriorityIterator
 * @author AxGord <axgord@gmail.com>
 */
export default class PriorityIterator<T> implements IterableIterator<T> {

	private pointer: number = 0;
	private readonly data: T[];

	/**
	 * constructor
	 */
	public constructor(data: T[]) { this.data = data; }

	public [Symbol.iterator](): IterableIterator<T> { return this; }

	public next(): IteratorResult<T> {
		if (this.pointer < this.data.length) {
			return {
				done: false,
				value: this.data[this.pointer++],
			};
		} else {
			return {
				done: true,
				value: null as any,
			};
		}
	  }

}