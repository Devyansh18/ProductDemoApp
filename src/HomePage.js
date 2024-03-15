import { View, Text,TextInput, StyleSheet,Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const HomePage = () => {

    const products = [
        {
            image: require('../src/assets/productImage.jpg'),
            name : '123456789',
            price : '$199.0'
        },
        {
            image: require('../src/assets/productImage.jpg'),
            name : '123456789',
            price : '$199.0'
        }

    ]

    
    const accessories = [
        {
            image: require('../src/assets/productImage.jpg'),
            name : '123456789',
            price : '$199.0'  
        },
        {
            image: require('../src/assets/productImage.jpg'),
            name : '123456789',
            price : '$199.0'
        }

    ]
  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity
        style={styles.inputStyle}
        //onPress={() => navigation.navigate(NavigationStrings.SEARCH_PAGE)}
        activeOpacity={0.9}>
        <Image source={require('../src/assets/search1.png')} style={styles.searchIcon} />

        <TextInput
          style={{
            fontSize: 15,
            color: '#495057',
          //  fontFamily: Fonts.mainFont,
            marginLeft: 6,
          }} placeholder='Search...'>
          
        </TextInput>
      </TouchableOpacity>

      <Text style = {{fontSize: responsiveFontSize(3.5), fontWeight: 'bold', color: 'black', 
    marginTop : responsiveHeight(5), marginLeft: responsiveWidth(4)}}>Hi-Fi Shop & Service</Text>
        <Text style = {{fontWeight: '600',fontSize: responsiveFontSize(1.7),
    marginTop : responsiveHeight(2), marginLeft: responsiveWidth(4)}}>Audio shop on Rustaveli Ave 57</Text>
     <Text style = {{fontWeight: '600',fontSize: responsiveFontSize(1.7),
    marginTop : responsiveHeight(1), marginLeft: responsiveWidth(4)}}>This shop offers both products and services</Text>

<Text style = {{fontWeight: '600',fontSize: responsiveFontSize(2.5),color: 'black',
    marginTop : responsiveHeight(5), marginLeft: responsiveWidth(4)}}>Products</Text>

    <View style = {{flexDirection: 'row' , justifyContent: 'space-evenly'}}>
        <View style = {styles.box1}>
        <Image  source = {require('../src/assets/productImage.jpg')} style = {{ height: responsiveHeight(15), width : responsiveWidth(30)}}/>
            <Image  source= {require('../src/assets/delete.png')} style = {{alignSelf: 'flex-end' , marginTop: responsiveHeight(1) , marginHorizontal: responsiveWidth(3), height: responsiveHeight(3.5)}}/>    
        </View>

        <View style = {styles.box1}>
        <Image  source = {require('../src/assets/productImage.jpg')} style = {{ height: responsiveHeight(15), width : responsiveWidth(30)}}/>
        <Image  source= {require('../src/assets/delete.png')} style = {{alignSelf: 'flex-end' , marginTop: responsiveHeight(1) , marginHorizontal: responsiveWidth(3), height: responsiveHeight(3.5)}}/>
        </View>
    </View>

    <Text style = {{fontWeight: '600',fontSize: responsiveFontSize(2.5),color: 'black',
    marginTop : responsiveHeight(5), marginLeft: responsiveWidth(4)}}>Products</Text>

    <View style = {{flexDirection: 'row' , justifyContent: 'space-evenly'}}>
        <View style = {styles.box1}>
            <Image  source = {require('../src/assets/productImage.jpg')} style = {{ height: responsiveHeight(15), width : responsiveWidth(30)}}/> 
            <Image  source= {require('../src/assets/delete.png')} style = {{alignSelf: 'flex-end' , marginTop: responsiveHeight(1) , marginHorizontal: responsiveWidth(3), height: responsiveHeight(3.5)}}/>    
        </View>
       
        
        <View style = {styles.box1}>
        <Image  source = {require('../src/assets/productImage.jpg')} style = {{ height: responsiveHeight(15), width : responsiveWidth(30)}}/>
        <Image  source= {require('../src/assets/delete.png')} style = {{alignSelf: 'flex-end' , marginTop: responsiveHeight(1) , marginHorizontal: responsiveWidth(3), height: responsiveHeight(3.5)}}/>
        </View>

    </View>
    


    </View>
  )
}

const styles = StyleSheet.create({
    box1 : {
        backgroundColor: 'lightgray',
        height: responsiveHeight(18),
        width: responsiveWidth(43),
        marginTop : responsiveHeight(2),
        // marginLeft: responsiveWidth(4),
         borderRadius: 10
    },
    inputStyle: {
        marginTop: responsiveHeight(2),
        width: width * 0.80,
        height: height * 0.060,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(4)
      },
      searchIcon: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor: '#616161',
        marginHorizontal: 4,
        //backgroundColor: 'red'
      },
})
export default HomePage