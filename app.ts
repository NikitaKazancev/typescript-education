interface IProduct {
	id: number;
	name: string;
	price: number;
}

interface IDeliveryHome {
	date: Date;
	address: string;
}

interface IDeliveryShop {
	date?: Date;
	id: number;
}

type IDelivery = IDeliveryHome | IDeliveryShop;

class Cart {
	private products: IProduct[] = [];
	private delivery: IDelivery;

	addProduct(product: IProduct): this {
		this.products.push(product);
		return this;
	}

	deleteProduct(id: number): this {
		this.products = this.products.filter(
			(product: IProduct) => product.id !== id
		);
		return this;
	}

	calcCost(): number {
		let res: number = 0;
		this.products.forEach(product => (res += product.price));
		return res;
	}

	setDelivery(delivery: IDeliveryHome): void;
	setDelivery(delivery: IDeliveryShop): void;
	setDelivery(delivery: IDelivery): void {
		if (!delivery.date) delivery.date = new Date();
		this.delivery = delivery;
	}

	checkout() {
		if (this.products.length && this.delivery) {
			console.log('\nProducts: ', this.products);
			console.log("\nDelivery's data: ", this.delivery, '\n');
		}
	}
}

const card = new Cart();
card
	.addProduct({
		id: 1,
		name: 'Chocolate',
		price: 100,
	})
	.addProduct({
		id: 2,
		name: 'Muffin',
		price: 200,
	})
	.addProduct({
		id: 3,
		name: 'Cake',
		price: 1000,
	})
	.deleteProduct(2)
	.setDelivery({
		date: new Date(),
		address: 'my cool address',
	});

console.log(card.calcCost());
card.checkout();
