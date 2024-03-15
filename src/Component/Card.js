import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import React  from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const CardComponent = ({ data, navigation }) => {

    
  const { image, name, price , } = data;

  return (
    <View>
    <View style = {styles.box1}>
    <Image source = {image}  style = {{}}/>
    <Image  source= {require('../assets/delete.png')} style = {{alignSelf: 'flex-end' , marginTop: responsiveHeight(1) , marginHorizontal: responsiveWidth(3), height: responsiveHeight(3.5)}}/>    
    </View>
    <Text>

    </Text>
    </View>

   

  );
};

const styles = StyleSheet.create({
    box1 : {
        backgroundColor: 'lighgray',
        height: responsiveHeight(18),
        width: responsiveWidth(43),
        marginTop : responsiveHeight(2),
        // marginLeft: responsiveWidth(4),
         borderRadius: 10
    },

});

export default CardComponent;