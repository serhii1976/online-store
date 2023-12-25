import { Button } from 'components/SignUpButton/SignUpButton.styled';
import {
  HeroContainer,
  OfferWraper,
  HeroOffer,
  OfferText,
  OfferProcent,
} from './Hero.styled';

const Hero = () => {
  const handleClick = () => {
    console.log('CLICK');
  };
  return (
    <HeroContainer>
      <OfferWraper>
        <HeroOffer>
          <OfferText>
            Знижка на перше <br /> замовлення
          </OfferText>
          <OfferProcent>-10%</OfferProcent>
          <OfferText>
            зареєстрованим <br /> користувачам.
          </OfferText>
        </HeroOffer>
        <Button onClick={handleClick}>Зареєструватись</Button>
      </OfferWraper>
    </HeroContainer>
  );
};

export default Hero;
