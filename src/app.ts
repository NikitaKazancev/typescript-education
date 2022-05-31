class MyMap {
	private static instance: MyMap;
	private constructor() {}

	map: Map<number, string> = new Map();

	clean() {
		this.map = new Map();
	}

	static get(): MyMap {
		if (!this.instance) {
			this.instance = new MyMap();
		}

		return this.instance;
	}
}

class Service1 {
	static addMap(key: number, value: string) {
		MyMap.get().map.set(key, value);
	}
}

class Service2 {
	static getMap(key: number) {
		console.log(MyMap.get().map.get(key));
		MyMap.get().clean();
	}
}

Service1.addMap(12, 'ggg');
Service1.addMap(35, 'jyy');
Service1.addMap(10, 'hi');
Service2.getMap(12);
Service2.getMap(35);
Service2.getMap(10);
