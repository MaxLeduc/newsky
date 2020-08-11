import React from 'react';
import {View} from 'react-native';

import {NewsProvider} from '@newsky/data/news';
import {ArticlesContainer} from '@newsky/modules/ArticleContainer';

const App = () => {
  return (
    <View>
      <NewsProvider>
        <ArticlesContainer />
      </NewsProvider>
    </View>
  );
};

export default App;
