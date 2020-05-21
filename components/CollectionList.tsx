/** @format */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import CollectionItem from './CollectionItem';
import { ICollection } from '../constants/interface/Index';

const CollectionList = (props: { collections: ICollection[] }) => {
	return (
		<>
    	<Text style={styles.collectionTitle}>Collection</Text>

			<View style={styles.collectionList}>
				{props.collections.map(
					(collection: ICollection, index: number) => {
						return (
							<CollectionItem
								key={index}
								collectionName={collection.collectionName}
								collectionImg={collection.collectionImg}
							/>
						);
					},
				)}
			</View>

		</>
	);
};

const styles = StyleSheet.create({
	collectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 35,
		marginBottom: 20,
	},
	collectionList: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 30,
	},
});

export default CollectionList;
