import { DetailedReportsService } from '@services/detailed-reports/detailed-reports.service';
import { DetailedReport } from '@interfaces/detailed-reports';
import { CategoriesService } from '@services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Category } from '@interfaces/category';

@Component({
	selector: 'app-submit-detailed-report',
	templateUrl: './submit-detailed-report.component.html',
	styleUrls: ['./submit-detailed-report.component.css'],
})
export class SubmitDetailedReportComponent implements OnInit {
	private formID: number;
	public categories: Category[];
	public detailedReports: DetailedReport[];

	constructor(
		private router: Router,
		private categoriesSevrice: CategoriesService,
		private detailedReportsService: DetailedReportsService
	) {
		try {
			const val = this.router.getCurrentNavigation().extras.state as {
				formID: number;
			};
			this.formID = val.formID;
			console.log(this.formID);
		} catch (error) {
			alert('Invalid access route. Please create a form first.');
			this.router.navigate(['/reportExpenses']);
		}
	}

	ngOnInit(): void {
		this.detailedReports = [];
		this.categoriesSevrice.getCaegories(this.formID).subscribe({
			next: (result) => {
				console.log(result);
				this.categories = result;
			},
			error: (result) => {
				console.log(result);
			},
		});
	}

	submit(): void {
		console.log(this.detailedReports);
		if (this.detailedReports.length < 1) {
			alert('Please submit at least one category.');
		} else {
			this.detailedReportsService
				.submitDetailedReports(this.detailedReports)
				.subscribe({
					next: (result) => {
						this.success(result);
					},
					error: (error) => {
						this.failure(error);
					},
				});
		}
	}

	addRow(): void {
		if (this.detailedReports.length < 12) {
			const newRow = {};
			this.detailedReports.push(newRow);
		} else {
			alert('Max amount of detailed reports reached.');
		}
	}

	success(result: [number, any]): void {
		const navigationExtras: NavigationExtras = {
			state: { formID: this.formID },
		};
		this.router.navigate(['/submitReceipts'], navigationExtras);
	}

	failure(error: [number, any]): void {}
}
