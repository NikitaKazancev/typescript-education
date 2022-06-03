interface IPayment {
	id: number;
	sum: number;
}

interface IPaymentAPI {
	getPaymentData(id: number): IPayment | undefined;
}

class PaymentAPI implements IPaymentAPI {
	private db: IPayment[] = [{ id: 1, sum: 1000 }];

	getPaymentData(id: number): IPayment | undefined {
		return this.db.find(payment => payment.id == id);
	}
}

class PaymentAccessProxy implements IPaymentAPI {
	constructor(private api: IPaymentAPI) {}

	getPaymentData(id: number): IPayment | undefined {
		if (id == 1) return this.api.getPaymentData(id);

		console.log('Попытка получения данных платежа!!!');
		return undefined;
	}
}

const service = new PaymentAccessProxy(new PaymentAPI());
console.log(service.getPaymentData(1));
console.log(service.getPaymentData(2));
