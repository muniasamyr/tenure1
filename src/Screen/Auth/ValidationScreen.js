import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,Image,TouchableOpacity,Alert} from "react-native";
import { FONTS } from '../../Fonts/Fonts'
import SplashScreen from 'react-native-splash-screen';
import CodePush from 'react-native-code-push';
import {COLORS} from '../../Constant/Colors'
import { getData } from "../../Helper/StrorageHelper";
import { STORAGE_CONSTANT } from "../../Constant/Constant";


var { height, width } = Dimensions.get('window')
const ValidationScreen = (props) => {

  useEffect(async() => {
    SplashScreen.hide();
    syncImmediate() 
    let loged_in=await getData(STORAGE_CONSTANT.LOGED_IN)||null
    if(loged_in==='1'){
      props.navigation.navigate('LocationSelectionScreen');
    }else{
    props.navigation.navigate('LoginScreen');
    }
      });
     
      const syncImmediate=()=> {
        CodePush.sync(
          { installMode: CodePush.InstallMode.ON_NEXT_RESTART, updateDialog: true },
          codePushStatusDidChange.bind(this),
        );
      }
      const Restart=() =>{
        CodePush.restartApp();
      }
      const codePushStatusDidChange=(syncStatus) =>{
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log('CHECKING_FOR_UPDATE');
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log('DOWNLOADING_PACKAGE');
            break;
          case CodePush.SyncStatus.AWAITING_USER_ACTION:
            console.log('AWAITING_USER_ACTION');
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            console.log('INSTALLING_UPDATE');
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            console.log('UP_TO_DATE');
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            console.log('UPDATE_IGNORED');
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            console.log('UPDATE_INSTALLED');
            Alert.alert(
              '',
              'Update successfully installed, please restart now',
              [{ text: 'Restart', onPress: () => Restart() }],
              { cancelable: false },
            );
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            console.log('UNKNOWN_ERROR');
            break;
        }
      } 
  return <View style={styles.container}>
    
  </View>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
 
});

export default ValidationScreen;