type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
	name: string;
	url: string;
}

async function getMenu(): Promise<IMenu[]> {
	return [{ name: 'Analytics', url: 'analytics' }];
}

type R = Awaited<ReturnType<typeof getMenu>>;

// more correct
async function getArray<T>(x: T): Promise<Awaited<T>[]> {
	return [await x];
}

// less correct
async function getArray2<T>(x: T): Promise<T[]> {
	return [await x];
}
