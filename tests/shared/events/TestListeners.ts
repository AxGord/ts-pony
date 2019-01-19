import Listener0 from '../../../src/events/Listener0';
import Listener1 from '../../../src/events/Listener1';
import Listener2 from '../../../src/events/Listener2';
import Listener3 from '../../../src/events/Listener3';
import TestBase from '../../../src/testengine/TestBase';

export default class TestListeners extends TestBase {

	public num: number = 0;
	public str: string = '';
	public bool: boolean = false;
	public any: any = '';
	public sum1: number = 0;
	public sum2: number = 0;
	public sum3: number = 0;
	public sumstr1: string = '';
	public sumstr2: string = '';
	public sumstr3: string = '';
	public sumbool1: boolean = true;
	public sumbool2: boolean = true;
	public sumbool3: boolean = true;
	public sumany1: any = '';
	public sumany2: any = '';
	public sumany3: any = '';

	public before() {
		this.num = 5;
		this.str = 'test';
		this.bool = true;
		this.any = 'something';
		this.sum1 = 0;
		this.sum2 = 0;
		this.sum3 = 0;
		this.sumstr1 = '';
		this.sumstr2 = '';
		this.sumstr3 = '';
		this.sumbool1 = true;
		this.sumbool2 = true;
		this.sumbool3 = true;
		this.sumany1 = '';
		this.sumany2 = '';
		this.sumany3 = '';
	}

	public testListener0() {
		let ok = false;
		new Listener0(() => ok = true, this, false).call();
		this.isTrue(ok);
	}

	public testListener1() {
		let ok = false;
		const l = new Listener1<number>((v) => ok = v == 5, this);
		l.call(3);
		this.isFalse(ok);
		l.call(5);
		this.isTrue(ok);
	}

	public testListener1ContextNum() {
		const l = new Listener1<number>(this.calc1, this);
		l.call(3);
		this.equals(this.sum1, 3 + this.num);
		l.call(12);
		this.equals(this.sum1, 12 + this.num);
	}

	public testListener1ContextStr() {
		const l = new Listener1<string>(this.calcstr1, this);
		l.call('Listener1 ');
		this.equals(this.sumstr1, 'Listener1 ' + this.str);
		l.call('Cat ');
		this.equals(this.sumstr1, 'Cat ' + this.str);
	}

	public testListener1ContextBool() {
		const l = new Listener1<boolean>(this.calcbool1, this);
		l.call(true);
		this.equals(this.sumbool1, true);
		l.call(false);
		this.equals(this.sumbool1, false);
	}

	public testListener1ContextAny() {
		const l = new Listener1<any>(this.calcany1, this);
		l.call(3464);
		this.equals(this.sumany1, 3464 + this.any);
		l.call(true);
		this.equals(this.sumany1, true + this.any);
	}

	public testListener2() {
		let sum2: number = 0;
		const l = new Listener2<number, number>((a, b) => sum2 = a + b + this.num, this);
		l.call(3, 5);
		this.equals(sum2, 8 + this.num);
		l.call(6, 12);
		this.equals(sum2, 18 + this.num);
	}

	public testListener2ContextNum() {
		const l = new Listener2<number, number>(this.calc2, this);
		l.call(3, 5);
		this.equals(this.sum2, 8 + this.num);
		l.call(6, 12);
		this.equals(this.sum2, 18 + this.num);
	}

	public testListener2ContextStr() {
		const l = new Listener2<string, string>(this.calcstr2, this);
		l.call('Listener2 ', 'Bug ');
		this.equals(this.sumstr2, 'Listener2 Bug ' + this.str);
		l.call('Cat ', 'Frog ');
		this.equals(this.sumstr2, 'Cat Frog ' + this.str);
	}

	public testListener2ContextBool() {
		const l = new Listener2<boolean, boolean>(this.calcbool2, this);
		l.call(true, true);
		this.equals(this.sumbool2, true);
		l.call(true, false);
		this.equals(this.sumbool2, false);
		l.call(false, false);
		this.equals(this.sumbool2, false);
	}

