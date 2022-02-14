import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View
} from 'react-native'

import { SwipeListView } from 'react-native-swipe-list-view'
import { CColor } from '../../Global/Style'
import { CryptoItemType } from '../../Utils/Types'
import CryptoList from '../List/CryptoList'

interface SwipeDeleteType {
	allCrypto: CryptoItemType[]
	deleteCryptoFunction: (v: string) => void
	refreshAllCryptoFunction: () => void
	isLoading: boolean
}

type dataType = {
	item: CryptoItemType
}

export default function SwipeDelete(props: SwipeDeleteType) {
	const { allCrypto, deleteCryptoFunction, refreshAllCryptoFunction, isLoading } = props

	const renderItem = (data: dataType) => (
		<CryptoList
			id={data.item.id}
			FullName={data.item.FullName}
			symbol={data.item.symbol}
			ImageUrl={data.item.ImageUrl}
			rating={data.item.rating}
			price={data.item.price}
		/>
	)

	const renderHiddenItem = (data: dataType) => (
		<View style={styles.rowBack}>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnRight]}
				onPress={() => deleteCryptoFunction(data.item.symbol)}>
				<Text style={styles.backTextWhite}>Delete</Text>
			</TouchableOpacity>
		</View>
	)

	return (
		<SwipeListView
			useFlatList={true}
			data={allCrypto}
			renderItem={renderItem}
			renderHiddenItem={renderHiddenItem}
			leftOpenValue={0}
			rightOpenValue={-75}
			previewRowKey={'0'}
			previewOpenValue={-40}
			previewOpenDelay={3000}
			refreshing={isLoading}
			onRefresh={() => refreshAllCryptoFunction()}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: CColor.green,
		flex: 1
	},
	backTextWhite: {
		color: CColor.white
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: CColor.white,
		flex: 1,
		flexDirection: 'row'
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		right: 0,
		width: 75
	},
	backRightBtnRight: {
		backgroundColor: CColor.red
	}
})
