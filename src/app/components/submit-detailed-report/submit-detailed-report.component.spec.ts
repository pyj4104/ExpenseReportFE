import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDetailedReportComponent } from './submit-detailed-report.component';

describe('SubmitDetailedReportComponent', () => {
	let component: SubmitDetailedReportComponent;
	let fixture: ComponentFixture<SubmitDetailedReportComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubmitDetailedReportComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SubmitDetailedReportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
