import { TestBed } from '@angular/core/testing';

import { ExpenseReportsService } from './expense-reports.service';

describe('ExpenseReportsService', () => {
	let service: ExpenseReportsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExpenseReportsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
