/** @format */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Products from '../components/Products';
import CollectionList from '../components/CollectionList';
import ScreenAndCart from '../components/SearchAndCart';

const HomeScreen = (props: any ) => {
	const [selectedMenu, setSelectedMenu] = useState('');

	const handleChangeStateToTopPick = () => {
		setSelectedMenu('topPick');
	};

	const handleChangeStateToFunTime = () => {
		setSelectedMenu('funTime');
	};

	const handleChangeStateToTeaTime = () => {
		setSelectedMenu('teaTime');
	};

	const collections = [
		{
			collectionName: 'spring',
			collectionImg:
				'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
		},
		{
			collectionName: 'summer',
			collectionImg:
				'https://images.unsplash.com/photo-1553649084-3e42773ff0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
		},
	];

	const products = [
		{
			productUri:
				'https://image.freepik.com/free-vector/broken-frosted-glass-realistic-icon_1284-12125.jpg',
			productName: 'WHITE DROP - D',
			productPrice: '150',
		},
		{
			productUri:
				'https://image.freepik.com/free-vector/broken-frosted-glass-realistic-icon_1284-12125.jpg',
			productName: 'SWATCH 1600',
			productPrice: '3400',
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.sideBar}>
				<View style={styles.brand}>
					<Text style={styles.brandName}>ST</Text>
				</View>
				<View style={styles.options}>
					<TouchableOpacity
						style={styles.optionBtn}
						onPress={() => {
							handleChangeStateToTopPick();
						}}>
						{selectedMenu === 'topPick' ? (
							<View style={styles.markSelected}></View>
						) : null}
						{selectedMenu === 'topPick' ? (
							<Text
								style={{
									...styles.optionBtnText,
									...{ fontWeight: 'bold' },
								}}>
								Top Pick
							</Text>
						) : (
							<Text style={styles.optionBtnText}>Top Pick</Text>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.optionBtn}
						onPress={() => {
							handleChangeStateToTeaTime();
						}}>
						{selectedMenu === 'teaTime' ? (
							<View style={styles.markSelected}></View>
						) : null}
						{selectedMenu === 'teaTime' ? (
							<Text
								style={{
									...styles.optionBtnText,
									...{ fontWeight: 'bold' },
								}}>
								Tea Time
							</Text>
						) : (
							<Text style={styles.optionBtnText}>Tea Time</Text>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.optionBtn}
						onPress={() => {
							handleChangeStateToFunTime();
						}}>
						{selectedMenu === 'funTime' ? (
							<View style={styles.markSelected}></View>
						) : null}
						{selectedMenu === 'funTime' ? (
							<Text
								style={{
									...styles.optionBtnText,
									...{ fontWeight: 'bold' },
								}}>
								Fun Time
							</Text>
						) : (
							<Text style={styles.optionBtnText}>Fun Time</Text>
						)}
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.menuBtn}>
					<Text style={styles.menuBtnText}>...</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.main}>
				<ScreenAndCart showBackBtn={false} />
				<Products data={products} navigation={props.navigation} />
				<CollectionList collections={collections} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '100%',
		backgroundColor: '#f8f8fa',
	},
	sideBar: {
		borderLeftWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderRightColor: '#ccc',
		borderWidth: 1,
		flex: 1,
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		minWidth: 20,
		marginRight: 30,
	},
	brand: {
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	brandName: {
		fontSize: 20,
		fontWeight: '700',
	},
	options: {
		height: '70%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	optionBtn: {
		display: 'flex',
		justifyContent: 'center',
		flex: 1,
	},
	optionBtnText: {
		transform: [{ rotate: '-90deg' }],
		color: 'gray',
		fontSize: 16,
		fontWeight: '400',
	},
	markSelected: {
		backgroundColor: 'red',
		width: 2,
		display: 'flex',
		height: 20,
		position: 'absolute',
		bottom: 13,
		left: '50%',
	},
	menuBtn: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuBtnText: {
		fontWeight: 'bold',
		fontSize: 28,
		transform: [{ rotate: '-90deg' }],
		paddingBottom: 30,
	},
	main: {
		flex: 5,
	},
});

export default HomeScreen;
