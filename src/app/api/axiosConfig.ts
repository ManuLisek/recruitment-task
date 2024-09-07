import axios from 'axios';
import { User } from '../../types/userTypes';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default {
  getUsersData: () =>
    instance({
      method: 'GET',
      url: '/users',
      transformResponse: [
        (response): User[] => {
          const parsedResponse = JSON.parse(response);
          const transformedUsers: User[] = parsedResponse.map((user: User) => ({
            key: user.id,
            id: user.id,
            name: user.name,
            userName: user.username,
            email: user.email,
            phone: user.phone,
          }));

          return transformedUsers;
        },
      ],
    }),
};
