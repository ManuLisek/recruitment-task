import styled from 'styled-components';

const StyledCell = styled.td`
  padding: 10px;
  width: 222px;

  &:hover {
    background-color: #575b63;
  }
`;

interface Cell {
  children: string;
  className?: string;
}
const CellComponent = ({ children, className }: Cell) => {
  return <StyledCell className={className}>{children}</StyledCell>;
};

export default CellComponent;
