import React from 'react';
import {FlatList, Platform} from 'react-native';

import {useNewsContext, Article, NewsPayload} from '@newsky/data/news';
import {ArticleCard} from '@newsky/components/ArticleCard';
import {isMobile} from '@newsky/utilities';

import {WebContainer, StyledSafeAreaView} from './styled';

const getMobileList = (news: NewsPayload) => {
  const renderItem = ({item}: {item: Article}) => (
    <ArticleCard article={item} />
  );

  return (
    <StyledSafeAreaView>
      <FlatList
        data={news.results}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.created_date}-${index}`}
      />
    </StyledSafeAreaView>
  );
};

const getWebList = (news: NewsPayload) => {
  return (
    <WebContainer isMobile={isMobile()}>
      {news.results.map((item: Article, key: number) => {
        return (
          <ArticleCard article={item} key={`${item.created_date}-${key}`} />
        );
      })}
    </WebContainer>
  );
};

export const ArticlesContainer = () => {
  const news = useNewsContext();

  if (news) {
    const getNewsList = Platform.select({
      web: getWebList,
      android: getMobileList,
    });

    return getNewsList && getNewsList(news);
  }

  // todo: add loading screen
  return null;
};
