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
import ReviewLoader from '../../Component/Loader/ReviewLoader'
import {getReviewData} from '../../Providers/Home/actions'
const ReviewScreen = (props) => {


  const [isPriceModal, setIsPriceModal] = useState(false);
  const [is_Loading, setIsLoading] = useState(true);
  const [review_data, setReviewData] = useState(reviewData);
 
  useEffect(async() => {
let result=await getReviewData();

   if(!!result){
    setReviewData(result)
   }
   setIsLoading(false)

      });

 
 
  const renderItem3=({item,index})=>{
    return <Text style={styles.itemText}>{item}</Text>
  }
  const renderItem2 = ({ item, index }) => {
    return (
      <View>
      <View style={{flexDirection:'row',marginTop:10}}>
      <View style={{flexDirection:'column',flex:0.4}}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.typeDiscription}>{item.type_discription}</Text>
      </View>
      <View style={{flexDirection:'column',flex:0.6}}>
      <FlatList
            data={item.data}
            renderItem={renderItem3}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
      </View>
     {item.type==='at'?
     <TouchableOpacity  style={{flex: 0.05}} onPress={()=>setIsPriceModal(true)}>
      <LinearGradient   colors={['#3D39F3', '#D40033']}  style={{borderRadius:30,alignSelf:'center',height:28,width:80,marginLeft:width/6,marginTop:10}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#FFFFFF',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'+ imax'}</Text>
   </LinearGradient >
   </TouchableOpacity>:
   item.type==='on'?
   <View>
   <View   style={{flex: 0.05,alignSelf:'center',height:26,width:150,borderRadius:30,backgroundColor:'#e0e0e0',marginLeft:width/3,marginTop:10}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#000000',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'—  Public Holidays'}</Text>
   </View >
   <LinearGradient   colors={['#3D39F3', '#D40033']} style={{flex: 0.05,alignSelf:'center',height:26,width:150,borderRadius:30,marginLeft:width/3,marginTop:10}}>
      <Text style={{textAlign:'center',marginTop:6,color:'#FFFFFF',fontSize:12,fontFamily:FONTS.PROXIMA_NOVA}}>{'+ 1st Day of Releases'}</Text>
   </LinearGradient >
   </View>:null}
   </View>

    );
  }
  return <View style={styles.container}>
    {is_Loading===true?<ReviewLoader/>:
    isPriceModal===true?
    <PriceModal 
    clickFun={()=>setIsPriceModal(false)}
></PriceModal>:
    <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="none">
    
    <Text style={styles.title}>Review your choices</Text>
    <Text style={styles.header}>You’re choosing to watch unlimited movies</Text>
       
     <FlatList
            data={reviewData}
            renderItem={renderItem2}
            keyExtractor={(item, index) => index.toString()}
          />  
     <TouchableOpacity style={styles.pressView} onPress={()=>props.navigation.navigate('SucesScreen')} >
      <Image source={require('../../Image/Close.png')} style={styles.image} />
      <Text style={{fontSize:10,textAlign:'center',opacity:0.6}}>Press to go payment</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView> }
  </View>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
  text: { fontSize: 30},
  title:{fontSize:26,marginLeft:20,marginTop:10},
  type:{fontSize:18,marginLeft:20,textAlign:'auto',fontWeight:'400',opacity:0.8,color:'#3D39F3'},
  header:{fontSize:20,marginLeft:20,marginTop:15,textAlign:'auto',fontWeight:'400',opacity:0.6},
  pressView:{flex:1,marginTop:-height/22},
  image:{ flex:1,height: "25%", width: '25%',alignSelf:'center' ,marginTop:10},
  itemText:{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',marginTop:10,color:'#000000'},
  typeDiscription:{fontSize:12,marginLeft:20,textAlign:'auto',fontWeight:'400',color:'#000000',opacity:0.6},
  passwordContainer: {flexDirection: 'row', paddingBottom: 10,  marginHorizontal: 20, marginVertical: 20, alignItems: 'center', height: 55, fontSize: 16},
  inputStyle: {flex: 1,backgroundColor: COLORS.white_theme},
  welcomText:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 28, marginTop: 15, marginLeft: 20 },
  inputContainer:{ flex: 0.31, backgroundColor: COLORS.white_theme, margin: 15, borderRadius: 20,elevation:3 },
  errorMsgStyle:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12, color: COLORS.error_theme,marginLeft:12 },
  signUpStyle:{ textAlign: 'center', color: COLORS.primary_theme, fontWeight: 'bold', marginLeft: 20 }
});

export default ReviewScreen;