import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'task-pending',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/task-pending/task-pending.module').then( m => m.TaskPendingPageModule)
  },
  {
    path: 'task-overdue',
    canActivate: [LoginGuard],

    loadChildren: () => import('./pages/task-overdue/task-overdue.module').then( m => m.TaskOverduePageModule)
  },
  {
    path: 'task-finished',
    canActivate: [LoginGuard],

    loadChildren: () => import('./pages/task-finished/task-finished.module').then( m => m.TaskFinishedPageModule)
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'recover',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
