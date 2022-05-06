interface User {
	name: string;
}

// дополнение
interface User {
	age: number;
}

const user: User = {
	name: 'Nike',
	age: 18,
};

/////////////////

type ID = string | number;
