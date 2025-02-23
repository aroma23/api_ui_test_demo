// useUser.js
import pactum from 'pactum';

export const readUser = async (userData) => {
  const userResponse = await pactum.spec()
    .get('https://reqres.in/api/users/1')
    .expectStatus(200);
  return userResponse;
};
