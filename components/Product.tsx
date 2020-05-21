/** @format */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IProduct } from '../constants/interface/Index';

const Product = (props: IProduct) => {
	return (
		<View style={styles.productCard}>
			<TouchableOpacity style={styles.product}>
				<Image
          style={styles.productImg}
					source={{
						uri:
							props.productUri,
					}}
					fadeDuration={0}
				/>
			</TouchableOpacity>
			<View style={styles.productDetails}>
				<Text style={styles.productName}>{props.productName}</Text>
				<Text style={styles.productPrice}>${props.productPrice}</Text>
				<View style={styles.rateProduct}>
					<View style={styles.ratingStar}>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#ccc'
						/>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#ccc'
						/>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#ccc'
						/>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#ccc'
						/>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#ccc'
						/>
					</View>
					<MaterialCommunityIcons
						name='heart-circle'
						size={32}
						color='tomato'
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	productCard: {
		height: 320,
		width: 165,
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		marginRight: 20,
		zIndex: -1,
	},
	product: {
		height: '50%',
		width: '94%',
		borderRadius: 9,
		position: 'absolute',
		top: 30,
		backgroundColor: '#e5e6eb',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productImg: {
    width: '70%',
    height: '90%',
    position: 'relative',
    top: -25
  },
	productDetails: {
		paddingTop: '50%',
		paddingLeft: '10%',
		paddingRight: '10%',
		height: '60%',
		width: '100%',
		borderColor: '#e6e6ea',
		borderWidth: 1,
		borderRadius: 9,
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#fff',
	},
	productName: {
		fontSize: 15,
		marginBottom: 10,
	},
	productPrice: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	rateProduct: {
		height: 40,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ratingStar: {
		display: 'flex',
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default Product;
