interface User {
	name: string;
	age: number;
	skills: string[];

	log: (id: number) => string;
}

interface Role {
	role: string;
}

interface UserWithRole extends User, Role {
	roleId: number;
}

let user: UserWithRole = {
	name: 'Nike',
	age: 18,
	skills: ['1', '2'],
	roleId: 1,
	role: 'smth',

	log(id) {
		return '';
	},
};

interface UserDict {
	[key: number]: User; // сколько угодно свойств типа (key: number; value: User)
}

type ud = Record<number, User>; // то же самое
