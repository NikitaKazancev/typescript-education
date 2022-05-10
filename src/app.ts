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

const split1: <T>(arr: T[]) => T[] = getSplitedHalf;
const split2: <SOME>(arr: SOME[]) => SOME[] = getSplitedHalf;

interface ILogLine<T> {
	timestamp: Date;
	data: T;
}

type TLogline<T> = {
	timestamp: Date;
	data: T;
};

const logLine: ILogLine<{ a: number }> = {
	timestamp: new Date(),
	data: { a: 1 },
};
