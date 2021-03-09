import { TestBed } from '@angular/core/testing';

import { SecurityCodeServices } from './security-code-services';

describe('SecurityCodeServices', () => {
	let service: SecurityCodeServices;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SecurityCodeServices);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
