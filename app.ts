interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum EPaymentStatus {
	success = 'success',
	failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: EPaymentStatus.success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: EPaymentStatus.failed;
	data: IDataFailed;
}

type TRes = IResponseSuccess | IResponseFailed;

function isSuccessRes(res: TRes): res is IResponseSuccess {
	return res.status === EPaymentStatus.success;
}

function getIdFromData(res: TRes): number | never {
	if (isSuccessRes(res)) return res.data.databaseId;
	throw new Error(res.data.errorMessage);
}

console.log(
	getIdFromData({
		status: EPaymentStatus.success,
		data: {
			databaseId: 10,
			from: 1,
			sum: 2,
			to: 3,
		},
	})
);

console.log(
	getIdFromData({
		status: EPaymentStatus.failed,
		data: {
			errorCode: 404,
			errorMessage: 'Not found',
		},
	})
);
