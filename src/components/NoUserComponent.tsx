import styled from 'styled-components';

const StyledNoUserTableCell = styled.td`
  padding: 20px 0;
  text-align: center;
`;

const NoUserComponent = () => {
  return (
    <tr>
      <StyledNoUserTableCell colSpan={4}>
        There is no user you are looking for
      </StyledNoUserTableCell>
    </tr>
  );
};

export default NoUserComponent;
