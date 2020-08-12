import React from 'react';
import {Dimensions} from 'react-native';

import {useNewsContext, Article} from '@newsky/data/news';
import {ArticleCard} from '@newsky/components/ArticleCard';

import {Container} from './styled';

export const ArticlesContainer = () => {
  const news = useNewsContext();
  // todo: make this a utility function
  // todo: make this dynamic?
  const windowWidth = Dimensions.get('window').width;

  console.log(windowWidth);

  if (news) {
    return (
      <Container windowWidth={windowWidth}>
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
