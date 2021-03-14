import { Component, OnInit } from '@angular/core';
import { LogInService } from '@services/log-in-service/log-in.service';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
	loggedIn: boolean;
	sessionToken?: string;
	public sessionStorage = sessionStorage;

	constructor(private logInService: LogInService) {}

	ngOnInit(): void {
		this.loggedIn = false;
		this.logInService
			.isLoggedIn()
			.subscribe(
				(responseCode) => this.showElem(responseCode)
			);
	}

	showElem(responseCode: number): void {
		this.sessionToken = sessionStorage.getItem("Authorization")
		if (responseCode == 200) {
			this.loggedIn = true;
		} else {
			this.loggedIn = false;
		}
	}
}
