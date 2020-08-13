import React from 'react';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NewsProvider} from '@newsky/data/news';
import {ArticlesContainer} from '@newsky/modules/ArticleContainer';
import {BackButton} from '@newsky/components/BackButton';

const Stack = createStackNavigator();

interface ArticleScreenProps {
  route: {
    params: {
      article_url: string;
    };
  };
}

const Article = ({route}: ArticleScreenProps) => {
  const {params} = route;
  return <WebView source={{uri: params.article_url}} />;
};

const App = () => {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={ArticlesContainer}
            options={{
              title: 'Newsky',
              headerStyle: {backgroundColor: '#3a7ebf'},
              headerTintColor: 'white',
              headerTitleStyle: {
                alignSelf: 'center',
              },
            }}
          />
          <Stack.Screen
            name={'Article'}
            component={Article}
            options={{
              headerStyle: {backgroundColor: '#3a7ebf'},
              headerTintColor: 'white',
              headerLeft: ({onPress}) => <BackButton onPress={onPress} />,
              headerTitle: 'Article Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;
