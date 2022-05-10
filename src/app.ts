class Resp<D, E> {
	constructor(public data?: D, public error?: E) {}
}

const res = new Resp('data');
res.error;

class HTTPResp<F> extends Resp<string, number> {
	private _code: F;

	set code(code: F) {
		this._code = code;
	}

	get code(): F {
		return this._code;
	}
}

const resp2 = new HTTPResp();
resp2.code;
