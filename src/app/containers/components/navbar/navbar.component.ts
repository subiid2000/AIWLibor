import { Component, OnInit, Input } from '@angular/core';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';
import { reduxServices } from 'src/app/store/methods/store_methods.services';
import { takeUntil } from 'rxjs/Operators';
import { Subject } from 'rxjs';
import { ACTION_LOGOUT } from 'src/app/store/actions/storeActions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() title: string;
    private unsubscribe: Subject<any> = new Subject();
    appState: any;
    constructor(private stateService: reduxServices) {
      this.stateService.getLoginState().pipe(takeUntil(this.unsubscribe)).subscribe(state => {
        this.appState = state;
      });
    }

    ngOnInit() {
      console.log(this.appState);
    }
    logout() {
      this.stateService.updateLogoutState(ACTION_LOGOUT);
      return KeycloakService.logout();
    }
    menuClick() {
     // document.getElementById('main-panel').style.marginRight = '260px';
    }
}
