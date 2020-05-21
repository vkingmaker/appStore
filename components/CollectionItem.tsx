/** @format */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ICollection } from '../constants/interface/Index';

const CollectionItem = (props: ICollection) => {
	return (
		<>
			<View style={styles.collectionItem}>
				<Image
					style={styles.collectionImg}
					source={{
						uri: props.collectionImg,
					}}
				/>
				<View style={styles.collectionDetail}>
					<Text style={styles.collectionName}>
						{props.collectionName}
					</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	collectionItem: {
		width: '45%',
		height: 180,
		borderRadius: 6,
		overflow: 'hidden',
		elevation: 10,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		backgroundColor: 'white',
	},
	collectionImg: {
		width: '100%',
		height: '80%',
	},
	collectionDetail: {
		width: '100%',
		display: 'flex',
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	collectionName: {
		fontSize: 12,
		textTransform: 'uppercase',
		letterSpacing: 2,
		fontFamily: 'Montserrat-bold',
		color: 'gray',
	},
});

export default CollectionItem;