import React, { Component, PureComponent } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, Image, Text, Platform, FlatList, SafeAreaView } from 'react-native'
import Shimmer from 'react-native-shimmer';
import {COLORS} from '../../Constant/Colors'

var { height, width } = Dimensions.get('window');
class PromptContentLoader extends PureComponent {
    actionOnRow() {
        this.props.ClickAction()
    }
    render() {
        const { item } = this.props;
        return (
            <Shimmer>
             
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                               numColumns={3}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) =>
                            <View style={{flex: 1, margin: 10,width:width/3, height: height/4,backgroundColor:COLORS.background_theme}}>
                            
                                    </View>
                    
                            } />
                  
            </Shimmer>
        );
    }

}
const Styles = StyleSheet.create({

    // FlatCard: {
    //     flex: 1,
    //     backgroundColor: COLORS.white_theme
    // },
    mainCardView: {
        height: 60,
        width: width - 30,
        marginVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: COLORS.secondary_theme,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 10
        // paddingLeft: 16,
        // paddingRight: 14,
        // paddingVertical: 15,
        // marginTop: 6,
        // marginBottom: 6,
        // marginLeft: 16,
        // marginRight: 16,
    },

})




export default PromptContentLoader;
