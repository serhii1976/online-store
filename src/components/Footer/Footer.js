import { NavLink } from 'react-router-dom';
import {
  FooterBox,
  FooterContent,
  FooterTitle,
  PhoneLink,
  FooterText,
  FooterTextLink,
  FooterLogo,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <FooterContent>
        <FooterTitle>Наші контакти</FooterTitle>
        <p>
          <PhoneLink href="tel:+3809833554752">+380 98 335 547 52</PhoneLink>
        </p>
        <FooterText>
          Ви можете{' '}
          <FooterTextLink href="tel:+3809833554752">
            зателефонувати
          </FooterTextLink>{' '}
          нам:
        </FooterText>
        <FooterText>Щоденно з 9.00 до 20:00</FooterText>
        <FooterText style={{ textDecorationLine: 'underline' }}>
          Замовити зворотний дзвінок
        </FooterText>
        <FooterText>Про доставку</FooterText>
        <FooterText>Способи оплати</FooterText>
        <NavLink to="/">
          <FooterLogo>BORSA</FooterLogo>
        </NavLink>
      </FooterContent>
    </FooterBox>
  );
};

export default Footer;
