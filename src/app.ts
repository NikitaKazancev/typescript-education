type TConstructor = new (...args: any[]) => {};
type TGConstructor<T = {}> = new (...args: any[]) => T;

class List {
	items: string[];
}

class Accordion {
	isOpened: boolean;
}

// типы, которые определяют класс с установленными в интерфейс полями
type TList = TGConstructor<List>;
type TAccordion = TGConstructor<Accordion>;

// class ExtendedListClass extends List {
// 	first() {
// 		return this.items[0];
// 	}
// }

function ExtendedList<TBase extends TList & TAccordion>(Base: TBase) {
	return class ExtendedList extends Base {
		first() {
			console.log(this.isOpened);
			return this.items[0];
		}
	};
}

class AccordionList {
	isOpened: boolean;
	constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(['first', 'second']);
console.log(res.first());
