class DeliveryProduct {
	constructor(private price: number) {}

	getPrice(): number {
		return this.price;
	}
}

type Item = DeliveryProduct | DeliveryItem;

abstract class DeliveryItem {
	items: Item[] = [];

	abstract getPrice(): number;

	getItemsPrice(): number {
		return this.items.reduce(
			(acc: number, item: Item) => acc + item.getPrice(),
			0
		);
	}

	addItem(item: Item): void {
		this.items.push(item);
	}
}

class DeliveryShop extends DeliveryItem {
	constructor(private deliveryPrice: number) {
		super();
	}

	getPrice(): number {
		return this.getItemsPrice() + this.deliveryPrice;
	}
}

class DeliveryPackage extends DeliveryItem {
	getPrice(): number {
		return this.getItemsPrice();
	}
}

const shop = new DeliveryShop(200);
const package1 = new DeliveryPackage();
package1.addItem(new DeliveryProduct(100));
package1.addItem(new DeliveryProduct(2000));
shop.addItem(package1);
shop.addItem(new DeliveryProduct(300));
shop.addItem(new DeliveryPackage());
if (shop.items[2] instanceof DeliveryItem) {
	shop.items[2].addItem(new DeliveryProduct(1));
}

console.log(shop.getPrice());
