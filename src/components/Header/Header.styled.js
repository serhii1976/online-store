import styled from 'styled-components';
import { theme } from 'styles/theme';
import { device } from 'styles/device';

const { backgrounds, fonts, fontColors } = theme;

export const HeaderBox = styled.header``;

export const Promotion = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${backgrounds.headerPromosion};
`;

export const PromotionText = styled.p`
  padding-top: 4px;
  padding-bottom: 7px;

  font-family: ${fonts.baseFont};
  color: ${fontColors.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeaderBody = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: end;
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

export const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const PageTitle = styled.h2`
  color: ${fontColors.primary};
  font-family: ${fonts.baseTitle};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const IconText = styled.p`
  color: ${fontColors.primary};
  font-family: ${fonts.baseFont};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const IconWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;
