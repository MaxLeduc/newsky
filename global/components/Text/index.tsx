import React from 'react';
import {Text as TextComponent, Platform} from 'react-native';
import styled from 'styled-components/native';

interface props {
  text: string;
  style?: {[key: string]: string};
  isHeader?: boolean;
}

export const StyledText = styled(TextComponent)<{
  isHeader?: boolean;
}>`
  font-family: ${({isHeader}) => (isHeader ? 'Lato' : 'Sans-Serif')};
`;

export const Text = ({text, style, isHeader}: props) => {
  return (
    <StyledText style={style} isHeader={isHeader}>
      {text}
    </StyledText>
  );
};
