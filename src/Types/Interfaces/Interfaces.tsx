export interface IPosts {
	body: string,
	id: number,
	reactions: number,
	tags: string[],
	title: string,
	userId: number
}

export interface IUsers {
	id: number,
	firstName: string,
	lastName: string,
	image: string,
	email: string
}

export interface IComments {
	id: number;
	body: string;
	postId: number;
	user: {
		id: number;
		username: string
	}
}

export interface IChildComponentElementType {
	children: JSX.Element,
}