import { TestBed } from '@angular/core/testing';

import { DetailedReportsService } from './detailed-reports.service';

describe('DetailedReportsService', () => {
	let service: DetailedReportsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DetailedReportsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
