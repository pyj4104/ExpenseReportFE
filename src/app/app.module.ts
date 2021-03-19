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
import { SubmitDetailedReportComponent } from './components/submit-detailed-report/submit-detailed-report.component';

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
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
