import React from 'react';
import {View, Text, Image} from 'react-native';
import Styled from 'styled-components/native';
import find from 'lodash/find';
import dateFormat from 'dateFormat';

import {Article} from '@newsky/data/news';

interface prop {
  article: Article;
}

export const ArticleContainer = Styled(View)`
  margin-top: 7pt;
  margin-bottom: 8pt;
  max-width: 200pt;
  background-color: #fafafa;
  border-radius: 3pt;
`;

export const ImageContainer = Styled(View)`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledImage = Styled(Image)`
  height: 100pt;
  width: 100%;
  border-top-left-radius: 3pt;
  border-top-right-radius: 3pt;
`;

const sectionSharedStyles = `
  position: absolute;
  bottom: 0;
  left: 0;
  height: 25pt;
  width: 50pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionBackground = Styled(View)`
  ${sectionSharedStyles}
  background-color: #fafafa;
  opacity: 0.8;
`;

export const SectionText = Styled(View)`
  ${sectionSharedStyles}
  line-height: 0;
`;

export const MainContentContainer = Styled(View)`
  padding: 10pt;
`;

export const StyledDate = Styled(Text)`
  font-size: 10pt;
  font-weight: bold;
  margin-bottom: 4pt;
`;

export const Title = Styled(Text)`
  font-size: 13pt;
  margin-bottom: 4pt;
`;

export const Abstract = Styled(Text)`
  font-style: italic;
  font-size: 10pt
`;

export const ArticleCard = ({article}: prop) => {
  const {multimedia, title, abstract, section, published_date} = article;
  const {url} = find(multimedia, (img) => img.format === 'superJumbo') || {};

  // todo: add some linking to the article.
  return (
    <ArticleContainer>
      <ImageContainer>
        <StyledImage source={{uri: url}} />
        <SectionBackground />
        <SectionText>{section.toUpperCase()}</SectionText>
      </ImageContainer>
      <MainContentContainer>
        <StyledDate>{dateFormat(published_date, 'mmmm d, yyyy')}</StyledDate>
        <Title>{title}</Title>
        {Boolean(abstract) && <Abstract>{abstract}</Abstract>}
      </MainContentContainer>
    </ArticleContainer>
  );
};
