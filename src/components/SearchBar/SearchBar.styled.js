import styled from 'styled-components';
import { device } from 'styles/device';
import { theme } from 'styles/theme';

export const SearchBox = styled.div`
  margin: 0 auto;
  padding-top: 12px;
  padding-bottom: 8px;

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

export const Form = styled.form`
  position: relative;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

export const IconSearch = styled.div`
  position: absolute;
  top: 50%;
  left: 46px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  color: #848484;

  font-family: ${theme.fonts.baseFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 100%;
  height: 44px;
  padding-left: 48px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
`;
