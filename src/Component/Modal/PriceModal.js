import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,Image,TouchableOpacity,SafeAreaView,Modal,TouchableWithoutFeedback} from "react-native";
import { FONTS } from '../../Fonts/Fonts'
import {COLORS} from '../../Constant/Colors'
import LinearGradient from 'react-native-linear-gradient';

import Slider from '@react-native-community/slider';
var { height, width } = Dimensions.get('window')
const PriceModal = (props) => {
  const [minimumPrice, setMinimumPrice] = useState(1000);
  const [maximumPrice, setMaximumPrice] = useState(11557);
  const showdetail=()=>{
    props.clickFun()
  }
  const sliderFunction=(value)=>{
   setMinimumPrice(Math.round(value))
  }
  return <SafeAreaView>
  <Modal
    animationType="slide"
    transparent={true}
    visible={true}
  >
     <TouchableWithoutFeedback onPress={() => showdetail()} style={{ position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)', flex: 1}}> 
    <View style={{ flex: 1,height:'100%' }}>
      <LinearGradient colors={['#3D39F3','#D40033']}
        style={styles.GradientView}>

      <Text style={{marginLeft:width/12,fontSize:26,fontWeight:'400',marginTop:height/16}}>What do you value for?</Text>
      <Text style={{fontSize:10,opacity:0.6,marginLeft:width/12,marginRight:width/5}}>Give us an estimated range of how much are you willing to pay for. This is not be the final price.</Text>
   
      <Image source={require('../../Image/money-bag_1f4b0.png')} style={{ flex:0.4,height: "20%", width: '20%',alignSelf:'center',marginTop:20}} />
      <Text style={{fontSize:22,textAlign:'center',color:'#3D39F3',marginTop:10}}>{`₹${minimumPrice}— ₹${maximumPrice}`}</Text>
      
      <View style={{ flex: 0.4, alignItems: 'center' }}>
                        <Slider
                            style={{ width: 350, height: 60 }}
                            minimumValue={10}
                            maximumValue={100000}
                            value={20}
                            onValueChange={(value) => sliderFunction(value)}
                            thumbTintColor="#FFFFFF"
                            minimumTrackTintColor="#000000"
                            maximumTrackTintColor="#DCDCDC"
                        />
  
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                          <View style={{alignItems:'flex-start',flexDirection:'column',flex:0.5}}>
                        <Text style={{fontSize:10,textAlign:'center',color:'#000000',marginTop:-10,marginLeft:20}}>{`₹${minimumPrice}`}</Text>
                        </View>
                        <View style={{alignItems:'flex-end',flexDirection:'column',flex:0.5}}>
                        <Text style={{fontSize:10,textAlign:'center',color:'#000000',marginTop:-10,marginRight:20}}>{`₹${maximumPrice}`}</Text>
                        </View>
                        </View>
                    </View>
      <Image source={require('../../Image/Close.png')} style={{ flex:0.4,height: "40%", width: '40%',alignSelf:'center',marginTop:-20}} />
      <Text style={{fontSize:10,textAlign:'center',opacity:0.6}}>Hold to go Home</Text>
      </LinearGradient>
  

    </View>
   </TouchableWithoutFeedback> 
 
  </Modal>
</SafeAreaView>
};

const styles = StyleSheet.create({
    GradientView: {
        height: '60%',
        marginTop: 'auto',
        opacity:0.7,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
  text: { fontSize: 30},
  passwordContainer: {flexDirection: 'row', paddingBottom: 10,  marginHorizontal: 20, marginVertical: 20, alignItems: 'center', height: 55, fontSize: 16},
  inputStyle: {flex: 1,backgroundColor: COLORS.white_theme},
  welcomText:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 28, marginTop: 15, marginLeft: 20 },
  inputContainer:{ flex: 0.31, backgroundColor: COLORS.white_theme, margin: 15, borderRadius: 20,elevation:3 },
  errorMsgStyle:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12, color: COLORS.error_theme,marginLeft:12 },
  signUpStyle:{ textAlign: 'center', color: COLORS.primary_theme, fontWeight: 'bold', marginLeft: 20 }
});

export default PriceModal;