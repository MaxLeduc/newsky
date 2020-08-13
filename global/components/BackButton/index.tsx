import React from 'react';

import {BackButtonContainer, StyledImage} from './styled';

interface props {
  onPress?: () => void;
}

export const BackButton = ({onPress}: props) => {
  return (
    <BackButtonContainer onPress={onPress}>
      <StyledImage source={require('./assets/left-arrow.png')} />
    </BackButtonContainer>
  );
};
