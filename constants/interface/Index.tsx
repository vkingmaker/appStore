export interface ICollection {
	collectionName: string,
	collectionImg: string
};

export interface IProduct {
	productUri: string,
	productName: string,
	productPrice: string
}

export interface IProducts {
	data: IProduct[]
}