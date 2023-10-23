import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'sign-in', loadComponent: () => import('./modules/account/sign-in/sign-in.component').then(m => m.SignInComponent) },
  { path: 'sign-up', loadComponent: () => import('./modules/account/sign-up/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'forgot-password', loadComponent: () => import('./modules/account/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'verify-email-address', loadComponent: () => import('./modules/account/verify-email/verify-email.component').then(m => m.VerifyEmailComponent) },
  {
    path: 'establishment',
    // component: MainComponent,
    children: [
      { path: '', loadComponent: () => import('./modules/establishment/views/list/list.component').then(m => m.ListComponent) },
      { path: 'create', loadComponent: () => import('./modules/establishment/views/create-establishment/create-establishment.component').then(m => m.CreateEstablishmentComponent) },
      { path: 'details/:id', loadComponent: () => import('./modules/establishment/views/details/details.component').then(m => m.DetailsComponent) },
    ], canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
