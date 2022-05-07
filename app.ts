class User {
	skills: string[];

	addSkill(skill: string): void;
	addSkill(skills: string[]): void;
	addSkill(data: string | string[]): void {
		if (typeof data === 'string') this.skills.push(data);
		else this.skills.concat(data);
	}
}

new User().addSkill('dwa');
