import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NewsProvider} from '@newsky/data/news';
import {ArticleContainer} from '@newsky/modules/ArticleContainer';
import {BackButton} from '@newsky/components/BackButton';
import {colors} from '@newsky/constants';
import ArticleScreen from '@newsky/screens/ArticleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={ArticleContainer}
            options={{
              title: 'The Newsky',
              headerStyle: {backgroundColor: colors.primary},
              headerTintColor: 'white',
              headerTitleStyle: {
                alignSelf: 'center',
              },
            }}
          />
          <Stack.Screen
            name={'Article'}
            component={ArticleScreen}
            options={{
              headerStyle: {backgroundColor: colors.primary},
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
