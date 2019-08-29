import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { HelpComponent } from './views/help/help.component';
import { ContractDashboardComponent } from './views/contract-dashboard/contract-dashboard.component';
import { AuthorizeuserComponent } from './views/authorizeuser/authorizeuser.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'authorize', pathMatch: 'full' },
  { path: 'authorize', component: AuthorizeuserComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'contract-dashboard', component: ContractDashboardComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
