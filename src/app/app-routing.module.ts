import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'sign-in', loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  {
    path: 'establishment',
    // component: MainComponent,
    children: [
      { path: '', loadComponent: () => import('./modules/establishment/views/list/list.component').then(m => m.ListComponent) },
      { path: 'create', loadComponent: () => import('./modules/establishment/views/create-establishment/create-establishment.component').then(m => m.CreateEstablishmentComponent) },
      { path: 'details/:id', loadComponent: () => import('./modules/establishment/views/details/details.component').then(m => m.DetailsComponent) },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
