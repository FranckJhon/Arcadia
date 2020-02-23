
import Axios from 'axios'

export function getCards(data) {
    const url = 'https://db.ygoprodeck.com/api/v6/cardinfo.php?name='+data

    return Axios.post(
        url,
       data
    )
        .catch(
            error => {
                
                return Promise.reject(error.response.data);
            }
        )
        .then(
            response => {

                
                return response;
            }
        )

}
