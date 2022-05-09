// abstract class Controller {
// 	abstract handle(req: any): void;

// 	num: number = 10;
// 	str: string;

// 	logId(id: number) {
// 		console.log(id);
// 	}
// }

// interface IController {
// 	handle2(req: any): void;
// }

// class UserController extends Controller implements IController {
// 	handle = (req: any): void => {};
// 	handle2(req: any): void {}
// }

// const user = new UserController();
// user.logId(10);

abstract class Logger {
	abstract log(message: string): void;

	printDate() {
		this.log(new Date().toLocaleString());
	}
}

/* @internal */
class RealLogger extends Logger {
	log(message: string): void {
		console.log(message);
	}

	logWithDate(message: string) {
		this.printDate();
		this.log(message);
	}
}
const logger = new RealLogger();
logger.logWithDate('Hello');
