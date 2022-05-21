interface IUserService {
	users: number;
	getUsersInDB(): number;
}

// type CreatedAtD = {
// 	createdAt: Date
// }

// type IUserServiceT = IUserService & CreatedAtD;
@CreatedAt
class UserService implements IUserService {
	users: number = 1000;
	// createdAt: Date;

	getUsersInDB(): number {
		return this.users;
	}
}

function CreatedAt<T extends new (...args: any[]) => {}>(Class: T) {
	return class extends Class {
		createdAt: string = new Date().toLocaleString();
	};
}

type CreatedAt = {
	createdAt: string;
};

type CreatedAtD = IUserService & CreatedAt;

console.log((new UserService() as CreatedAtD).createdAt);
