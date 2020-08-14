import {View, Text} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '@newsky/constants';

export const Container = styled(View)`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  padding-left: 30px;
`;

export const Title = styled(Text)<{
  isLink: boolean;
}>`
  font-size: 30px;
  color: white;
  font-weight: bold;
  font-style: italic;
  font-family: 'Cormorant Garamond';
  ${({isLink}) => isLink && 'cursor: pointer'};
`;
