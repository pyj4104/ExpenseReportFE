import { Component, OnInit } from '@angular/core';
import { LogInService } from '@services/log-in-service/log-in.service';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
	userEmail?:string = null;
	message?:string = null;

	constructor(private logInService: LogInService) {}

	ngOnInit(): void {}

	submit(): void {
		this.logInService.requestLogIn(this.userEmail).subscribe(responseCode => this.setMessage(responseCode));
	}

	setMessage(responseCode: number): void {
		console.log(responseCode)
		if (responseCode == 200) {
			this.message = "works!";
		} else if (responseCode == 422) {
			this.message = "The email entered is not a vaild format.";
		} else if (responseCode == 403) {
			this.message = "The email is either not registered or unapproved.";
		}
	}
}
