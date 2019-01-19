/**
 * AbstractDecor
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class AbstractDecor {

	protected readonly target: object;
	protected readonly key: string;
	protected readonly _key: string;

	protected constructor(target: object, key: string) {
		this.target = target;
		this.key = key;
		this._key = '_' + key;
	}

	protected define(k: string): void {
		Object.defineProperty(this.target, k, {
			configurable: true,
			enumerable: true,
			writable: true,
		});
	}

	protected gsdefine<T>(k: string, getter: (th: any) => void, setter: (th: any, v: T) => void): void {
		Object.defineProperty(this.target, k, {
			configurable: true,
			enumerable: true,
			get: this.getGetter(getter),
			set: this.getSetter(setter),
		});
	}

	protected getGetter<T>(f: (th: any) => void): () => void {
		const self: object = this;
		return function(): T {
			// @ts-ignore
			return f.call(self, this);
		};
	}

	protected getSetter<T>(f: (th: any, v: T) => void): (v: T) => void {
		const self: object = this;
		return function(v: T): void {
			// @ts-ignore
			f.call(self, this, v);
		};
	}

}