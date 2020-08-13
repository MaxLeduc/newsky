import React from 'react';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NewsProvider} from '@newsky/data/news';
import {ArticleContainer} from '@newsky/modules/ArticleContainer';
import {Header} from '@newsky/components/Header';
import ArticleScreen from '@newsky/screens/ArticleScreen';

const Stack = createStackNavigator();

const linking: LinkingOptions = {
  prefixes: [],
  config: {
    screens: {
      Home: '/',
      Article: {
        path: '/article/:id',
      },
      NoMatch: '*',
    },
  },
};

interface props {
  navigation: any;
}

const Home = ({navigation}: props) => {
  return (
    <>
      <Header />
      <ArticleContainer navigation={navigation} />
    </>
  );
};

const App = () => {
  return (
    <NewsProvider>
      <NavigationContainer linking={linking} fallback={Home}>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'Article'}
            component={ArticleScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;
