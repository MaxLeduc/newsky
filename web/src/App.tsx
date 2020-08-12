import React from 'react';
import {View} from 'react-native';

import {NewsProvider} from '@newsky/data/news';
import {ArticlesContainer} from '@newsky/modules/ArticleContainer';
import {Header} from '@newsky/components/Header';

const App = () => {
  return (
    <View>
      <NewsProvider>
        <Header />
        <ArticlesContainer />
      </NewsProvider>
    </View>
  );
};

export default App;
