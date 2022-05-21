interface IUserService {
	users: number;
	getUsersInDB(): number;
}

@threeUsersAdvanced
@nullUsers
class UserService implements IUserService {
	users: number = 1000;
	getUsersInDB(): number {
		return this.users;
	}
}

// Происходит перед созданием класса
function nullUsers(target: Function) {
	target.prototype.users = 0;
}

// Происходит после создания класса
function threeUsersAdvanced<T extends new (...args: any[]) => {}>(
	constructor: T
) {
	return class extends constructor {
		users: number = 3;
	};
}

console.log(new UserService().getUsersInDB());
