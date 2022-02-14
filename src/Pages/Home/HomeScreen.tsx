import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { RootStackParamList } from '../../App'
import { rootReducerType } from '../../Redux/Reducers'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CryptoItemType } from '../../Utils/Types'
import { GeneralButton } from '../../Components'
import { wp } from '../../Global/Style'
import SwipeDelete from '../../Components/SwipeDelete/SwipeDelete'
import {
	deleteSpecificCrypto,
	refreshCryptoList
} from '../../Redux/Actions/CryptoActions'
import CryptoList from '../../Components/List/CryptoList'

interface HomeScreenType {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
	allCrypto: CryptoItemType[]
	allSymbols: string[]
	deleteCrypto: (symbol: string) => void
	refreshAllCrypto: (symbols: string[]) => void
	isLoading: boolean
}

function HomeScreen(props: HomeScreenType) {
	const {
		navigation,
		allCrypto,
		deleteCrypto,
		allSymbols,
		refreshAllCrypto,
		isLoading
	} = props

	return (
		<View style={styles.mainContainer}>
			{/* <FlatList
				data={allCrypto}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => {
					return (
						<CryptoList
							id={item.id}
							FullName={item.FullName}
							symbol={item.symbol}
							ImageUrl={item.ImageUrl}
							rating={item.rating}
							price={item.price}
						/>
					)
				}}
			/> */}

			<SwipeDelete
				allCrypto={allCrypto}
				deleteCryptoFunction={(symbol) => deleteCrypto(symbol)}
				refreshAllCryptoFunction={() => refreshAllCrypto(allSymbols)}
				isLoading={isLoading}
			/>
			<GeneralButton
				onPress={() => navigation.navigate('AddCrypto')}
				title='+ Add a CryptoCurrency'
				extraStyle={{ marginTop: wp(3) }}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	}
})
const mapStateToProps = (state: rootReducerType) => ({
	allCrypto: state.crypto.items,
	allSymbols: state.crypto.symbols,
	isLoading: state.crypto.isLoading
})

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
	deleteCrypto: (symbol: string) => dispatch(deleteSpecificCrypto(symbol)),
	refreshAllCrypto: (symbols: string[]) => refreshCryptoList(dispatch, symbols)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
