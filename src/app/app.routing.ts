import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { HelpComponent } from './views/help/help.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
