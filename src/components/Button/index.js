import { ButtonContainer } from './styles.js';

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
