/**
 * Simple functions
 * @author AxGord <axgord@gmail.com>
 */
export default abstract class F {

	public static empty(): void {}

	public static y1(v: boolean): boolean {
		return v;
	}

	public static y2(a: boolean, b: boolean): boolean {
		return a && b;
	}

	public static y3(a: boolean, b: boolean, c: boolean): boolean {
		return a && b && c;
	}

	public static y4(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
		return a && b && c && d;
	}

	public static y5(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean): boolean {
		return a && b && c && d && e;
	}

	public static n1(v: boolean): boolean {
		return !v;
	}

	public static n2(a: boolean, b: boolean): boolean {
		return !a && !b;
	}

	public static n3(a: boolean, b: boolean, c: boolean): boolean {
		return !a && !b && !c;
	}

	public static n4(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
		return !a && !b && !c && !d;
	}

	public static n5(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean): boolean {
		return !a && !b && !c && !d && !e;
	}

	public static simpleSort(x: number, y: number): number {
		return x - y;
	}

}