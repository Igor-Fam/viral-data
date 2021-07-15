import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SIR from './pages/SIR';
import SIRO from './pages/SIRO';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="SIR" component={SIR} />
        <AppStack.Screen name="SIRO" component={SIRO} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;