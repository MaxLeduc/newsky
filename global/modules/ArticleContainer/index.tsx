import React from 'react';
import {View, Text} from 'react-native';

import {useNewsContext, Article} from '@newsky/data/news';

export const ArticlesContainer = () => {
  const news = useNewsContext();

  if (news) {
    return (
      <View>
        {news.results.map((item: Article, key: number) => {
          return <Text key={`${item.created_date}-${key}`}>{item.title}</Text>;
        })}
      </View>
    );
  }

  return null;
};
