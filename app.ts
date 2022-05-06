const n: null = null;
// const n1: number = null;
// const n2: string = null;
// const n3: boolean = null;
// const n4: undefined = null;

interface IUser {
	name: string;
}

function getUser() {
	if (Math.random() > 0.5) return;
	else return { name: 'Nike' } as IUser;
}

const user = getUser();
if (user) {
	const n55 = user.name;
}
