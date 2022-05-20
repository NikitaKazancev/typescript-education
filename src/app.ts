interface IUser {
	name: string;
	age?: number;
	email: string;
}

// Partial
type partial = Partial<IUser>;

type Partial2<T> = {
	[key in keyof T]?: T[key];
};
type partial2 = Partial2<IUser>;

const p: partial = {};

// Required
type required = Required<IUser>;

type Required2<T> = {
	[key in keyof T]-?: T[key];
};
type required2 = Required2<IUser>;

const r: required = {
	age: 1,
	email: 'email',
	name: 'Nike',
};

// Readonly
const readOnly: Readonly<IUser> = {
	email: 'email',
	name: 'Nike',
};

////////////////////

interface IPaymentPersistent {
	id: number;
	sum: number;
	from: string;
	to: string;
}

// Omit, Pick
type Payment = Omit<IPaymentPersistent, 'id'>;
type PaymentRequisites = Pick<IPaymentPersistent, 'from' | 'to'>;

// Extract, Exclude
type ExtractEx = Extract<'from' | 'to' | Payment, string>; // takes right types from union type
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>; // does not take right types from union type

//////////////

class User {
	constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
	return new User(id, 'Nike');
}

// Return/Parameter Type
type RT = ReturnType<typeof getData>;
type RT1 = ReturnType<() => void>;
type RT2 = ReturnType<<T>() => T>; // unknown
type RT3 = ReturnType<<T extends number>() => T>;

type PTArray = Parameters<typeof getData>;
type PT0 = Parameters<typeof getData>[0];

type CP = ConstructorParameters<typeof User>;
