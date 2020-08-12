import {View, Text, Image} from 'react-native';
import Styled from 'styled-components/native';

export const ArticleContainer = Styled(View)`
margin-top: 7px;
margin-bottom: 8px;
max-width: 300px;
background-color: #fafafa;
border-radius: 3px;
`;

export const ImageContainer = Styled(View)`
display: flex;
position: relative;
align-items: center;
`;

export const StyledImage = Styled(Image)`
border-top-left-radius: 3px;
border-top-right-radius: 3px;
height: 175px;
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
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
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
