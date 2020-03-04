import TorneosConstants from "../../../Shared/redux/constants/TorneosConstants";
import {postTornament} from "../services";

export function tornaments() {
    return dispatch => {
        dispatch(request(true));
        postTornament()
            .then(
                resp => {
                    dispatch(success(resp))
                    
                
                },
                error => {
                    dispatch(failure(error.toString()))
          

                }
            )
    }
    function request(resp) { return { type: TorneosConstants.POST_TOURNAMENTS_REQUEST, resp } }
    function success(resp) { return { type: TorneosConstants.POST_TOURNAMENTSS_UCCESS, resp } }
    function failure(error) { return { type: TorneosConstants.POST_TOURNAMENTS_FAILURE, error } }
}
