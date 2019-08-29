import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/storeActions';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';

// login state management start
// tslint:disable-next-line:class-name
export interface loginState {
    userId: string;
    user_token: string;
    first_name: string;
    last_name: string;
    role_name: any;
}

const initialState: loginState = {
  userId: '',
  user_token: '',
  first_name: '',
  last_name: '',
  role_name: '',
};

export function reducerLogin(state: loginState = initialState, action): loginState {
  if (KeycloakService.isLogged()) {
    const userDetails = KeycloakService.loadUserProfile();
     initialState.userId = userDetails.tokenParsed.sub;
     initialState.user_token = userDetails.token;
     initialState.first_name = userDetails.tokenParsed.given_name;
     initialState.last_name = userDetails.tokenParsed.family_name;
     initialState.role_name = userDetails.tokenParsed.realm_access.roles;
   }
    switch (action.type) {
        case ACTION_LOGOUT:
            return {
                ...state,
                userId: '',
                user_token: '',
                first_name: '',
                last_name: '',
                role_name: []
            };
        case ACTION_LOGIN:
            return {
                ...state,
                userId: action.userId,
                user_token: action.user_token,
                first_name: action.first_name,
                last_name: action.last_name,
                role_name: action.role_name
            };
    }
    return state;
}
// login state management end






