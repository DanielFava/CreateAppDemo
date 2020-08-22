import React from 'react';
import '../configs/Status_Bar';
import {NavigationContainer} from '@react-navigation/native';
import HomeRoutes from './App.Routes';

export default function Routes() {
  return(
    <NavigationContainer>
      <HomeRoutes />
    </NavigationContainer>
  )
}
