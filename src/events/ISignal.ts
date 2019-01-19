import ISignalBase from './ISignalBase';
import ListenerBase from './ListenerBase';

/**
 * ISignal
 * @author AxGord <axgord@gmail.com>
 */
// tslint:disable-next-line: ban-types
export default interface ISignal extends ISignalBase<Function, ListenerBase<Function>> {}