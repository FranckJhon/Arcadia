import axios from 'axios'

export function postTornament(data) {

    return axios.post({
        url: 'http://localhost:4000'
    })
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