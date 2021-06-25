import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createTabNavigator, TabNavigator, SafeAreaView, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screen/Auth/Login'
import ReviewScreen from '../Screen/Home/Review';
import SucesScreen from '../Screen/Home/Sucess'
import LocationSelectionScreen from '../Screen/Home/LocationSelectionScreen'
import { Dimensions, View, Image, Text, Platform, Alert } from 'react-native';
import ValidationScreen from '../Screen/Auth/ValidationScreen'
import Header from './Header'
import { FONTS } from '../Fonts/Fonts';


const HomeStack = createStackNavigator({

  
  LocationSelectionScreen: {
    screen: LocationSelectionScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  ReviewScreen: {
    screen: ReviewScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={2} />
      };
    },
  },
  SucesScreen: {
    screen: SucesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={2} />
      };
    },
  },

  
  
  

});

const AuthStack = createStackNavigator({


  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },

});




const AppRouter = createSwitchNavigator(

  {

    "ValidationScreen":ValidationScreen,
     "AuthStack":AuthStack,
    "HomeStack":HomeStack,
    "initial":ValidationScreen ,

    
  },
  {
    initialRouteName: 'initial',
  },

);

export default createAppContainer(AppRouter);
