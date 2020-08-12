import {View, SafeAreaView, StatusBar} from 'react-native';
import Styled from 'styled-components/native';

interface ContainerProps {
  isMobile: boolean;
}

export const WebContainer = Styled(View)<ContainerProps>`
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  align-items: center;

  ${({isMobile}) =>
    !isMobile &&
    `
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

export const StyledSafeAreaView = Styled(SafeAreaView)`
  align-items: center;
  marginTop: ${StatusBar.currentHeight || 0}px;
`;
