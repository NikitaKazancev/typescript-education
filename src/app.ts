interface IMediator {
	notify(sender: string, event: string): void;
}

abstract class Mediated {
	mediator: IMediator;
	setMediator(mediator: IMediator) {
		this.mediator = mediator;
	}
}

class Notifications {
	send() {
		console.log('Отправляю уведомление...');
	}
}

class Log {
	log(message: string) {
		console.log(message);
	}
}

class EventHandler extends Mediated {
	myEvent() {
		this.mediator.notify('EventHandler', 'my event');
	}
}

class NotificationMediator implements IMediator {
	constructor(
		public notifications: Notifications,
		public logger: Log,
		public handler: EventHandler
	) {}

	notify(_: string, event: string): void {
		switch (event) {
			case 'my event':
				this.notifications.send();
				this.logger.log('Логирую...');
				break;
		}
	}
}

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();
const notificationMediator = new NotificationMediator(
	notifications,
	logger,
	handler
);
handler.setMediator(notificationMediator);
handler.myEvent();
