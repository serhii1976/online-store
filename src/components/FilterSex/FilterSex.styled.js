import styled from 'styled-components';
import { theme } from 'styles/theme';

const { fonts, fontColors } = theme;

export const WraperFilter = styled.div`
  padding-bottom: 5px;
`;
export const ButtonFilter = styled.button`
  width: 75px;
  padding-top: 4px;
  padding-bottom: 5px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #d9d9d9;

  color: ${fontColors.primary};
  font-family: '${fonts.contactFont}';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
`;
export const ListFilter = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const ItemFilter = styled.li``;
