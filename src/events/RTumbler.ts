import Signal0 from './Signal0';
import Signal1 from './Signal1';

/**
 * RTumbler
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: interface-name
export default interface RTumbler {

	readonly signalEnable: Signal0;
	readonly signalDisable: Signal0;
	readonly signalState: Signal1<boolean>;
	readonly enabled: boolean;

}