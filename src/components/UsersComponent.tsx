import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUsers, setFilter } from '../slices/usersSlice';
import styled from 'styled-components';
import { UserColumns } from '../types/userTypes';
import UserRowComponent from './UserRowComponent';
import InputComponent from './InputComponent';
import NoUserComponent from './NoUserComponent';

const StyledTableWrapper = styled.div`
  width: 900px;
  overflow-x: auto;

  @media (max-width: 900px) {
    width: 90%;
  }

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #296986;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e1e1e1;
  }

  scrollbar-width: thin;
  scrollbar-color: #296986 #e1e1e1;
`;

const StyledTable = styled.table`
  width: 900px;
`;

const StyledThead = styled.thead`
  padding: 10px 0;
  color: #296986;
`;

const StyledTheadCell = styled.th`
  width: 222px;
`;

const StyledFrozenTheadCell = styled(StyledTheadCell)`
  @media (min-width: 440px) and (max-width: 900px) {
    position: sticky;
    left: 0;
    background-color: #1f2739;
  }
`;

const StyledAuthor = styled.p`
  position: absolute;
  top: 650px;
  color: #296986;
`;

const StyledLink = styled.a`
  color: inherit;
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
      <NoUserComponent />
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
    <>
      <StyledTableWrapper>
        <StyledTable>
          <StyledThead>
            <tr>
              <StyledFrozenTheadCell>
                Name
                <InputComponent
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  placeholder="Filter by name"
                />
              </StyledFrozenTheadCell>
              <StyledTheadCell>
                User name
                <InputComponent
                  type="text"
                  name="username"
                  value={filters.username}
                  onChange={handleFilterChange}
                  placeholder="Filter by username"
                />
              </StyledTheadCell>
              <StyledTheadCell>
                Email
                <InputComponent
                  type="text"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                  placeholder="Filter by email"
                />
              </StyledTheadCell>
              <StyledTheadCell>
                Phone
                <InputComponent
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
        </StyledTable>
      </StyledTableWrapper>
      <StyledAuthor>
        Created by{' '}
        <StyledLink href="https://github.com/ManuLisek" target="_blank">
          Michał Lisowiec
        </StyledLink>
      </StyledAuthor>
    </>
  );
};

export default UsersComponent;
