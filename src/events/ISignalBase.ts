import Event0 from './Event0';
import ListenerBase from './ListenerBase';

/**
 * ISignalBase
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: ban-types
export default interface ISignalBase<T extends Function, L extends ListenerBase<T>> {

	/**
	 * Add signal listener
	 */
	add(fn: T, context?: object, priority?: number): void;

	/**
	 * Add signal listener for once call
	 */
	once(fn: T, context?: object, priority?: number): void;

	/**
	 * Remove signal listener
	 */
	remove(fn: T, context?: object): void;

	addEvent0(event: Event0, priority?: number): void;

	onceEvent0(event: Event0, priority?: number): void;

	removeEvent0(event: Event0): void;

	addListener(listener: L, priority?: number): void;

	removeListener(listener: L): void;

}