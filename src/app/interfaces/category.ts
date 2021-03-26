export interface Category {
	formID?: number;
	categoryName?: string;
	amount?: string;
	remarks?: string;
}

export interface Categories {
	categories?: Category[];
}
