import {View, Image, Platform} from 'react-native';
import styled from 'styled-components/native';

import {Text} from '@newsky/components/Text';

interface ArticleContainerProps {
  isMobile: boolean;
}

export const ArticleContainer = styled(View)<ArticleContainerProps>`
  margin-bottom: 30px;
  background-color: #f8f8f8;
  border-radius: 3px;

  ${({isMobile}) =>
    !isMobile &&
    `
    max-width: 300px;
  `}

  ${Platform.OS === 'web' && 'box-shadow: 1px 1px 4px #e0e0e0;'}
`;

export const ImageContainer = styled(View)`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: ${Platform.OS === 'web' ? '200px' : '250px'};
  width: 100%;
`;

const sectionSharedStyles = `
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 50px;
`;

export const SectionBackground = styled(View)`
  ${sectionSharedStyles}
  background-color: #fafafa;
  opacity: 0.8;
`;

export const SectionText = styled(Text)`
  ${sectionSharedStyles}
  line-height: 0;
`;

export const MainContentContainer = styled(View)`
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 20px;
`;

export const StyledDate = styled(Text)`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 7px;
`;

export const Title = styled(Text)`
  margin-bottom: 7px;
  font-size: 25px;
`;

export const Abstract = styled(Text)`
  font-size: 17px;
  font-style: italic;
  font-weight: 300;
  color: #585858;
`;
