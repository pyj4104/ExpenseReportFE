import { SubmitReceiptsComponent } from '@components/submit-receipts/submit-receipts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '@components/log-in/log-in.component';
import { SignUpComponent } from '@components/sign-up/sign-up.component';
import { SecurityCodeComponent } from '@components/security-code/security-code.component';
import { MainPageComponent } from '@components/main-page/main-page.component';
import { ReportExpensesComponent } from '@components/report-expenses/report-expenses.component';
import { SubmitCategoriesComponent } from '@components/submit-categories/submit-categories.component';
import { SubmitDetailedReportComponent } from '@app/components/submit-detailed-reports/submit-detailed-report.component';

const routes: Routes = [
	{ path: '', redirectTo: '/mainPage', pathMatch: 'full' },
	{ path: 'logIn', component: LogInComponent },
	{ path: 'secCode', component: SecurityCodeComponent },
	{ path: 'signUp', component: SignUpComponent },
	{ path: 'mainPage', component: MainPageComponent },
	{ path: 'reportExpenses', component: ReportExpensesComponent },
	{ path: 'submitCategories', component: SubmitCategoriesComponent },
	{ path: 'submitDetailedReport', component: SubmitDetailedReportComponent },
	{ path: 'submitReceipts', component: SubmitReceiptsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
