import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import PostListing from '../screens/PostListing';
import JsonDetails from '../screens/JsonDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="PostListing"
          component={PostListing}
          options={{
            title: 'Task',
          }}
        />
        <Stack.Screen
          name="JsonDetails"
          component={JsonDetails}
          options={{
            title: 'JSON',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
