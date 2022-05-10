interface IObject {
	id: number;
}
function sortData<T extends IObject>(data: T[]): T[] {
	return data.sort((a, b) => a.id - b.id);
}
const sorted = sortData([{ id: 2, name: 's' }, { id: 1 }]);
console.log(sorted);

function toString<T>(data: T): string {
	switch (typeof data) {
		case 'string':
			return data;

		case 'bigint':
		case 'number':
		case 'function':
		case 'symbol':
		case 'boolean':
			return data.toString();

		case 'object':
			return JSON.stringify(data);

		case 'undefined':
		default:
			return 'undefined';
	}
}

console.log(toString([1, 2, 3, { a: 1 }]));
