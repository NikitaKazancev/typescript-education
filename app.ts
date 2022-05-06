const skills: readonly [{ number?: number }, string, number] = [
	{ number: 1 },
	'React',
	1,
];

skills[0].number = 2;

skills.forEach(skill => console.log(skill));

const obj: Readonly<{ arr: string[] }> = { arr: ['1', '2'] };

// obj.arr = ['1'];
