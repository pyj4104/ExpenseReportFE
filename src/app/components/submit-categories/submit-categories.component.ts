import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Category } from '@interfaces/category';
import { CategoriesService } from '@services/categories/categories.service';

@Component({
	selector: 'app-submit-categories',
	templateUrl: './submit-categories.component.html',
	styleUrls: ['./submit-categories.component.css'],
})
export class SubmitCategoriesComponent implements OnInit {
	private formID: number;
	public categories: Category[];
	constructor(
		private router: Router,
		private categoriesService: CategoriesService
	) {
		try {
			const navigation = this.router.getCurrentNavigation();
			const state = navigation.extras.state as { formID: number };
			this.formID = state.formID;
		} catch (error) {
			alert('Invalid access route. Please create a form first.');
			this.router.navigate(['/reportExpenses']);
		}
	}

	ngOnInit(): void {
		this.categories = [];
	}

	submit(): void {
		if (this.categories.length < 1) {
			alert('Please submit at least one category.');
		} else {
			this.categoriesService
				.submitCategories(this.categories)
				.subscribe((response) => {
					this.setMessage(response);
				});
		}
	}

	addRow(): void {
		if (this.categories.length < 5) {
			const newRow = { formID: this.formID };
			this.categories.push(newRow);
		} else {
			alert('Max amount of categories reached.');
		}
	}

	setMessage(response: number): void {
		console.log(response);
		if (response[0]) {
			const navigationExtras: NavigationExtras = {
				state: { formID: this.formID },
			};
			this.router.navigate(['/submitDetailedReport'], navigationExtras);
		} else if (response === 422) {
			alert('One or more of the fields are invalid.');
		}
	}
}
