function Unic(message: string): any {
	console.log(`Инициализация ${message}`);
	return () => {
		console.log(`Вызов ${message}`);
	};
}

@Unic('Класс 1')
@Unic('Класс 2')
class Test {
	@Unic('prop')
	prop1: any;

	@Unic('static prop')
	static prop2: any;

	constructor(@Unic('constructor param') param: any) {}

	@Unic('method')
	method1(@Unic('method param') param: any) {}

	@Unic('static method')
	static method2(@Unic('static method param') param: any) {}
}
