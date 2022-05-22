interface IUserService {
	users: number;
	getUsersInDB(): number;
}

class UserService implements IUserService {
	@Max(100)
	users: number = 1000;

	getUsersInDB(): number {
		throw new Error('Error :(');
	}
}

function Max(max: number) {
	return (target: Object, propertyKey: string) => {
		let value: number;

		Object.defineProperty(target, propertyKey, {
			set: (newValue: number) => {
				if (newValue > max) {
					console.info(
						`## В ${propertyKey} было записано максимальное значение ${max} вместо ${newValue}`
					);
					value = max;
				} else value = newValue;
			},
			get: () => value,
		});
	};
}

const userService = new UserService();
userService.users = 1;
console.log(userService.users);
