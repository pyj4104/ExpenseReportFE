import { ReceiptsService } from '@services/receipts/receipts.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-submit-receipts',
	templateUrl: './submit-receipts.component.html',
	styleUrls: ['./submit-receipts.component.css'],
})
export class SubmitReceiptsComponent implements OnInit {
	private formID: number;
	public message: string;
	public receipts: File[];

	constructor(
		private router: Router,
		private reiptsService: ReceiptsService
	) {
		this.receipts = [];
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

	ngOnInit(): void {}

	submit(): void {
		this.reiptsService
			.submitReceipts(this.formID, this.receipts)
			.subscribe({
				next: (result) => {
					this.success(result);
				},
				error: (error) => {
					this.failure(error);
				},
			});
	}

	onSelected(event): void {
		console.log(event);
		const fileLen = event.target.files.length;
		if (fileLen > 0) {
			this.receipts.push(event.target.files.item(0));
		}
		console.log(this.receipts);
	}

	success(result): void {
		alert('Report submitted!');
		this.router.navigate(['/mainPage']);
	}

	failure(result): void {
		this.message = 'It did not work.';
	}
}
