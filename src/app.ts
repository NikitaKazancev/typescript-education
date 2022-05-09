const arr: Array<number> = [1, 2, 3];

async function test() {
	const res = await new Promise<number>((resolve, reject) => {
		resolve(1);
	});
}

const check: Record<string | 1, boolean | number> = {
	one: true,
	two: 2,
	1: false,
};

// function logMiddleware(data: any): any {
// 	console.log(data);
// 	return data;
// }

// const res = logMiddleware(10) as number;

function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}

// const res = logMiddleware<string>(10);
const res = logMiddleware<number>(10);

function getSplitedHalf<T>(arr: T[]): T[] {
	const len = arr.length / 2;
	return arr.splice(0, len);
}

getSplitedHalf<number>([1, 2, 3]);
