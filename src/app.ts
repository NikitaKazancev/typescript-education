let stringOrNumber: string | number;

if (Math.random() > 0.5) stringOrNumber = 5;
else stringOrNumber = 'str';

if (typeof stringOrNumber == 'string') console.log(stringOrNumber);
else console.log(stringOrNumber);

let strOrNum: typeof stringOrNumber;

const user = {
	name: 'User',
	age: 18,
};

type keyOfUser = keyof typeof user; // name | age

enum Direction {
	UP,
	DOWN,
}

type d = keyof typeof Direction;
