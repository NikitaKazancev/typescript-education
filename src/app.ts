interface IUserService {
	getUsersInDB(): number;
}

class UserService implements IUserService {
	private _users: number;

	@Log()
	set users(value: number) {
		this._users = value;
	}

	get users() {
		return this._users;
	}

	getUsersInDB(): number {
		throw new Error('Error :(');
	}
}

function Log() {
	return (
		target: Object,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const set = descriptor.set;
		descriptor.set = (...args: any) => {
			console.log(args);
			set?.apply(target, args);
		};
	};
}

const userService = new UserService();
userService.users = 1;
console.log(userService);
