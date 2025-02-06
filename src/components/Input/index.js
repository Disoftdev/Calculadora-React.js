import { InputContainer } from './styles.js';

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
