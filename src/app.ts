import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserService {
	getUsersInDB(): number;
	setUsersInDB(users: number, users2: number): void;
}

class UserService implements IUserService {
	private _users: number;

	@Validate()
	setUsersInDB(@Positive() users: number, @Positive() users2: number): void {
		this._users = users;
	}

	getUsersInDB(): number {
		return this._users;
	}
}

function Positive() {
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	) => {
		const existParams: number[] =
			Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ||
			[];
		existParams.push(parameterIndex);
		Reflect.defineMetadata(
			POSITIVE_METADATA_KEY,
			existParams,
			target,
			propertyKey
		);
	};
}

function Validate() {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	) => {
		const method = descriptor.value;
		descriptor.value = (...args: any[]) => {
			const positiveParams: number[] = Reflect.getOwnMetadata(
				POSITIVE_METADATA_KEY,
				target,
				propertyKey
			);

			if (positiveParams) {
				positiveParams.forEach(paramIndex => {
					if (args[paramIndex] <= 0)
						throw new Error(
							`Parameters in method ${String(
								propertyKey
							)} must be positive`
						);
				});
			}

			return method?.apply(target, args);
		};
	};
}

const userService = new UserService();

try {
	userService.setUsersInDB(10, -200);
} catch (error) {
	if (error instanceof Error) console.log(error.message);
}

userService.setUsersInDB(10, 200);
console.log(userService.getUsersInDB());
