import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,Image,TouchableOpacity,FlatList} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Checkbox } from 'react-native-paper';
import { FONTS } from '../../Fonts/Fonts'
import { STORAGE_CONSTANT } from '../../Constant/Constant'
import { setData } from '../../Helper/StrorageHelper'
import {COLORS} from '../../Constant/Colors'
import LinearGradient from 'react-native-linear-gradient';
import { EMAIl, PASSWORD_LENGTH, PASSWORD } from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
import PriceModal from '../../Component/Modal/PriceModal'
import {reviewData} from '../../Constant/ReviewData'
import Shimmer from 'react-native-shimmer';
const ReviewLoader = (props) => {



 
  useEffect(async() => {

      });

 
 
  const renderItem3=({item,index})=>{
    return <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10,color:'grey'}}>{item}</Text>
  }
  const renderItem2 = ({ item, index }) => {
    return (
      <View>
      <View style={{flexDirection:'row',marginTop:10}}>
      <View style={{flexDirection:'column',flex:0.4,backgroundColor:'grey'}}>
          <Text style={{fontSize:18,marginLeft:20,textAlign:'auto',fontWeight:'400',opacity:0.6,color:'grey'}}>{'----------------'}</Text>
          <Text style={{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',opacity:0.6,color:'grey'}}>{'-------------------'}</Text>
      </View>
      <View style={{flexDirection:'column',flex:0.6,backgroundColor:'grey'}}>
      <FlatList
            data={item.data}
            renderItem={renderItem3}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
      </View>
     {item.type==='at'?
     <TouchableOpacity  style={{flex: 0.05,backgroundColor:'grey'}} onPress={()=>setIsPriceModal(true)}>
      <View    style={{borderRadius:30,alignSelf:'center',height:28,width:80,marginLeft:width/6,marginTop:10}}>
      <Text style={{textAlign:'center',marginTop:6,color:'grey',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'+ imax'}</Text>
   </View >
   </TouchableOpacity>:
   item.type==='In'?
   <View>
   <View   style={{flex: 0.05,alignSelf:'center',height:80,width:80,borderRadius:50,backgroundColor:'grey',marginLeft:width/3,marginTop:height/4,marginRight:width/3}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#000000',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA,color:'grey'}}>{'—  Public Holidays'}</Text>
   </View >
 
   </View>:null}
   </View>

    );
  }
  return <View style={styles.container}>
    <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="none">
    <Shimmer>
   
    
    
     <FlatList
            data={reviewData}
            renderItem={renderItem2}
            keyExtractor={(item, index) => index.toString()}
          />
      
    
    
   
     
     
  
      </Shimmer>
    </KeyboardAwareScrollView>
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

export default ReviewLoader;