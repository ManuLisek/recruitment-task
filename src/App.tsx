import UsersComponent from './components/UsersComponent';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <UsersComponent />
    </StyledApp>
  );
};

export default App;
