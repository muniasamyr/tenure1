import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, SafeAreaView, Platform, ImageBackground,Image, TouchableOpacity } from "react-native";
var { height, width } = Dimensions.get('window')
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ProgressBar } from 'react-native-paper';
import { clearAll } from "../Helper/StrorageHelper";
import { FONTS } from '../Fonts/Fonts'
const Header = (props) => {
    const dologout = () => {
        clearAll();
        props.navigationProps.navigate('LoginScreen')
    }
    return props.type===0?<SafeAreaView style={{ height: height / 100 * 9, backgroundColor: '#E5E5E5', paddingLeft: 10, paddingVertical: 10, flexDirection: 'row' }}>
    <View style={{ flex: 0.4 }}>
   
    </View>
</SafeAreaView>:<SafeAreaView style={{ height: height / 100 * 9, backgroundColor: '#f9e6fa', paddingLeft: 10, paddingVertical: 10, flexDirection: 'row' }}>

         

<TouchableOpacity onPress={()=>props.navigationProps.pop()} style={{ flex: 0.4 ,alignSelf:'center',alignItems:'flex-start',marginLeft:10}}>
            <MaterialIcons name='keyboard-arrow-left' size={40}/>
        </TouchableOpacity>
      
        <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 30, fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold',color:'#3D39F3' }}>Tenure</Text>
        </View>
        <TouchableOpacity onPress={()=>dologout()} style={{ flex: 0.4 ,alignSelf:'center',alignItems:'flex-end',marginRight:10}}>
            <AntDesign name='logout' size={30} color='#D40033'/>
        </TouchableOpacity>
   
      
           
           
         
    </SafeAreaView>
};
const styles = StyleSheet.create({
    text: {  fontSize: 30}
});
export default Header;