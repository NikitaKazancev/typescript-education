interface IRole {
	name: string;
}

interface IPermission {
	endDate: Date;
}

interface IUser {
	name: string;
	roles: IRole[];
	permission: IPermission;
}

const user: IUser = {
	name: 'Nike',
	roles: [],
	permission: {
		endDate: new Date(),
	},
};

if (typeof user == 'bigint') {
}

const userName = user['name'];
const roleNames = 'roles';

type rolesTypes = IUser['roles'];
type rolesTypes2 = IUser[typeof roleNames];

type roleType = IUser['roles'][number]; // IRole
type dateType = IUser['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = typeof roles[number]; // only with 'as const'
