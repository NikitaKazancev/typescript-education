interface IUserService {
	users: number;
	getUsersInDB(): number;
}

class UserService implements IUserService {
	users: number = 1000;

	@Catch({ rethrow: true })
	getUsersInDB(): number {
		throw new Error('Error :(');
	}
}

interface ICatch {
	rethrow: boolean;
}
function Catch({ rethrow }: ICatch = { rethrow: false }) {
	return (
		target: Object,
		_: string,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
		const method = descriptor.value;
		descriptor.value = (...args: any[]) => {
			try {
				return method?.apply(target, args);
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message);

					if (rethrow) throw error;
				}
			}
		};
	};
}

console.log(new UserService().getUsersInDB());
