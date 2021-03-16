import { Component, OnInit } from '@angular/core';
import { ExpenseReportsService } from '@services/expense-reports/expense-reports.service';
import { Ministry } from '@interfaces/ministry';
import { ExpenseReport } from '@interfaces/expense-report';

@Component({
	selector: 'app-report-expenses',
	templateUrl: './report-expenses.component.html',
	styleUrls: ['./report-expenses.component.css'],
})
export class ReportExpensesComponent implements OnInit {
	public ministries: Ministry[];
	public expenseReport: ExpenseReport;
	public selectedMinistry: number;
	public hi: number;

	constructor(private expenseReportsService: ExpenseReportsService) {}

	ngOnInit(): void {
		this.expenseReport = { ministryID: null };
		this.expenseReportsService.getMinistries().subscribe((ministries) => {
			this.ministries = ministries;
			console.log(ministries);
		});
	}

	submit(): void {
		this.expenseReportsService
			.submitReport(this.expenseReport)
			.subscribe((result) => {
				console.log(result);
				if (result[0]) {
					console.log(result[1].body.id);
				} else {
					console.log(result[1]);
				}
			});
	}
}
