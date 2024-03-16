import { View, Text, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
const { width, height } = Dimensions.get('screen');
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CardComponent from './Component/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }, props) => {
    const products = [
        {
            id : 1,
            image: require('../src/assets/productImage.jpg'),
            name: '123456789',
            price: '$199.0'
        },
        {
            id: 2,
            image: require('../src/assets/productImage.jpg'),
            name: '123456789',
            price: '$199.0'
        }

    ]
   
    
     const [data, setData] = useState(products);
    const getData = async () => {
            try {
            const storedData = await AsyncStorage.getItem('products');
            if (storedData !== null) {
                console.log(storedData)
                //let newData = [...products, storedData]
                //setData(storedData);
                //console.log(data);
            }
            } catch (error) {
            console.log('Error retrieving data:', error);
            }
        };
    

     useEffect(() => {
       getData();
     }, []);

    
    


    const accessories = [
        {
            id: 1,
            image: require('../src/assets/productImage.jpg'),
            name: '123456789',
            price: '$199.0'
        },
        {
            id : 2,
            image: require('../src/assets/productImage.jpg'),
            name: '123456789',
            price: '$199.0'
        }

    ]
        
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
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

            <Text style={{
                fontSize: responsiveFontSize(3.5), fontWeight: 'bold', color: 'black',
                marginTop: responsiveHeight(5), marginLeft: responsiveWidth(4)
            }}>Hi-Fi Shop & Service</Text>
            <Text style={{
                fontWeight: '600', fontSize: responsiveFontSize(1.7),
                marginTop: responsiveHeight(2), marginLeft: responsiveWidth(4)
            }}>Audio shop on Rustaveli Ave 57</Text>
            <Text style={{
                fontWeight: '600', fontSize: responsiveFontSize(1.7),
                marginTop: responsiveHeight(1), marginLeft: responsiveWidth(4)
            }}>This shop offers both products and services</Text>

            <Text style={{
                fontWeight: '600', fontSize: responsiveFontSize(2.5), color: 'black',
                marginTop: responsiveHeight(2), marginLeft: responsiveWidth(4)
            }}>Products</Text>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <CardComponent data={item} navigation={navigation} />
                }
            />

            <Text style={{
                fontWeight: '600', fontSize: responsiveFontSize(2.5), color: 'black',
                marginTop: responsiveHeight(0.01), marginLeft: responsiveWidth(2)
            }}>Accesories</Text>

<FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Change keyExtractor
        renderItem={({ item }) =>
          <CardComponent data={item} navigation={navigation} />
        }
      />
            <View >
            <TouchableOpacity  onPress={() => navigation.navigate("AddProduct")} style = {{backgroundColor: '#1e7df0' ,marginRight: responsiveWidth(5),justifyContent: 'center', marginBottom: responsiveHeight(3),alignSelf: 'flex-end', height: responsiveHeight(8) , alignItems: 'center',width : responsiveWidth(16) , borderRadius : 32}}> 
            <Text style = {{color: 'white', fontSize: responsiveFontSize(4), fontWeight: '300' }}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

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