// useUser.js
import pactum from 'pactum';

export class Users {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
    * Read Users
    * @returns {Promise<object>} Successful Response (HTTP 200)
    */
    readUser = async (userId) => {
        const userResponse = await pactum.spec()
            .get(this.baseUrl + '/users/' + userId)
            .expectStatus(200);
        return userResponse;
    }

    addUser = async (body) => {
        const userResponse = await pactum.spec()
            .post(this.baseUrl + '/users').withBody(body)
            .expectStatus(201);
        return userResponse;

    }
}