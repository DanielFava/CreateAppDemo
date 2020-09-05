import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeRoutes from './app.routes';
import 'react-native-gesture-handler';
import '../configs/Status_Bar';

export default function Routes() {
  return(
    <NavigationContainer>
      <HomeRoutes />
    </NavigationContainer>
  )
}
