import UserConstants from "../constants/UserConstants";
import history from '../history'
let user = JSON.parse(localStorage.getItem('user'));
let provider =Number(localStorage.getItem('selectedProvider'));
let providers=user&&user.Providers
console.log('====================================');
console.log(user);
console.log('====================================');
const initialState =
    user ?
        {
            
            userName:user.UserName,
            userLastName:user.UserLastName,
            UserType: user.UserType
           
        }
        :
        {
        
        };

export default (state = initialState, action) => {
    switch (action.type) {

        case UserConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                doingReq: true,
                logedOut: true
            }
        case UserConstants.USER_LOGIN_SUCCESS:
            

                history.push('/')
                return {
                    ...state,
                    userName:action.resp.UserName,
                    userLastName:action.resp.UserLastName,
                    UserType: action.resp.UserType
                   
                
            }
        case UserConstants.USER_LOGIN_FAILURE:
            return {
                ...state,
                logedOut: true
            }
        case UserConstants.USER_LOGOUT_REQUEST:
            return {
                ...state,
                logedOut: false,
                doingReq: true,
                user
            }
        case UserConstants.USER_LOGOUT_SUCCESS:
            return {
                logedOut: true
            }
        case UserConstants.USER_LOGOUT_FAILURE:
            return {
                ...state,
                logedOut: false,
                user
            }
            case UserConstants.USER_SELECT_PROVIDER:
                return{
                    ...state,
                    selectedProvider:action.resp
                }
        default:
            return state
    }
}