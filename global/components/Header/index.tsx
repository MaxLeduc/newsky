import React from 'react';
import {Pressable} from 'react-native';

import {Container, Title} from './styled';

interface props {
  navigation?: any;
}

export const Header = ({navigation}: props) => {
  return (
    <Container>
      <Pressable onPress={() => navigation && navigation.navigate('Home')}>
        <Title isLink={Boolean(navigation)}>The Newsky</Title>
      </Pressable>
    </Container>
  );
};
