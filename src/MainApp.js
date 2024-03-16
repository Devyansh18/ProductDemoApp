import React from 'react';
import { View } from 'react-native';
import AddProductForm from './AddProduct';
import ProductList from './components/ProductList';

const MainApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddProductForm />
      <ProductList />
    </View>
  );
};

export default MainApp;
