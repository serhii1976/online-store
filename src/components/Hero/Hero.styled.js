import styled from 'styled-components';
import heroBg from '../../images/backGraund/heroBg.jpg';
import { theme } from 'styles/theme';
import { device } from 'styles/device';

const { fonts, fontColors } = theme;

export const HeroContainer = styled.div`
  padding-top: 180px;
  padding-bottom: 20px;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const OfferWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media ${device.mobile} {
    max-width: 390px;
  }
  @media ${device.mobileTablet} {
    max-width: 480px;
  }
  @media ${device.tablet} {
    max-width: 768px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
  }
`;

export const HeroOffer = styled.div`
  margin-bottom: 20px;
`;

export const OfferText = styled.p`
  color: ${fontColors.textHero};
  text-shadow: 1px 1px 1px #000;

  font-family: ${fonts.baseFont};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const OfferProcent = styled.p`
  color: ${fontColors.textHero};
  text-shadow: 1px 1px 1px #000;

  font-family: ${fonts.baseFont};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
