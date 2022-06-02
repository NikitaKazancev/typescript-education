class KVDatabase {
	private db: Map<string, string> = new Map();
	save(key: string, value: string) {
		this.db.set(key, value);
	}
	show() {
		console.log(this.db);
	}
}

class PersistentDB {
	private persistentDB: Map<string, string> = new Map();

	savePersistent({ key, value }: { key: string; value: string }) {
		this.persistentDB.set(key, value);
	}

	show(): void {
		console.log(this.persistentDB);
	}
}

class PersistentDBAdapter extends KVDatabase {
	constructor(public database: PersistentDB) {
		super();
	}

	override save(key: string, value: string): void {
		this.database.savePersistent({ key, value });
	}
}

function run(base: KVDatabase) {
	base.save('key', 'myValue');
}

const base = new PersistentDBAdapter(new PersistentDB());
run(base);
base.database.show();