	public testListener2ContextAny() {
		const l = new Listener2<any, any>(this.calcany2, this);
		l.call(3464, NaN);
		this.equals(this.sumany2, 3464 + NaN + this.any);
		l.call(true, 'Bull');
		this.equals(this.sumany2, true + 'Bull' + this.any);
	}

	public testListener3() {
		let sum3: number = 0;
		const l = new Listener3<number, number, number>((a, b, c) => sum3 = a + b + c + this.num, this);
		l.call(3, 5, 100);
		this.equals(sum3, 108 + this.num);
		l.call(6, 12, 100);
		this.equals(sum3, 118 + this.num);
	}

	public testListener3ContextNum() {
		const l = new Listener3<number, number, number>(this.calc3, this);
		l.call(3, 5, 100);
		this.equals(this.sum3, 108 + this.num);
		l.call(6, 12, 100);
		this.equals(this.sum3, 118 + this.num);
	}

	public testListener3ContextStr() {
		const l = new Listener3<string, string, string>(this.calcstr3, this);
		l.call('Listener3 ', 'Big ', 'Mouse ');
		this.equals(this.sumstr3, 'Listener3 Big Mouse ' + this.str);
		l.call('Cat ', 'Frog ', 'Bat ');
		this.equals(this.sumstr3, 'Cat Frog Bat ' + this.str);
	}

	public testListener3ContextBool() {
		const l = new Listener3<boolean, boolean, boolean>(this.calcbool3, this);
		l.call(true, true, false);
		this.equals(this.sumbool3, true);
		l.call(true, false, false);
		this.equals(this.sumbool3, false);
		l.call(true, true, true);
		this.equals(this.sumbool3, false);
	}

	public testListener3ContextAny() {
		const l = new Listener3<any, any, any>(this.calcany3, this);
		l.call(3464, NaN, 'Worm ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
		l.call(true, 'Bull ', 'Bunny ');
		this.equals(this.sumany3, true + 'Bull ' + 'Bunny ' + this.any);
	}

	public testEnabled() {
		const l = new Listener3<any, any, any>(this.calcany3, this);
		l.call(3464, NaN, 'Worm ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
		l.disable();
		l.call(true, 'Bull ', 'Bunny ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
		l.enable();
		l.call(true, 'Bull ', 'Bunny ');
		this.equals(this.sumany3, true + 'Bull ' + 'Bunny ' + this.any);
		l.disable();
		l.call(3464, NaN, 'Worm ');
		this.equals(this.sumany3, true + 'Bull ' + 'Bunny ' + this.any);
		l.enable();
		l.call(3464, NaN, 'Worm ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
	}

	public testDestroy() {
		const l = new Listener3<any, any, any>(this.calcany3, this);
		l.call(3464, NaN, 'Worm ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
		l.destroy();
		l.call(true, 'Bull ', 'Bunny ');
		this.equals(this.sumany3, 3464 + NaN + 'Worm ' + this.any);
	}

	public calc1(a: number) {
		this.sum1 = a + this.num;
	}

	public calc2(a: number, b: number) {
		this.sum2 = a + b + this.num;
	}

	public calc3(a: number, b: number, c: number) {
		this.sum3 = a + b + c + this.num;
	}

	public calcstr1(a: string) {
		this.sumstr1 = a + this.str;
	}

	public calcstr2(a: string, b: string) {
		this.sumstr2 = a + b + this.str;
	}

	public calcstr3(a: string, b: string, c: string) {
		this.sumstr3 = a + b + c + this.str;
	}

	public calcbool1(a: boolean) {
		this.sumbool1 = a && this.bool;
	}

	public calcbool2(a: boolean, b: boolean) {
		this.sumbool2 = a && b && this.bool;
	}

	public calcbool3(a: boolean, b: boolean, c: boolean) {
		this.sumbool3 = a && b && !c && this.bool;
	}

	public calcany1(a: any) {
		this.sumany1 = a + this.any;
	}

	public calcany2(a: any, b: any) {
		this.sumany2 = a + b + this.any;
	}

	public calcany3(a: any, b: any, c: any) {
		this.sumany3 = a + b + c + this.any;
	}

}