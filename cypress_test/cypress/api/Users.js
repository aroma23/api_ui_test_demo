// Importing Axios
import axios from 'axios';

export class Users {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
    * Read Users
    * @returns {Promise<object>} Successful Response (HTTP 200)
    */
    readUsers = async () => {
        return await axios.get(this.baseUrl + '/users/1')
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }

    addUser = async (body) => {
        return await axios.post(this.baseUrl + '/users', body)
        .catch(function (error) {
            console.log(error);
        });
    }
}