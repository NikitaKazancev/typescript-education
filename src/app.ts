interface IForm {
	name: string;
	password: string;
}

const form: IForm = {
	name: 'Nike',
	password: '123',
};

interface ISuccessValidation {
	isValid: true;
}

interface IFailedValidation {
	isValid: false;
	errorMessage: string;
}

type Validation<T> = {
	[key in keyof T]: ISuccessValidation | IFailedValidation;
};

const resp: Validation<IForm> = {
	name: { isValid: true },
	password: { isValid: false, errorMessage: 'error' },
};
