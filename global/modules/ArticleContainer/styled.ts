import {View} from 'react-native';
import Styled from 'styled-components/native';

interface ContainerProps {
  isMobile: boolean;
}

export const Container = Styled(View)<ContainerProps>`
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
