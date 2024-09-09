import UsersComponent from './components/UsersComponent';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin-top: 50px;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>Users list</StyledHeader>
      <UsersComponent />
    </StyledApp>
  );
};

export default App;
