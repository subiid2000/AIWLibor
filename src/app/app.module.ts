import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SettingsComponent } from './views/settings/settings.component';
import { FooterComponent } from './containers/components/footer/footer.component';
import { SidebarComponent } from './containers/components/sidebar/sidebar.component';
import { NavbarComponent } from './containers/components/navbar/navbar.component';
import { MsgiconbtnComponent } from './containers/components/msgiconbtn/msgiconbtn.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigurationsService } from 'src/services';
import { KeycloakService } from './core/auth/keycloak.service';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
import { HelpComponent } from './views/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    SettingsComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    MsgiconbtnComponent,
    HelpComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ToasterModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [ConfigurationsService, ToasterService, KeycloakService,
    AuthGuardService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SecuredHttpInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
