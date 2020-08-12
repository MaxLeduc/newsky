import {View} from 'react-native';
import Styled from 'styled-components/native';

interface ContainerProps {
  windowWidth: number;
}

// todo: make the sizes constants
export const Container = Styled(View)<ContainerProps>`
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  align-items: center;

  ${({windowWidth}) =>
    windowWidth > 600 &&
    `
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;
