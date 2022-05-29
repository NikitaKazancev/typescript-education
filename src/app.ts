interface IInsurance {
	id: number;
	status: string;
	setVehicle(vehicle: any): void;
	submit(data: any): Promise<boolean>;
}

abstract class InsuranceFactory {
	db: any = 10;
	// abstract createInsurance(): IInsurance;

	saveHistory(ins: IInsurance) {
		this.db.save(ins.id, ins.status);
	}
}

class TFInsurance extends InsuranceFactory implements IInsurance {
	id: number;
	status: string;
	private vehicle: any;

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async submit(data: any): Promise<boolean> {
		const res = await fetch('', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		return (await res.json()).isSuccess;
	}
}

// Своя какая-то реализация
class ABInsurance extends InsuranceFactory implements IInsurance {
	id: number;
	status: string;
	private vehicle: any;

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async submit(data: any): Promise<boolean> {
		const res = await fetch('', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		return (await res.json()).ok;
	}
}

const abIns = new ABInsurance();
abIns.submit(1);

// class TFInsuranceFactory extends InsuranceFactory {
// 	createInsurance(): TFInsurance {
// 		return new TFInsurance();
// 	}
// }

// class ABInsuranceFactory extends InsuranceFactory {
// 	createInsurance(): ABInsurance {
// 		return new ABInsurance();
// 	}
// }
