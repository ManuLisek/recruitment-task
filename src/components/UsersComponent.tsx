import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUsers, setFilter } from '../slices/usersSlice';
import UserRowComponent from './UserRowComponent';
import styled from 'styled-components';
import { UserColumns } from '../types/userTypes';

const StyledThead = styled.thead`
  padding: 10px 0;
  color: #296986;
`;

const StyledTheadCell = styled.th`
  width: 220px;
`;

const StyledInput = styled.input`
  display: block;
  width: 150px;
  margin: 5px auto;
  padding: 5px;
  color: #a7a1ae;
  background-color: #1f2739;
  border: 2px solid #a7a1ae;

  &:focus {
    color: #296986;
    background-color: #2c3446;
    border: 2px solid #296986;
    outline: none;
  }
`;

const NoUserTableCell = styled.td`
  padding: 20px 0;
  text-align: center;
`;

const UsersComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  const { filteredUsers, filters } = useSelector(
    (state: RootState) => state.users,
  );

  const filteredUsersList =
    filteredUsers.length > 0 ? (
      filteredUsers.map((user) => (
        <UserRowComponent
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
        />
      ))
    ) : (
      <tr>
        <NoUserTableCell colSpan={4}>
          There is no user you are looking for
        </NoUserTableCell>
      </tr>
    );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setFilter({
        key: event.target.name as keyof UserColumns,
        value: event.target.value,
      }),
    );
  };

  return (
    <table>
      <StyledThead>
        <tr>
          <StyledTheadCell>
            Name
            <StyledInput
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Filter by name"
            />
          </StyledTheadCell>
          <StyledTheadCell>
            User name
            <StyledInput
              type="text"
              name="username"
              value={filters.username}
              onChange={handleFilterChange}
              placeholder="Filter by username"
            />
          </StyledTheadCell>
          <StyledTheadCell>
            Email
            <StyledInput
              type="text"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              placeholder="Filter by email"
            />
          </StyledTheadCell>
          <StyledTheadCell>
            Phone
            <StyledInput
              type="text"
              name="phone"
              value={filters.phone}
              onChange={handleFilterChange}
              placeholder="Filter by phone"
            />
          </StyledTheadCell>
        </tr>
      </StyledThead>
      <tbody>{filteredUsersList}</tbody>
    </table>
  );
};

export default UsersComponent;
