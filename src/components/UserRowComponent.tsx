import { User } from '../types/userTypes';
import styled from 'styled-components';

const StyledUser = styled.tr`
  margin-top: 5px;

  &:nth-child(odd) {
    background-color: #323c50;
  }

  &:nth-child(even) {
    background-color: #2c3446;
  }

  &:hover {
    background-color: #464a52;
  }
`;

const StyledCell = styled.td`
  padding: 10px;
`;

const StyledNameCell = styled(StyledCell)`
  color: #fb667a;
`;

const UserRowComponent = ({ id, name, username, email, phone }: User) => {
  return (
    <StyledUser key={id}>
      <StyledNameCell>{name}</StyledNameCell>
      <StyledCell>{username}</StyledCell>
      <StyledCell>{email}</StyledCell>
      <StyledCell>{phone}</StyledCell>
    </StyledUser>
  );
};

export default UserRowComponent;
