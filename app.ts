let input: unknown;

input = 3;
input = ['dwa', 'fwa'];

// const str: string = input; // error

function run(input: unknown) {
	if (typeof input === 'number') {
		input++;
	} else if (typeof input === 'number') {
		// unknown не исключает типы
		input++;
	}
}

async function getData(url: string) {
	try {
		await fetch(url);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function getDataForce(url: string) {
	try {
		await fetch(url);
	} catch (error) {
		const e = error as Error; // если 100 % уверены, что error - объект ошибки
		console.log(e.message);
	}
}

getData('url');

type U1 = unknown | null | string | number; // unknown
type U2 = U1 | any; // any
type U3 = U1 & string; // string
type U4 = U1 & any; // any (не unknown)
