import React from 'react';

import {useNewsContext, Article} from '@newsky/data/news';
import {ArticleCard} from '@newsky/components/ArticleCard';

import {Container} from './styled';

export const ArticlesContainer = () => {
  const news = useNewsContext();

  if (news) {
    return (
      <Container>
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
