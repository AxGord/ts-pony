// tslint:disable: no-unused-expression
// tslint:disable: object-literal-sort-keys
import Init from '../../src/Init'; Init;
import TestConsole from '../../src/testengine/TestConsole';
import decor from '../shared/decor/DecorTests';
import ds from '../shared/ds/DSTests';
import events from '../shared/events/EventsTests';
import ModelTests from '../shared/model/ModelTests';
import utils from '../shared/utils/UtilsTests';
import DeltaTimeNode from './DeltaTimeNode';

DeltaTimeNode.start();

new TestConsole({
	utils,
	ds,
	events,
	decor,
	ModelTests,
}, DeltaTimeNode.stop);

// import DTimer from "../../src/time/DTimer";
// DTimer.repeat(1, (dt:number) => console.log('tick', dt));