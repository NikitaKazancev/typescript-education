interface IUserService {
	users: number;
	getUsersInDB(): number;
}

class UserService implements IUserService {
	users: number = 1000;

	@Log()
	getUsersInDB(): number {
		throw new Error('Error :(');
		// return 1;
	}
}

function Log() {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<() => number>
	): TypedPropertyDescriptor<() => number> | void => {
		console.log(target);
		console.log(propertyKey);
		console.log(descriptor);
		const oldValue = descriptor.value;
		descriptor.value = () => {
			console.log('no error');
			if (oldValue) oldValue();
			return 1;
		};
		// return {
		// 	enumerable: true,
		// };
	};
}

console.log(new UserService().getUsersInDB());
