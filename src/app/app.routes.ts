import { GetStartedComponent } from './get-started/get-started.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'forms', component: FormComponent },

  { path: '', redirectTo: '/get-started', pathMatch: 'full' }, // Default route
];

export default routes;
