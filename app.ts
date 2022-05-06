function generateError(message: string): never {
	// никогда ничего не вернётся
	throw new Error(message);
}

function dumpError(): never {
	while (true) {}
}

function rec(): never {
	return rec();
}

let a: never;
let b: void;
b = undefined;
// a = undefined; // error

type paymentAction = 'refund' | 'checkout'; // | 'reject'

function processAction(action: paymentAction) {
	switch (action) {
		case 'checkout':
			///
			break;
		case 'refund':
			///
			break;
		default: // если с 'reject', то ошибка
			const _: never = action;
			throw new Error('Нет такого action');
	}
}

function isString(a: string | number): boolean {
	if (typeof a === 'string') return true;
	else if (typeof a === 'number') return false;

	generateError('dasdas'); // нет ошибки, т.к. generateError возвращает never
}
