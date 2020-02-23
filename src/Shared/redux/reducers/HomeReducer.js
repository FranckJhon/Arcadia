import HomeConstants from "../constants/HomeConstants";
const initialState = {listofcards:[]}
export default (state = initialState, action) => {
    switch (action.type) {

        case HomeConstants.GET_CARDS_REQUEST:
            return {
                ...state,
            }
        case HomeConstants.GET_CARDS_SUCCESS:
            const card=action.resp[0]
            console.log('====================================');
            console.log(state);
            console.log('====================================');
            return {
                listofcards:[...state.listofcards.map(item=>item),card]
            }
                
        case HomeConstants.GET_CARDS_FAILURE:
            return {
                ...state,
                
            }
        
        default:
            return state
    }
}