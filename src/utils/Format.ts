/**
 * Convert values for string representation
 * @author AxGord <axgord@gmail.com>
 */
export default class Format {

	/**
	 * Convert money from integer format to string
	 * @param value integer for convertation
	 */
	public static fromInt(value: number): string {
		return (value / 100).toFixed(2);
	}

}