import {Dimensions} from 'react-native';

export const breakpoints = {
  mobile: 600,
};

export const isMobile = (): boolean => {
  // todo: make this dynamic
  return Dimensions.get('window').width <= 600;
};
