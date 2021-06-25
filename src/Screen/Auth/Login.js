import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,Image,TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Checkbox } from 'react-native-paper';
import { FONTS } from '../../Fonts/Fonts'
import { STORAGE_CONSTANT } from '../../Constant/Constant'
import { setData } from '../../Helper/StrorageHelper'
import {COLORS} from '../../Constant/Colors'
import LinearGradient from 'react-native-linear-gradient';
import {getHomeData,doLogInData,CreateData1} from '../../Providers/Home/actions'
import {ValidateEmail,ValidatePhoneNumber} from '../../Helper/HelperFunction'

var { height, width } = Dimensions.get('window')


const LoginScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [nameErrorMsg, setNameErrorMsg] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState(false);
  const [mobileNoErrorMsg, setmobileNoErrorMsg] = useState(false);
  const [validEmailErrorMsg, setValidEmailErrorMsg] = useState(false);
  
  useEffect(async() => {
   
     
      });
     
  const setNameFunction = (name) => {
    let storeName = name.trim();
    setName(storeName)
  }
  
  const setEmailFunction = async (name) => {
    try{
    let storeName = name.trim();
    setEmail(storeName)
    }catch(e){
      alert(e)
    }
  }
  
  const setmobileNoFunction = (name) => {
    let storeName = name.trim();
    setmobileNo(storeName)
  }
  const doLogin=()=>{
    
   
   
    if(name===''){
      setNameErrorMsg(true);
      return
    }else{
      setNameErrorMsg(false);
    }
    if(email===''){
      setEmailErrorMsg(true);
      return 
    }else{
      setEmailErrorMsg(false);
    }
    if(!ValidateEmail(email)){
      setValidEmailErrorMsg(true);
      return
    }else{
      setValidEmailErrorMsg(false);
    }
    if(mobileNo===''){
      setmobileNoErrorMsg(true)
      return
    }else{
      setmobileNoErrorMsg(false) 
    }
    if(!ValidatePhoneNumber(mobileNo)){
      setmobileNoErrorMsg(true)
      return
    }else{
      setmobileNoErrorMsg(false) 
    }
    let obj={
      name:name,
      email:email,
      mobile_no:mobileNo
    }
    let result=CreateData1(obj)
    setData(STORAGE_CONSTANT.LOGED_IN,'1')
    setData(STORAGE_CONSTANT.EMAIL,email)
    setData(STORAGE_CONSTANT.NAME,name)
    props.navigation.navigate('LocationSelectionScreen')


  }
  return <View style={styles.container}>
    <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="none"> 
    <View style={{flex:0.2}} />
      <View style={{flex:0.3}} >
      <Image source={require('../../Image/Group.png')} style={styles.logoImage} />
      <Text style={styles.headerText}>Welcome Home, buddy!</Text>
        <Text style={styles.headerDiscription}>One Step away to get in.</Text>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          label="Name"
          mode='outlined'
          outlineColor='#757575'
          value={name}
          style={styles.inputStyle}
          theme={{ colors: { placeholder: nameErrorMsg === true ? 'red' : '#757575',primary:'#3D39F3' } }}
          onChangeText={text => setNameFunction(text)}
        />
        </View>
        {nameErrorMsg===true?
        <Text style={styles.errorMsgStyle}>Kindly fill name</Text>
    : null}
        <View style={styles.passwordContainer}>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            underlineColorAndroid = "transparent"
            style={styles.inputStyle} 
            theme={{ colors: { placeholder: emailErrorMsg === true ? 'red' : '#757575',primary:'#3D39F3' } }}
            outlineColor={emailErrorMsg === true ? 'red' : '#757575'}
            onChangeText={email => setEmailFunction(email)}
          />
        </View>
        {emailErrorMsg===true?
        <Text style={styles.errorMsgStyle}>Kindly fill email</Text>
    : null}
    {
      validEmailErrorMsg===true?
      <Text style={styles.errorMsgStyle}>kindly fill your valid email</Text>
    : null
    }
        <View style={styles.passwordContainer}>
          <TextInput
            label="Mobile no"
            mode="outlined"
            value={mobileNo}
            underlineColorAndroid = "transparent"
            style={styles.inputStyle}
            theme={{ colors: { placeholder: mobileNoErrorMsg === true ? 'red' : '#757575',primary:'#3D39F3' } }}
            outlineColor={mobileNoErrorMsg === true ? 'red' : '#757575'}
            onChangeText={mobileNo => setmobileNoFunction(mobileNo)}
          />
        </View>
        {mobileNoErrorMsg===true?
        <Text style={styles.errorMsgStyle}>Kindly fill mobile no or accept number only</Text>
    : null}
        <TouchableOpacity  onPress={()=>doLogin()} style={styles.loginStyle}>
        <LinearGradient   colors={['#3D39F3', '#D40033']}  style={{borderRadius:20}}>
      <Text style={{textAlign:'center',marginVertical:8,color:'#000000',fontSize:19,fontFamily:FONTS.PROXIMA_NOVA}}>{'Login'}</Text>

   </LinearGradient >
   </TouchableOpacity>

    </KeyboardAwareScrollView> 
  </View>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
  logoImage:{ flex:1,height: "25%", width: '25%',alignSelf:'center' },
  headerText:{fontSize:24,textAlign:'center',fontWeight:'500'},
  headerDiscription:{fontSize:14,textAlign:'center',color:'#4F4F4F'},
  loginStyle:{flex: 0.3,alignSelf:'center',height:26,width:94,borderRadius:20},
  text: { fontSize: 30},
  passwordContainer: {flexDirection: 'row', paddingBottom: 10,  marginHorizontal: 20, marginVertical: 20, alignItems: 'center', height: 55, fontSize: 16},
  inputStyle: {flex: 1,backgroundColor: COLORS.white_theme},
  welcomText:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 28, marginTop: 15, marginLeft: 20 },
  inputContainer:{ flex: 0.31, backgroundColor: COLORS.white_theme, margin: 15, borderRadius: 20,elevation:3 },
  errorMsgStyle:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12, color: COLORS.error_theme,marginLeft:width/12 },
  signUpStyle:{ textAlign: 'center', color: COLORS.primary_theme, fontWeight: 'bold', marginLeft: 20 }
});

export default LoginScreen;