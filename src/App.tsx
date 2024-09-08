import UsersComponent from './components/UsersComponent';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const App = () => {
  return (
    <StyledApp>
      <UsersComponent />
    </StyledApp>
  );
};

export default App;
