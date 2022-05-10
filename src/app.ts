interface IUser {
	name: string;
	age: number;
}

// type KeysOfUser = keyof IUser;

// const key: KeysOfUser = 'age';

function getValue<T extends IUser, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

const user: IUser = {
	name: 'Nike',
	age: 18,
};

const userName = getValue(user, 'name');

//////////////

function toString(data: unknown): string {
	switch (typeof data) {
		case 'string':
			return data;

		case 'bigint':
		case 'number':
		case 'boolean':
		case 'symbol':
		case 'function':
			return data.toString();

		case 'object':
			return JSON.stringify(data);

		case 'undefined':
			return 'undefined';
	}
}

const fromEntries = <T>(entries: Array<[unknown, T]>): { [key: string]: T } => {
	const res: { [key: string]: T } = {};

	entries.forEach(elem => (res[toString(elem[0])] = elem[1]));

	return res;
};

interface IGroupByKey<ObjT> extends Record<string, ObjT[]> {}

type key = string | number | symbol;

function groupByKey<T extends Record<key, any>>(
	data: T[],
	key: keyof T
): IGroupByKey<T> {
	const res: IGroupByKey<T> = {};

	let added = false;
	for (const obj of data) {
		for (const resKey in res) {
			if (resKey === toString(obj[key])) {
				res[resKey]?.push(obj);
				added = true;
				break;
			}
		}

		if (!added) res[toString(obj[key])] = [obj];
		else added = false;
	}

	return res;
}

interface IUser2 extends IUser {
	group: number;
}

const data: IUser2[] = [
	{
		group: 2,
		name: 'Nike',
		age: 18,
	},
	{
		group: 2,
		name: 'Olga',
		age: 23,
	},
	{
		group: 1,
		name: 'Sergey',
		age: 32,
	},
];

console.log(groupByKey(data, 'group'));
