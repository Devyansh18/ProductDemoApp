import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    responsiveHeight,
    responsiveFontSize, 
    responsiveWidth
} from "react-native-responsive-dimensions";
import ProductList from './components/ProductList';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    try {
      setLoading(true);
        
      // Basic form validation
      if (!productName || !price) {
        Alert.alert('Error', 'Please fill in all required fields');
        return;
      }

    //  Check for duplicate product
     const existingProducts = await AsyncStorage.getItem('products');
      const parsedProducts = JSON.parse(existingProducts) || [];
      const isDuplicate = parsedProducts.some(
        (product) => product.name === productName
      );
      if (isDuplicate) {
        Alert.alert('Error', 'Product already exists');
        return;
      }

    //  Add new product
      const newProduct = {
        name: productName,
        price: price,
        image: imageUri? imageUri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
      };
     const updatedProducts = [...parsedProducts, newProduct];
     await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));

      // Clear form fields
      setProductName('');
      setPrice('');
      setImageUri('');

      

      Alert.alert('Success', 'Product added successfully');
    } catch (error) {
      console.error('Error adding product: ', error);
      Alert.alert('Error', 'Failed to add product, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style = {{flex : 1,backgroundColor: 'white',}}>
    <View style={{ padding: 20 , marginVertical: responsiveHeight(28) }}>
       
     
        <View style = {styles.inputStyle}>
                   
     
     
     
     
      <TextInput
        placeholder="Product name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
       // style={{ marginBottom: 10 }}
      />
      </View>
      <View style = {styles.inputStyle}>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      </View>
      <View style = {styles.inputStyle}>
      <TextInput
        placeholder="Image URL"
        value={imageUri}
        onChangeText={(text) => setImageUri(text)}
        style={{ marginBottom: 10 }}
      />
      </View>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
      ) : null}
      <TouchableOpacity onPress={handleAddProduct} style = {{width : responsiveWidth(80) ,marginHorizontal : responsiveWidth(5),borderRadius : 10, paddingHorizontal: responsiveWidth(4),marginTop: responsiveHeight(5),alignItems: 'center',justifyContent: 'center', height: responsiveHeight(6), backgroundColor: '#1e7df0'}}>
        <Text style = {{color: 'white'}}>ADD PRODUCT</Text>
        </TouchableOpacity>
      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
    </View>
    </View>
  );
}

const styles = StyleSheet.create  ({

    inputStyle: {
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(8),

        width: '100',
        height: responsiveHeight(7),
        backgroundColor: 'rgb(220, 220, 220)',
        marginTop: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5),
        flexDirection: 'row'
    },

})

export default AddProductForm;
