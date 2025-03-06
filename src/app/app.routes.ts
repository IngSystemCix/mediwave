import type { Routes } from '@angular/router';
import { LoginComponent, RecoverPasswordComponent } from '@/pages';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
];
