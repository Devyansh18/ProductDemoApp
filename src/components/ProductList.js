import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    responsiveHeight,
    responsiveFontSize, 
    responsiveWidth
} from "react-native-responsive-dimensions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const savedProducts = await AsyncStorage.getItem('products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    } catch (error) {
      console.error('Error loading products: ', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (productName) => {
    try {
      const updatedProducts = products.filter(
        (product) => product.name !== productName
      );
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };

  const renderProductItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
      <Text style={{ flex: 1 }}>{item.name} - ${item.price}</Text>
      <TouchableOpacity onPress={() => deleteProduct(item.name)}>
        <Text style={{ color: 'red', marginLeft: 10 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const searchProducts = () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Please enter a search query');
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search Products"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Search" onPress={searchProducts} />
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} />
      ) : products.length === 0 ? (
        <Text>No Products Found</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.name}
          style={{ marginTop: 20 }}
        />
      )}
    </View>
  );
};

export default ProductList;
