// Importing Axios
import axios from 'axios';


/**
* Read Users
* @returns {Promise<object>} Successful Response (HTTP 200)
*/

export const readUsers = async () => {
    return await axios.get('https://reqres.in/api/users/1')
        .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
        });
};

