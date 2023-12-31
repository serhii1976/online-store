import styled from 'styled-components';

import offerBg from '../../images/backGraund/OfferBg.jpg';
import { theme } from 'styles/theme';

const { fonts, fontColors } = theme;

export const OfferBox = styled.div`
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${offerBg});
  padding-top: 36px;
  padding-bottom: 36px;
`;
export const OfferText = styled.p`
  width: 262px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  color: ${fontColors.primary};
  font-family: ${fonts.baseFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const OfferButton = styled.div`
  text-align: center;
`;

export const WraperText = styled.div`
  margin: 0 auto;
  max-width: 310px;
  height: 80px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  filter: blur(20px);
`;
