import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUsers } from '../slices/usersSlice';
import UserRowComponent from './UserRowComponent';
import styled from 'styled-components';

const StyledThead = styled.thead`
  padding: 10px 0;
  color: #185875;
`;

const UsersComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <table>
      <StyledThead>
        <tr>
          <th>Name</th>
          <th>User name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </StyledThead>
      <tbody>
        {users.map((user) => (
          <UserRowComponent
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersComponent;
