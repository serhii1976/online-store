import styled from 'styled-components';

import { theme } from 'styles/theme';
import { device } from 'styles/device';

const { fonts, fontColors } = theme;

export const WraperSlider = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 80px;

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
export const TitleSlider = styled.h2`
  margin-bottom: 50px;
  color: ${fontColors.primary};
  font-family: ${fonts.baseFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ImageSlider = styled.img`
  width: 100%;
`;

export const TitleItem = styled.h3`
  color: #222;

  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SizeItem = styled.p`
  color: #9a9a9a;

  font-family: Lato;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
