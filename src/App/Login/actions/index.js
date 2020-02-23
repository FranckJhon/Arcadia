import UserConstants from "../../../Shared/redux/constants/UserConstants";
import UserServices from "../services";
import history from '../../../Shared/redux/history'

export function login(username, password) {
    return dispatch => {
        dispatch(request(true));
        UserServices.login(username, password)
            .then(
                resp => {
                    dispatch(success(resp.data))
                    history.push('/')
                    
                
                },
                error => {
                    dispatch(failure(error.toString()))
          

                }
            )
    }
    function request(user) { return { type: UserConstants.USER_LOGIN_REQUEST, user } }
    function success(resp) { return { type: UserConstants.USER_LOGIN_SUCCESS, resp } }
    function failure(error) { return { type: UserConstants.USER_LOGIN_FAILURE, error } }
}

export function logout() {
    UserServices.logout();

    history.push('/login')
    return {
        type: UserConstants.USER_LOGOUT_SUCCESS
    }
}
