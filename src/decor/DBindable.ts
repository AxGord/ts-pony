import BindableDecor from './BindableDecor';

/**
 * DBindable
 * @author AxGord <axgord@gmail.com>
 */
export default function DBindable(target: any, key: string): void {
	// tslint:disable-next-line: no-unused-expression
	new BindableDecor(target, key);
}