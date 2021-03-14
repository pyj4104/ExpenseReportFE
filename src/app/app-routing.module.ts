import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '@components/log-in/log-in.component';
import { SignUpComponent } from '@components/sign-up/sign-up.component';
import { SecurityCodeComponent } from '@components/security-code/security-code.component';
import { MainPageComponent } from '@components/main-page/main-page.component';
import { ReportExpensesComponent } from '@components/report-expenses/report-expenses.component';

const routes: Routes = [
	{ path: '', redirectTo: '/mainPage', pathMatch: 'full' },
	{ path: 'logIn', component: LogInComponent },
	{ path: 'secCode', component: SecurityCodeComponent },
	{ path: 'signUp', component: SignUpComponent },
	{ path: 'mainPage', component: MainPageComponent },
	{ path: 'reportExpenses', component: ReportExpensesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
