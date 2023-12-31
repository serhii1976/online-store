// import { Button } from 'components/SignUpButton/SignUpButton.styled';
import SignUpButton from 'components/SignUpButton/SignUpButton';
import {
  HeroContainer,
  OfferWraper,
  HeroOffer,
  OfferText,
  OfferProcent,
} from './Hero.styled';

const Hero = () => {
  // const handleClick = () => {
  //   console.log('CLICK');
  // };
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
        <SignUpButton />
      </OfferWraper>
    </HeroContainer>
  );
};

export default Hero;
