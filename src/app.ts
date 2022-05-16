const a: number = Math.random() > 0.5 ? 1 : 0;

interface IHTTPResponse<T extends 'success' | 'failed'> {
	code: number;
	data1: T extends 'success' ? string : Error;
	// data2: T extends 'success' ? number : string;
}

const obj: IHTTPResponse<'success'> = {
	code: 200,
	data1: 'my data',
};

const obj2: IHTTPResponse<'failed'> = {
	code: 404,
	data1: new Error('not found'),
};

class User {
	id: number;
	name: string;
}

class UserPersistent extends User {
	dbId: string;
}

function getUser(id: number): User;
function getUser(id: string): UserPersistent;
function getUser(id: number | string): User | UserPersistent {
	if (typeof id === 'number') return new User();
	return new UserPersistent();
}

// getUser()

type UserOrUserPersistentT<T extends number | string> = T extends number
	? User
	: UserPersistent;
function getUserConditional<T extends number | string>(
	id: T
): UserOrUserPersistentT<T> {
	if (typeof id === 'number') return new User() as UserOrUserPersistentT<T>;
	return new UserPersistent() as UserOrUserPersistentT<T>;
}

// getUserConditional()
