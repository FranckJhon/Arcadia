import TorneosConstants from "../constants/TorneosConstants";
let tornament = JSON.parse(localStorage.getItem('tornament'));
let provider =Number(localStorage.getItem('selectedProvider'));
let providers=tornament&&tornament.Providers
console.log('====================================');
console.log(tornament);
console.log('====================================');
const initialState =
    tornament ?
        {

            Evento:tornament.Evento,
            Oficial:tornament.Oficial,
            Fecha:tornament.Fecha,
            Min:tornament.Min,
            Max:tornament.Max,
            Inscripcion:tornament.Inscripcion
           
        }
        :
        {
        
        };

export default (state = initialState, action) => {
    switch (action.type) {

        case TorneosConstants.POST_TOURNAMENTS_REQUEST:
            return {
                ...state
            }
        case TorneosConstants.POST_TOURNAMENTS_SUCCESS:
            

                return {
                    ...state,
                    Evento:action.resp.Evento,
                    Oficial:action.resp.Oficial,
                    Fecha:action.resp.Fecha,
                    Min:action.resp.Min,
                    Max:action.resp.Max,
                    Inscripcion:action.resp.Inscripcion
                   
                
            }
        case TorneosConstants.POST_TOURNAMENTS_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}