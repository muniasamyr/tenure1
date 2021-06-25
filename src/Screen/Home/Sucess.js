
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,Image} from "react-native";
import { FONTS } from '../../Fonts/Fonts'
import { STORAGE_CONSTANT } from '../../Constant/Constant'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {COLORS} from '../../Constant/Colors'
import LinearGradient from 'react-native-linear-gradient';
import { getData } from "../../Helper/StrorageHelper";

var { height, width } = Dimensions.get('window')
import EmailSender from 'react-native-smtp'
const SucesScreen = (props) => {
 
  useEffect(async() => {
    let email=await getData(STORAGE_CONSTANT.EMAIL)||'muniasamyrama@gmail.com'
    let name=await getData(STORAGE_CONSTANT.NAME)|| 'USER'
    EmailSender.config({
      host: 'smtp.gmail.com',
      port: "587", // Optional. Default to 465
      username: 'rmuniasamy392@gmail.com',
      password: 'jeyakumarr',
      isAuth: 'true', // Optional. Default to `true`
      tls: 'true' // Optional. Default to `true`
    });
    EmailSender.send(
      {
        from: 'rmuniasamy392@gmail.com',
        to: email,
        subject: 'tenure App',
        body: `<h3>Hi ${name}</h3><p>your tenure registered sucessfully...</p>`,
        // replyTo: 'muniasamyrama@gmail.com' // Optional
      },
      [], // This second parameter is mandatory. You can send an empty array.
    );
  });
  return <View style={styles.container}>
    
    <LinearGradient   colors={['#efebf5', '#f2e9f0']} style={{flex:1}}>
    <View style={{flexDirection:'row'}}> 
    <View style={{flexDirection:'column',flex:0.7}}>
    <Text style={{fontSize:20,marginLeft:20,marginTop:20,textAlign:'auto',fontWeight:'400'}}>You’ve chose to watch unlimited movies</Text> 
    </View>
  
    <View style={{flexDirection:'column',flex:0.15,backgroundColor:'#c4c0c3',borderRadius:80,marginTop:20}}>
    <MaterialIcons name='keyboard-arrow-down' color='#000000' size={30}  style={{alignSelf:'center',marginTop:10}}/>
    </View>
    </View>
      <View style={{flexDirection:'row',marginTop:10}}>  
      <View style={{flexDirection:'column',flex:0.25}}>
          <Text style={{fontSize:18,marginLeft:20,textAlign:'auto',fontWeight:'400',opacity:0.6}}>at</Text>  
      </View>
      <View style={{flexDirection:'column',flex:0.75}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10}}> 3 venues</Text>  
          <LinearGradient   colors={['#3D39F3', '#D40033']} style={{alignSelf:'center',height:28,width:80,borderRadius:30,marginLeft:10,marginTop:2}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#FFFFFF',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'+ imax'}</Text>
   </LinearGradient >
          </View>    
      </View>   
      </View>
      <View style={{flexDirection:'row',marginTop:10}}>    
     <View style={{flexDirection:'column',flex:0.25}}>
         <Text style={{fontSize:18,marginLeft:20,marginTop:10,textAlign:'auto',fontWeight:'400',opacity:0.6}}>On</Text>
     </View>
     <View style={{flexDirection:'column',flex:0.75}}>  
         <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10}}>Weekdays</Text>
         <View   style={{height:26,width:90,borderRadius:30,marginLeft:10,marginTop:10,borderWidth:1}}>
      <Text style={{textAlign:'center',marginTop:5,color:'#000000',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'— Holidays'}</Text>
   </View >
          <LinearGradient   colors={['#3D39F3', '#D40033']} style={{alignSelf:'center',height:28,width:80,borderRadius:30,marginLeft:10,marginTop:2}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#FFFFFF',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'+ imax'}</Text>
   </LinearGradient >
          </View>         
     </View>
     </View>
     <View style={{flexDirection:'row'}}>
     <View style={{flexDirection:'column',flex:0.25}}>
         <Text style={{fontSize:18,marginLeft:20,marginTop:10,textAlign:'auto',fontWeight:'400',opacity:0.6}}>during</Text>
     </View>
     <View style={{flexDirection:'column',flex:0.6}}>
         <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10}}>12 - 03 PM</Text>     
     </View>
     </View>
     <View style={{flexDirection:'row',marginTop:10}}>
     <View style={{flexDirection:'column',flex:0.25}}>
         <Text style={{fontSize:18,marginLeft:20,marginTop:10,textAlign:'auto',fontWeight:'400',opacity:0.6}}>In</Text>
     </View>
     <View style={{flexDirection:'column',flex:0.75}}>
         <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10}}>4 languages</Text> 
     </View>
     </View>
    
     <View style={{elevation:10,borderTopLeftRadius:20,backgroundColor:'#FFFFFF',flex:1,borderTopRightRadius:10,marginTop:20}}>
       <View style={{flex:0.3}}></View>
     <Image source={require('../../Image/gif/party-popper_1f389.gif')} style={{ flex:0.2,height: "20%", width: '20%',alignSelf:'center',marginTop:10}} />
     <Text style={{fontSize:24,fontWeight:'400',textAlign:'center',marginTop:20}}>Hurray!</Text>
     <Text style={{fontSize:18,fontWeight:'300',textAlign:'center'}}>You’ve saved ₹128.</Text>
     <Image  source={require('../../Image/Group1.png')} style={{ flex:0.4,height: "20%", width: '22%',alignSelf:'center',marginTop:10}} />
     <Text style={{fontSize:14,fontWeight:'300',textAlign:'center',textDecorationLine:'underline',color:'#3D39F3'}}onPress={()=>props.navigation.navigate('LocationSelectionScreen')}>Click To Home</Text>
     </View>
   
    </LinearGradient>
  </View>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
  text: { fontSize: 30},
  passwordContainer: {flexDirection: 'row', paddingBottom: 10,  marginHorizontal: 20, marginVertical: 20, alignItems: 'center', height: 55, fontSize: 16},
  inputStyle: {flex: 1,backgroundColor: COLORS.white_theme},
  welcomText:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 28, marginTop: 15, marginLeft: 20 },
  inputContainer:{ flex: 0.31, backgroundColor: COLORS.white_theme, margin: 15, borderRadius: 20,elevation:3 },
  errorMsgStyle:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12, color: COLORS.error_theme,marginLeft:12 },
  signUpStyle:{ textAlign: 'center', color: COLORS.primary_theme, fontWeight: 'bold', marginLeft: 20 }
});

export default SucesScreen;