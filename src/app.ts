type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
	customers?: Modifier;
	projects?: Modifier;
	adminPanel?: Modifier;
};

type UserAccess = {
	+readonly [key in keyof UserRoles as Exclude<
		`canAccess${Capitalize<key>}`,
		'canAccessAdminPanel'
	>]-?: boolean;
};
