/** @format */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import CollectionItem from './CollectionItem';
import { ICollection } from '../constants/interface/Product';

const Collection = (props: {collections: ICollection[]}) => {
	return (
		<>
    	<Text style={styles.collectionTitle}>Collection</Text>

			<View>
				{props.collections.map((collection: ICollection) => {
					console.log('COLLECTION', collection);
					return (
						<CollectionItem collectionName={collection.collectionName} collectionImg={collection.collectionImg} />
					)
				})}
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
});

export default Collection;
