interface IUserService {
	users: number;
	getUsersInDB(): number;
}

class UserService implements IUserService {
	users: number = 1000;
	getUsersInDB(): number {
		return this.users;
	}
}

function nullUsers(obj: IUserService) {
	obj.users = 0;
	return obj;
}

function logUsers(obj: IUserService) {
	console.log(`Users: ${obj.users}`);
	return obj;
}

logUsers(nullUsers(logUsers(new UserService())));
console.log(new UserService().getUsersInDB());
