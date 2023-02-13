import React from 'react'
import RoutineScreen from './RoutineScreen'
import RoutineBuilderScreen from './RoutineBuilderScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ExcerciseScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Routine" component={RoutineScreen} />
      <Tab.Screen name="Builder" component={RoutineBuilderScreen} />
    </Tab.Navigator>
  )
}

export default ExcerciseScreen;