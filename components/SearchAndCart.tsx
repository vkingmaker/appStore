/** @format */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const SearchAndCart = (props: { showBackBtn: boolean }) => {
	return (
		<View style={styles.container}>
			{props.showBackBtn === true ? (
				<MaterialCommunityIcons
					name='keyboard-backspace'
					size={24}
					color='black'
				/>
			) : (
				<Text></Text>
			)}
			<View style={styles.iconContainer}>
				<Feather
					name='search'
					size={20}
					color='black'
					onPress={() => {}}
				/>
				<Feather
					name='shopping-cart'
					size={20}
					color='black'
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 25,
		marginTop: 10,
	},
	iconContainer: {
		display: 'flex',
		width: '30%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 5,
	},
});

export default SearchAndCart;
