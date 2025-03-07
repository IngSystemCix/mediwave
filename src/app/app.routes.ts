import type { Routes } from '@angular/router';
import { LoginComponent, NotFoundComponent, RecoverPasswordComponent } from '@/pages';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: '**', component: NotFoundComponent }
];
