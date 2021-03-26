import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
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

	constructor(
		private router: Router,
		private expenseReportsService: ExpenseReportsService
	) {}

	ngOnInit(): void {
		this.expenseReport = { ministryID: null };
		this.expenseReportsService.getMinistries().subscribe((ministries) => {
			console.log(ministries);
			this.ministries = ministries;
		});
	}

	submit(): void {
		this.expenseReportsService
			.submitReport(this.expenseReport)
			.subscribe((result) => {
				if (result[0]) {
					const navigationExtras: NavigationExtras = {
						state: { formID: result[1].id },
					};
					this.router.navigate(
						['/submitCategories'],
						navigationExtras
					);
				} else {
					alert('Please check input format!');
				}
			});
	}
}
