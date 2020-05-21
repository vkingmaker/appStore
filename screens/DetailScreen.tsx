/** @format */

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SearchAndCart from '../components/SearchAndCart';

const DetailScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.upperLayer}>
				<SearchAndCart showBackBtn={true} />
				<View>
					<View style={styles.tag}>
						<Text style={styles.label}>special</Text>
						<View style={styles.labelHighlight}></View>
					</View>
					<Text style={styles.productName}>White Drop - D</Text>
				</View>
				<View style={styles.product}>
					<Image
						style={styles.productImg}
						source={{
							uri:
								'https://image.freepik.com/free-vector/broken-frosted-glass-realistic-icon_1284-12125.jpg',
						}}
					/>
					<View>
						<View>
							<Text style={styles.particulars}>PRICE</Text>
							<Text style={styles.particularValue}>$150</Text>
						</View>
						<View>
							<Text style={styles.particulars}>COLOR</Text>
							<Text style={styles.particularValue}>White</Text>
						</View>
						<View>
							<Text style={styles.particulars}>STRAP</Text>
							<Text style={styles.particularValue}>Rubber</Text>
						</View>
					</View>
				</View>
				<Ionicons
					name='md-trash'
					size={48}
					color='tomato'
					style={styles.likeBtn}
				/>
			</View>
			<View style={styles.lowerLayer}>
				<Text style={styles.overview}>Overview</Text>
				<Text style={styles.productDetail}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Earum nihil possimus ut qui. Earum inventore commodi
					placeat? Vel illo, sit, quasi eligendi ratione excepturi,
					sunt repellendus cupiditate ipsam accusantium autem.
				</Text>
				<TouchableOpacity style={styles.addBtn}>
					<Text style={styles.btnText}>Add to cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
	},
	upperLayer: {
		backgroundColor: '#e7eff6',
		paddingBottom: 40,
		paddingHorizontal: 24,
	},
	tag: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 6,
	},
	label: {
		fontSize: 12,
		fontFamily: 'Montserrat-bold',
		letterSpacing: 4,
		marginRight: 12,
		textTransform: 'uppercase',
	},
	labelHighlight: {
		height: 1,
		width: 40,
		borderWidth: 1.5,
		borderStyle: 'solid',
		borderColor: '#be9b7b',
	},
	productName: {
		fontSize: 28,
		fontFamily: 'Montserrat',
		marginBottom: 30,
	},
	product: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	productImg: {
		height: 200,
		width: 130,
	},
	particulars: {
		fontSize: 10,
		fontFamily: 'Montserrat',
		textTransform: 'uppercase',
		marginBottom: 3,
	},
	particularValue: {
		fontSize: 12,
		fontFamily: 'Montserrat-bold',
		textTransform: 'capitalize',
		marginBottom: 20,
	},
	likeBtn: {
		position: 'absolute',
		bottom: -22,
		right: 15,
		zIndex: 100,
	},
	lowerLayer: {
		backgroundColor: '#fff',
		paddingHorizontal: 24,
		paddingVertical: 20,
		position: 'relative',
		zIndex: -1,
	},
	overview: {
		fontSize: 14,
		fontFamily: 'Montserrat-bold',
		textTransform: 'capitalize',
		marginBottom: 12,
	},
	productDetail: {
		fontFamily: 'Montserrat',
		textAlign: 'justify',
		lineHeight: 22,
	},
	addBtn: {
		borderStyle: 'solid',
		borderColor: '#ccc',
		borderWidth: 1,
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e7eff6',
		marginTop: 26,
	},
	btnText: {
		fontSize: 12,
		fontFamily: 'Montserrat-bold',
		textTransform: 'uppercase',
	},
});

export default DetailScreen;
