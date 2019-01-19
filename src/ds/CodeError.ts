/**
 * CodeError
 * @author AxGord <axgord@gmail.com>
 */
export default class CodeError extends Error {

	public readonly code: number;

	/**
	 * constructor
	 */
	public constructor(code: number, message: string, data: string | null = null) {
		if (data)
			super(message + ': ' + data + ' (' + code + ')');
		else
			super(message + ' (' + code + ')');
		this.code = code;
	}

}