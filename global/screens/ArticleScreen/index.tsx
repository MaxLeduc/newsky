import React from 'react';
import {WebView} from 'react-native-webview';
import find from 'lodash/find';
import {StyleSheet, Platform} from 'react-native';

import {useNewsContext, NewsPayload} from '@newsky/data/news';
import {Header} from '@newsky/components/Header';

interface ArticleScreenProps {
  route: {
    params: {
      id: string;
    };
  };
}

const getArticleById = (news: NewsPayload | null, id: string) => {
  if (news) {
    return find(news.results, ({uri}) => uri.includes(id));
  }

  return null;
};

const ArticleScreen = ({route}: ArticleScreenProps) => {
  const {params} = route;
  const news = useNewsContext();
  const currentArticle = getArticleById(news, params.id);
  const isWeb = Platform.OS === 'web';

  if (currentArticle) {
    return (
      <>
        {isWeb && <Header />}
        <WebView
          style={isWeb && styles.webview}
          source={{uri: currentArticle.url}}
        />
      </>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  webview: {
    height: '100vh',
  },
});

export default ArticleScreen;
