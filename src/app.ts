interface IUserService {
	users: number;
	getUsersInDB(): number;
}

@setUsers(2)
class UserService implements IUserService {
	users: number = 1000;
	getUsersInDB(): number {
		return this.users;
	}
}

function setUsers(users: number) {
	return <T extends new (...args: any[]) => {}>(constructor: T) => {
		return class extends constructor {
			users: number = users;
		};
	};
}

console.log(new UserService().getUsersInDB());
