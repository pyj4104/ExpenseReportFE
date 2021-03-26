export interface DetailedReport {
	categoryID?: number;
	date?: string;
	amount?: string;
	breakdown?: string;
}

export interface DetailedReports {
	detailedReports: DetailedReport[];
}
