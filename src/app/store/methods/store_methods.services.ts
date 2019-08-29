import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class reduxServices {
    constructor(private store: Store<any>) {
    }

    // login get and set start
    getLoginState() {
        return this.store.select('loginState');
    }
    updateLoginState(sessionObject, type) {
        this.store.dispatch({
            type: type,
            userId: sessionObject.userId,
            user_token: sessionObject.user_token,
            first_name: sessionObject.first_name,
            last_name: sessionObject.last_name,
            role_name: sessionObject.role_name
        });
    }


    updateLogoutState(type) {
        this.store.dispatch({
            type: type
        });
    }
    // login get and set end

}
