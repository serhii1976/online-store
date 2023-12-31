import SignUpButton from 'components/SignUpButton/SignUpButton';
import { OfferBox, OfferText, OfferButton, WraperText } from './Offer.styled';

const Offer = () => {
  return (
    <OfferBox>
      <WraperText />
      <OfferText>
        Знижка 10% на перше замовлення,
        <br /> зареєстрованим користувачам.
      </OfferText>
      <OfferButton>
        <SignUpButton />
      </OfferButton>
    </OfferBox>
  );
};

export default Offer;
