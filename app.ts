class User {
	name: string;
	age: number;

	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(ageOrName?: string | number) {
		if (typeof ageOrName === 'string') this.name = ageOrName;
		else if (typeof ageOrName === 'number') this.age = ageOrName;
	}
}

const user = new User('Nike');
const user2 = new User();
const user3 = new User(10);
