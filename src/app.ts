interface IProvider {
	sendMessage(message: string): void;
	connect(config: unknown): void;
	disconnect(): void;
}

class TelegramProvider implements IProvider {
	sendMessage(message: string): void {
		console.log(message);
	}
	connect(config: string): void {
		console.log(config);
	}
	disconnect(): void {
		console.log('Disconnected telegram');
	}
}

class WhatsAppProvider implements IProvider {
	sendMessage(message: string): void {
		console.log(message);
	}
	connect(config: string): void {
		console.log(config);
	}
	disconnect(): void {
		console.log('Disconnected whatsapp');
	}
}

class NotificationCenter {
	constructor(private provider: IProvider) {}

	send() {
		this.provider.connect('connect');
		this.provider.sendMessage('message');
		this.provider.disconnect();
	}
}

class DelayNotificationCenter extends NotificationCenter {
	sendDelayed() {}
}

const sender = new DelayNotificationCenter(new TelegramProvider());
sender.sendDelayed();
sender.send();
