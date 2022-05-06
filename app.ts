interface User {
	login: string;
	password?: string;
}

const user: User = {
	login: 'my_login',
};

function multiply(a: number, b?: number): number {
	if (b) return a * b;
	else return a * a;
}

interface UserPro {
	login: string;
	password?: {
		type: 'primary' | 'secondary';
	};
}

function testPass(user: UserPro) {
	const type = user.password?.type;
	// const type = user.password!.type; // если мы точно уверены, что password точно есть
	console.log(type);
}

testPass({ login: 'my_login', password: { type: 'primary' } });

function test(param?: string): string | number {
	return param ?? multiply(5);
}

// Упражнение

// Запрос
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }

// Возможные ответы
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// }
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

interface IPaymentRequest extends IPayment {}

interface IErrorData {
	errorMessage: string;
	errorCode: number;
}

interface ISuccessData extends IPayment {
	databaseId: number;
}

interface IResponseSuccess {
	status: 'success';
	data: ISuccessData;
}

interface IResponseError {
	status: 'failed';
	data: IErrorData;
}

function request(req: IPaymentRequest): IResponseSuccess | IResponseError {
	if (req.sum >= 5000)
		return {
			status: 'success',
			data: {
				databaseId: 567,
				...req,
			},
		};

	return {
		status: 'failed',
		data: {
			errorMessage: 'Недостаточно средств',
			errorCode: 4,
		},
	};
}

const data: IPaymentRequest = {
	sum: 5000,
	from: 1,
	to: 2,
};

console.log(request(data));
