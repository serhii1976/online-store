import { useNavigate } from 'react-router-dom';
import { Button } from './SignUpButton.styled';

const SignUpButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signUp');
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        Зареєструватись
      </Button>
    </>
  );
};

export default SignUpButton;
