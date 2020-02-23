
import Axios from 'axios'
export const UserServices = {
    login,
    logout,
}

function login(data) {
    const url = 'http://localhost:5000/login'

    return Axios.post(
        url,
       data
    )
        .catch(
            error => {
                alert(error.response.data + " contacte a sistemas")
                return Promise.reject(error.response.data);
            }
        )
        .then(
            user => {

                localStorage.setItem('user', JSON.stringify(user.data));
                return user;
            }
        )

}
function logout() {
    console.log("logout");
    localStorage.removeItem('file')
    localStorage.removeItem('user');
}

export default UserServices;