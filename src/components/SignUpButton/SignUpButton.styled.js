import styled from 'styled-components';
import { theme } from 'styles/theme';

const { fonts, fontColors, backgrounds } = theme;

export const Button = styled.button`
  padding: 15px 28px;
  background-color: ${backgrounds.buttonPrimary};
  border: none;
  border-radius: 10px;

  color: ${fontColors.primary};
  font-family: ${fonts.buttonFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
