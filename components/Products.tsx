/** @format */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { IProducts } from '../constants/interface/Index';
import { IProduct } from '../constants/interface/Index';
import Product from './Product';

const Products = (props: IProducts) => {
	return (
		<>
		<Text style={styles.productHeader}>Products</Text>
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				{props.data.map((product: IProduct, index: number) => {
					return (
						<Product
							key={index}
							navigate={props.navigation.navigate}
							productName={product.productName}
							productPrice={product.productPrice}
							productUri={product.productUri}
						/>
					);
				})}
			</ScrollView>
		</View>
	</>
	);
};

const styles = StyleSheet.create({
	productHeader: {
		fontSize: 28,
		fontFamily: 'Montserrat',
		marginBottom: 20,

	},
	container: {
		height: 280,
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
	},
});

export default Products;
