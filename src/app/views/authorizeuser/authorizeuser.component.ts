import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';
import { reduxServices } from 'src/app/store/methods/store_methods.services';
import { ACTION_LOGIN } from 'src/app/store/actions/storeActions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorizeuser',
  templateUrl: './authorizeuser.component.html',
  styleUrls: ['./authorizeuser.component.scss']
})
export class AuthorizeuserComponent implements OnInit {

  constructor(
    private stateService: reduxServices,
    private router: Router) { }

  ngOnInit() {
    if (KeycloakService.isLogged()) {
      const userDetails = KeycloakService.loadUserProfile();
        this.stateService.updateLoginState({
          userId: userDetails.tokenParsed.sub,
          user_token: userDetails.token,
          first_name: userDetails.tokenParsed.given_name,
          last_name: userDetails.tokenParsed.family_name,
          role_name: userDetails.tokenParsed.realm_access.roles,
        }, ACTION_LOGIN);
        this.router.navigate(['/dashboard']);
      }
  }

}
