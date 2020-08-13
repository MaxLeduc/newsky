import {View, Text, Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '@newsky/constants';

export const Container = styled(View)`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  ${Platform.OS === 'web' && 'margin-bottom: 30px'};
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: white;
  font-weight: bold;
  font-style: italic;
  font-family: 'Cormorant Garamond';
`;
