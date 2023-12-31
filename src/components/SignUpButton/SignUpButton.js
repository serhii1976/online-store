import { Button } from './SignUpButton.styled';

const handleClick = () => {
  console.log('CLICK');
};

const SignUpButton = () => {
  return (
    <>
      <Button type="button" onClick={handleClick}>
        Зареєструватись
      </Button>
    </>
  );
};

export default SignUpButton;
