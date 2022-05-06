function logId(id: number | string | { a: number } | [1, 2]) {
	if (typeof id === 'string') {
		console.log(id.includes('Hello'));
		return;
	}

	if (typeof id === 'number') {
		console.log(id.toFixed(2));
		return;
	}

	if (Array.isArray(id)) {
		console.log(id.length);
		return;
	}

	console.log(id.a);
}

logId(1);
logId('1');
logId({ a: 1 });
logId([1, 2]);
