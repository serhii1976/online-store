import styled from 'styled-components';
import { theme } from 'styles/theme';
import { device } from 'styles/device';

const { fonts, fontColors } = theme;

export const FooterBox = styled.div`
  background: linear-gradient(180deg, #fff 10.21%, #b2b0f7 100%);

  padding-top: 80px;
  padding-bottom: 30px;
`;

export const FooterContent = styled.div`
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

export const FooterTitle = styled.h3`
  color: ${fontColors.primary};
  margin-bottom: 50px;

  font-family: ${fonts.baseFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PhoneLink = styled.a`
  color: ${fontColors.primary};

  font-family: ${fonts.contactFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FooterText = styled.p`
  margin-top: 8px;
  color: ${fontColors.primary};

  font-family: ${fonts.contactFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FooterTextLink = styled.a`
  color: ${fontColors.primary};
  font-family: ${fonts.contactFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export const FooterLogo = styled.h2`
  display: block;

  margin-top: 85px;
  text-align: center;
  color: ${fontColors.primary};
  font-family: ${fonts.baseTitle};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
