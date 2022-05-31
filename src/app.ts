interface IPrototype<T> {
	clone(): T;
}

class UserHistory implements IPrototype<UserHistory> {
	createdAt: Date;

	constructor(public email: string, public name: string) {
		this.createdAt = new Date();
	}

	clone(): UserHistory {
		const target = new UserHistory(this.email, this.name);
		target.createdAt = this.createdAt;
		return target;
	}
}

const user = new UserHistory('mail', 'Nike');
console.log(user);
const user2 = user.clone();
user2.email = 'new mail';
console.log(user2);
