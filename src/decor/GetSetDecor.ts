import AbstractDecor from './AbstractDecor';

/**
 * GetSetDecor
 * @author AxGord <axgord@gmail.com>
 */
export default class GetSetDecor<T> extends AbstractDecor {

	public constructor(target: object, key: string) {
		super(target, key);
		this.define(this._key);
		this.gsdefine(key, this.getter, this.setter);
	}

	protected getter(th: any): T { return th[this._key]; }

  	protected setter(th: any, v: T): void { th[this._key] = v; }

}