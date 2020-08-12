import {View, Text, Image, Platform} from 'react-native';
import Styled from 'styled-components/native';

interface ArticleContainerProps {
  isMobile: boolean;
}

export const ArticleContainer = Styled(View)<ArticleContainerProps>`
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

export const ImageContainer = Styled(View)`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledImage = Styled(Image)`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: ${Platform.OS === 'web' ? '175px' : '250px'};
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

export const SectionBackground = Styled(View)`
${sectionSharedStyles}
  background-color: #fafafa;
  opacity: 0.8;
`;

export const SectionText = Styled(Text)`
${sectionSharedStyles}
  line-height: 0;
`;

export const MainContentContainer = Styled(View)`
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 20px;
`;

export const StyledDate = Styled(Text)`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 7px;
`;

export const Title = Styled(Text)`
  margin-bottom: 7px;
  font-size: 25px;
`;

export const Abstract = Styled(Text)`
  font-size: 17px;
  font-style: italic;
`;
