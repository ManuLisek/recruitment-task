import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUsers } from '../slices/usersSlice';

const UsersComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
        </li>
      ))}
    </ul>
  );
};

export default UsersComponent;
