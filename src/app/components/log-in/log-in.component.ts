import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
	userEmail? = null;

	constructor() {}

	ngOnInit(): void {}

	submit(): void {
		console.log(`${this.userEmail}`);
	}
}
