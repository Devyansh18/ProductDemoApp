import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import React  from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const CardComponent = ({ data, navigation }) => {

    
  const { image, name, price , } = data;

  return (

    <View style = {{ margin : 10, backgroundColor: 'white' , width: responsiveWidth(43) , height: responsiveHeight(24)}}>
                <View style={styles.box1}>
                    <Image source={image} style={{ height: responsiveHeight(12), width: responsiveWidth(27), alignSelf: 'center', marginLeft: responsiveWidth(6) }} />
                    <Image source={require('../assets/delete.png')} style={{ marginLeft: responsiveWidth(3), marginVertical: responsiveWidth(2), height: responsiveHeight(3.5) }} />
                </View>
                <View>
                    <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'black',marginLeft: responsiveWidth(1),marginTop: responsiveHeight(1)  }}>{name}</Text>
                    <Text style = {{ fontSize: responsiveFontSize(1.8), fontWeight: '700',marginLeft: responsiveWidth(1) , marginTop: responsiveHeight(1) }}>{price}</Text>
                </View>
            </View>

   

  );
};

const styles = StyleSheet.create({
  box1: {
    backgroundColor: 'lightgray',
    height: responsiveHeight(16),
    width: responsiveWidth(43),
   // margin: responsiveHeight(1),
    // marginLeft: responsiveWidth(4),
    borderRadius: 10,
    flexDirection: 'row'
},

});

export default CardComponent;