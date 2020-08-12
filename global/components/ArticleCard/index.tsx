import React from 'react';
import find from 'lodash/find';
import {format} from 'date-fns';

import {Article} from '@newsky/data/news';

import {
  ArticleContainer,
  ImageContainer,
  StyledImage,
  SectionBackground,
  SectionText,
  MainContentContainer,
  StyledDate,
  Title,
  Abstract,
} from './styled';

interface prop {
  article: Article;
}

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
        <StyledDate>
          {format(new Date(published_date), 'MMMM do, yyyy')}
        </StyledDate>
        <Title>{title}</Title>
        {Boolean(abstract) && <Abstract>{abstract}</Abstract>}
      </MainContentContainer>
    </ArticleContainer>
  );
};
