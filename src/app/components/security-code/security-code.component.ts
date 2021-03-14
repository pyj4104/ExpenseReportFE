import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityCodeServices } from '@services/security-code/security-code-services';

@Component({
	selector: 'app-security-code',
	templateUrl: './security-code.component.html',
	styleUrls: ['./security-code.component.css'],
})
export class SecurityCodeComponent implements OnInit {
	secCode?: string;
	message?: string;
	public sessionStorage = sessionStorage;

	constructor(
		private secService: SecurityCodeServices,
		private router: Router
	) {}

	ngOnInit(): void {}

	submit(): void {
		this.secService
			.sendSecCode(this.secCode)
			.subscribe((responseCode) => this.setMessage(responseCode));
	}

	setMessage(responseCode: number): void {
		console.log(responseCode);
		console.log(sessionStorage.getItem("Authorization"));
		if (responseCode == 200) {
			this.router.navigate(['/mainPage']);
		} else if (responseCode == 422) {
			this.message = 'The security code entered is not a vaild format.';
		} else if (responseCode == 403) {
			this.message =
				'The security code either expired or does not exist.';
		}
	}
}
