import React from 'react';
import {FlatList} from 'react-native';

import {useNewsContext, Article} from '@newsky/data/news';
import {ArticleCard} from './ArticleCard';

import {StyledSafeAreaView} from './styled';

export const ArticlesContainer = () => {
  const news = useNewsContext();

  if (news) {
    const renderItem = ({item}: {item: Article}) => (
      <ArticleCard article={item} />
    );

    // todo: might have to move the `SafeAreaView` higher
    return (
      <StyledSafeAreaView>
        <FlatList
          data={news.results}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.created_date}-${index}`}
        />
      </StyledSafeAreaView>
    );
  }

  // todo: add loading screen
  return null;
};
