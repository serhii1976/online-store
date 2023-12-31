import styled from 'styled-components';

import { theme } from 'styles/theme';

const { fonts, fontColors } = theme;

export const ImageSlider = styled.img`
  width: 100%;
  margin-bottom: 6px;
`;

export const TitleItem = styled.h3`
  margin-bottom: 2px;
  color: ${fontColors.primary};

  font-family: ${fonts.baseFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SizeItem = styled.p`
  margin-bottom: 12px;
  color: ${fontColors.secondary};

  font-family: ${fonts.baseFont};
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ColorList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;
export const ColorItem = styled.li`
  width: 10px;
  height: 10px;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: ${fontColors.primary};

  font-family: ${fonts.baseFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
