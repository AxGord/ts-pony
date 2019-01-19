/**
 * Utils for work with array
 * @author AxGord <axgord@gmail.com>
 */
export default class ArrayUtils {

	/**
	 * Insert element to array
	 * @param a source array for modify
	 * @param index position for insert
	 * @param item item for insert
	 */
	public static insert<T>(a: T[], index: number, item: T): void {
		a.splice(index, 0, item);
	}

	/**
	 * Check 2 array for equals
	 * @param a first array
	 * @param b second array
	 */
	public static equals<T>(a: T[], b: T[]): boolean {
		if (a == b) return true;
		// if the other array is a falsy value, return
		if (!a || !b) return false;
		// compare lengths - can save a lot of time
		if (a.length != b.length) return false;
		for (let i = 0, l = a.length; i < l; i++) {
			// Check if we have nested arrays
			if (a[i] instanceof Array && b[i] instanceof Array) {
				// recurse into the nested arrays
				if (!ArrayUtils.equals(a[i] as any, a[i] as any))
					return false;
			} else if (a[i] != b[i]) {
				// Warning - two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}
		return true;
	}

}