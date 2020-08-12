import React from 'react';
import {Dimensions} from 'react-native';

import {useNewsContext, Article} from '@newsky/data/news';
import {ArticleCard} from '@newsky/components/ArticleCard';
import {isMobile} from '@newsky/utilities';

import {Container} from './styled';

export const ArticlesContainer = () => {
  const news = useNewsContext();

  console.log(isMobile());

  if (news) {
    return (
      <Container isMobile={isMobile()}>
        {news.results.map((item: Article, key: number) => {
          return (
            <ArticleCard article={item} key={`${item.created_date}-${key}`} />
          );
        })}
      </Container>
    );
  }

  return null;
};
