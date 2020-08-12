import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  isMobile: boolean;
}

export const WebContainer = styled(View)<ContainerProps>`
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
    align-items: stretch;
  `}
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  align-items: center;
`;
