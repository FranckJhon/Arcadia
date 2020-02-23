import {getCards} from "../services";
import HomeConstants from '../../../Shared/redux/constants/HomeConstants'
export function getCard(data) {
    return dispatch => {
        dispatch(request(true));
        getCards(data)
            .then(
                resp => {
                    dispatch(success(resp.data))
                    
                
                },
                error => {
                    dispatch(failure(error.toString()))
          

                }
            )
    }
    function request(resp) { return { type: HomeConstants.GET_CARDS_REQUEST, resp } }
    function success(resp) { return { type: HomeConstants.GET_CARDS_SUCCESS, resp } }
    function failure(error) { return { type: HomeConstants.GET_CARDS_FAILURE, error } }
}
