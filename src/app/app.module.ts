import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecurityCodeComponent } from './components/security-code/security-code.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReportExpensesComponent } from './components/report-expenses/report-expenses.component';
import { SubmitCategoriesComponent } from './components/submit-categories/submit-categories.component';
import { SubmitDetailedReportComponent } from './components/submit-detailed-reports/submit-detailed-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { SubmitReceiptsComponent } from './components/submit-receipts/submit-receipts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		LogInComponent,
		SignUpComponent,
		SecurityCodeComponent,
		MainPageComponent,
		ReportExpensesComponent,
		SubmitCategoriesComponent,
		SubmitDetailedReportComponent,
		SubmitReceiptsComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDatepickerModule,
		MatNativeDateModule,
	],
	providers: [MatDatepickerModule, MatNativeDateModule, DatePipe],
	bootstrap: [AppComponent],
})
export class AppModule {}
