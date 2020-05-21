/** @format */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { IProducts } from '../constants/interface/Index';
import { IProduct } from '../constants/interface/Index';
import Product from './Product';

const Products = (props: IProducts) => {
	return (
		<ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false } style={styles.container}>
			{props.data.map((product: IProduct, index: number) => {
				return (
					<Product
						key={index}
						productName={product.productName}
						productPrice={product.productPrice}
						productUri={product.productUri}
					/>
				);
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
		flexDirection: 'row',
		width: '100%',
  }
});

export default Products;
