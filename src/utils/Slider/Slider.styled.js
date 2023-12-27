import styled from 'styled-components';

import { theme } from 'styles/theme';

const { fonts, fontColors } = theme;

export const ImageSlider = styled.img`
  width: 100%;
`;

export const TitleItem = styled.h3`
  color: ${fontColors.primary};

  font-family: ${fonts.baseFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SizeItem = styled.p`
  color: ${fontColors.secondary};

  font-family: ${fonts.baseFont};
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
