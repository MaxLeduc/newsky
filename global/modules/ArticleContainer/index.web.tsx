import React from 'react';

import {useNewsContext, Article} from '@newsky/data/news';
import {ArticleCard} from './ArticleCard';
import {isMobile} from '@newsky/utilities';

import {WebContainer} from './styled';

interface props {
  navigation: any;
}

export const ArticleContainer = ({navigation}: props) => {
  const news = useNewsContext();

  if (news) {
    return (
      <WebContainer isMobile={isMobile()}>
        {news.results.map((item: Article, key: number) => {
          return (
            <ArticleCard
              article={item}
              navigation={navigation}
              key={`${item.created_date}-${key}`}
            />
          );
        })}
      </WebContainer>
    );
  }

  // todo: add loading screen
  return null;
};
