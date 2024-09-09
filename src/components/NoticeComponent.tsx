import styled from 'styled-components';

const StyledNotice = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #296986;
`;

interface Notice {
  children: string;
}

const NoticeComponent = ({ children }: Notice) => {
  return <StyledNotice>{children}</StyledNotice>;
};

export default NoticeComponent;
