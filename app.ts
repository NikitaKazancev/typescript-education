let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'dwad';
let d: number = parseFloat(c);

interface IUser {
	name: string;
	email: string;
	login: string;
}

const user: IUser = {
	name: 'Nike',
	email: 'N140...',
	login: 'Nike',
};

interface IAdmin {
	name: string;
	role: number;
}

// const admin: IAdmin = {
// 	...user,
// 	role: 1,
// };
// email и login будут в admin

function userToAdmin({ name }: IUser): IAdmin {
	return {
		name,
		role: 1,
	};
}

// type guards

function isString(x: string | number): x is string {
	return typeof x === 'string';
}

function logId(id: string | number) {
	if (isString(id)) console.log(id);
	else if (isString(id)) console.log(id);
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
	return 'role' in user;
}

function isAdminAlternative(user: IUser | IAdmin): user is IAdmin {
	return (user as IAdmin).role !== undefined;
}

function setRoleZero(user: IUser | IAdmin) {
	if (isAdmin(user)) {
		user.role = 0;
	} else {
		throw new Error('Пользователь не админ');
	}
}
