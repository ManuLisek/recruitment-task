import { User } from '../types/userTypes';
import styled from 'styled-components';
import CellComponent from './CellComponent';

const StyledUser = styled.tr`
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

const StyledNameCell = styled(CellComponent)`
  color: #fb667a;

  @media (min-width: 440px) and (max-width: 890px) {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: inherit;
    border-right: 1px solid #1f2739;
  }
`;

const UserRowComponent = ({ id, name, username, email, phone }: User) => {
  return (
    <StyledUser key={id}>
      <StyledNameCell>{name}</StyledNameCell>
      <CellComponent>{username}</CellComponent>
      <CellComponent>{email}</CellComponent>
      <CellComponent>{phone}</CellComponent>
    </StyledUser>
  );
};

export default UserRowComponent;
