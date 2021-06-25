import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,FlatList,ImageBackground,Image,TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Checkbox } from 'react-native-paper';
import { FONTS } from '../../Fonts/Fonts'
import { STORAGE_CONSTANT } from '../../Constant/Constant'
import EvilIcons from  'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { setData } from '../../Helper/StrorageHelper'
import {COLORS} from '../../Constant/Colors'
import { EMAIl, PASSWORD_LENGTH, PASSWORD } from '../../Constant/Constant'
import { ScrollView } from "react-native-gesture-handler";
var { height, width } = Dimensions.get('window')
import {lData} from '../../Constant/location'
import PromptContentLoader from '../../Component/Loader/PromptContentLoader'
import {getHomeList} from '../../Providers/Home/actions'
const LocationSelectionScreen = (props) => {
  const [is_Loading, setLoading] = useState(true);
  const [home_data,setHomeData]=useState(lData)



  useEffect(async() => {
let result=await getHomeList()
if(Array.isArray(result)){
setHomeData(result)


}
setLoading(false)

  });
  
  const navigationFun=()=>{
    props.navigation.navigate('ReviewScreen')
  }
  const selectedIndex=9
  const renderItem2 = ({ item, index }) => {
    return (
        <TouchableOpacity  onPress={()=>navigationFun()} style={styles.imageBackgroundStyle}>
        <ImageBackground source={lData[index].Image} style={{ height: "100%", width: '100%'}}
                  imageStyle={{ opacity: 0.8, borderRadius:5 }}>
                  <View style={styles.mainView}>

                    </View>
                      <View style={styles.textView}>
                        <View style={{flexDirection:'column',flex:0.6}}>
                        <Text style={styles.date} numberOfLines={1}>{item.date}</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:0.6}}>
                        <View style={{flexDirection:'row',flex:1}}>  
                        {item.isCheckCircle===0? 
                     <EvilIcons name='check' color='#FFFFFF' size={20}/>:null}
                     {item.isContact===0?
                     <Ionicons name='person-circle-outline' color='#FFFFFF' size={18} style={{marginTop:-2}}/>:null}
                     </View>
                     </View>
                      </View>        
                </ImageBackground>
{/*                 
                {index!==selectedIndex?
                <Image source={require('../../Image/Group.png')} style={{ height: "35%", width: '35%',alignSelf:'center',marginTop:90 }}
                //   imageStyle={{ opacity: 0.8, borderRadiu:5 }}
                >
                         
                </Image>:null} */}
                </TouchableOpacity>
    );
  }
  return <ScrollView style={styles.container}>
  
    
    <View style={{flex:1}}>
    {is_Loading===true?
     <PromptContentLoader/> :
    <FlatList
            data={home_data}
            numColumns={3}
            renderItem={renderItem2}
            keyExtractor={(item, index) => index.toString()}
          />}
          </View>
   
  </ScrollView>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.white_theme },
  text: { fontSize: 30},
  mainView:{ flex:0.85,flexDirection: 'row', marginHorizontal: 10, marginTop: 10 },
  textView:{ flex:0.15,marginLeft:10,flexDirection:'row'},
  date:{ color: '#fff', fontSize: 10 },
  imageBackgroundStyle:{flex: 1, margin: 10,width:width/3, height: height/4}

});

export default LocationSelectionScreen;