import { GetStartedComponent } from './get-started/get-started.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { FormComponent } from './form/form.component';
import { TemplatesComponent } from './templates/templates.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import { EditCampaignComponent } from './editor/edit-campaign/edit-campaign.component';

const routes: Routes = [
  // { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'forms', component: FormComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editor', component: EditCampaignComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});

export default routes;
