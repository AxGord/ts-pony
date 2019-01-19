import Event2 from '../events/Event2';
import GetSetDecor from './GetSetDecor';

/**
 * BindableDecor
 * @author AxGord <axgord@gmail.com>
 */
export default class BindableDecor<T> extends GetSetDecor<T> {

	private skey: string;

	public constructor(target: object, key: string) {
		super(target, key);
		this.skey = 'change' + key[0].toUpperCase() + key.substr(1);
	}

	protected setter(th: any, v: T): void {
		const pre: T = th[this._key];
		super.setter(th, v);
		const event: Event2<T, T> = th[this.skey];
		event.dispatch(v, pre);
	}

}