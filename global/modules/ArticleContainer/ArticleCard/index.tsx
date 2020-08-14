import React from 'react';
import find from 'lodash/find';
import last from 'lodash/last';
import {format} from 'date-fns';
import {Pressable} from 'react-native';

import {Article} from '@newsky/data/news';
import {isMobile} from '@newsky/utilities';

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
  navigation: any;
}

export const ArticleCard = ({article, navigation}: prop) => {
  const {multimedia, title, abstract, section, published_date, uri} = article;
  const id = last(uri.split('/'));
  const {url} = find(multimedia, (img) => img.format === 'superJumbo') || {};

  return (
    <ArticleContainer isMobile={isMobile()}>
      <ImageContainer>
        <StyledImage source={{uri: url}} />
        <SectionBackground />
        <SectionText text={section.toUpperCase()} />
      </ImageContainer>
      <MainContentContainer>
        <StyledDate
          text={format(new Date(published_date), 'MMMM do, yyyy')}
          isHeader
        />
        <Pressable onPress={() => navigation.push('Article', {id})}>
          <Title text={title} isHeader />
        </Pressable>
        {Boolean(abstract) && <Abstract text={abstract} />}
      </MainContentContainer>
    </ArticleContainer>
  );
};
