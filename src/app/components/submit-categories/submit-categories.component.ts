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
				.subscribe((responseCode) => this.setMessage(responseCode));
		}
	}

	addRow(): void {
		if (this.categories.length < 5) {
			let newRow = { formID: this.formID };
			this.categories.push(newRow);
		} else {
			alert('Max amount of categories reached.');
		}
	}

	setMessage(responseCode: number): void {
		if (responseCode == 200) {
			const navigationExtras: NavigationExtras = {
				state: { formID: this.formID },
			};
			this.router.navigate(['/submitDetailedReport'], navigationExtras);
		} else if (responseCode == 422) {
			alert('One or more of the fields are invalid.');
		}
	}
}
