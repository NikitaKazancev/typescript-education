function logId(id: string | number) {
	console.log(id);
}

const a = logId(1); // void

function multiply(a: number, b?: number): number | void {
	if (b) return a * b;
}

type voidFunction = () => void;

const f1: voidFunction = () => {};
const f2: voidFunction = () => ({ a: 1 });

// ???
console.log(f2()); // { a: 1 }
const b = f2(); // void
console.log(b); // { a: 1 }

// Необходимость
const arr = [1, 2];

const obj: {
	arr: number[];
} = {
	arr: [],
};

arr.forEach(num => obj.arr.push(num)); // push возвращает number, поэтому callback возвращает void
