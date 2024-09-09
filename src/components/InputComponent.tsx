import styled from 'styled-components';

const StyledInput = styled.input`
  display: inline-block;
  width: 150px;
  margin: 5px 25px;
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

interface Input {
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const InputComponent = ({
  type,
  name,
  value,
  onChange,
  placeholder,
}: Input) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
