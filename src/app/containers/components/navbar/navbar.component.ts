import { Component, OnInit, Input } from '@angular/core';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() title: string;
    constructor() {}

    ngOnInit() {
    }
    logout() {
      return KeycloakService.logout();
    }
    menuClick() {
     // document.getElementById('main-panel').style.marginRight = '260px';
    }
}
