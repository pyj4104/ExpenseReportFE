import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '@components/log-in/log-in.component';
import { SignUpComponent } from '@components/sign-up/sign-up.component';

const routes: Routes = [
	{path: '', redirectTo: '/logIn', pathMatch: 'full'},
	{path: 'logIn', component: LogInComponent},
	{path: 'signUp', component: SignUpComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
