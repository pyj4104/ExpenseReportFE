import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReceiptsComponent } from './submit-receipts.component';

describe('SubmitReceiptsComponent', () => {
	let component: SubmitReceiptsComponent;
	let fixture: ComponentFixture<SubmitReceiptsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubmitReceiptsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SubmitReceiptsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
