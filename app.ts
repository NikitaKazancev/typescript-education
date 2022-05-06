const getFullName = (user: { name: string; surname: string }): string => {
	return `${user.name} ${user.surname}`;
};

const user: {
	officeId: number;
	isOpened: boolean;
	contacts: {
		phone: string;
		email: string;
		address: {
			city: string;
		};
	};
} = {
	officeId: 45,
	isOpened: false,
	contacts: {
		phone: '+79100000000',
		email: 'my@email.ru',
		address: {
			city: 'Москва',
		},
	},
};

console.table(user);
