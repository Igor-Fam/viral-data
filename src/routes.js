import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SIR from './pages/SIR';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="SIR" component={SIR} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;