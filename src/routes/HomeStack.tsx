/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
};

export const HomeStack = createStackNavigator<HomeStackParamList>();
