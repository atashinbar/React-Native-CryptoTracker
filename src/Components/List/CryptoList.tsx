import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { CColor, wp } from '../../Global/Style'
import { CryptoItemType } from '../../Utils/Types'

export default function CryptoList(props: CryptoItemType) {
	const { id, ImageUrl, FullName, price, rating, symbol } = props
	return (
		<View style={styles.cryptoWrap}>
			<View>
				<Image source={{ uri: ImageUrl }} style={styles.image} />
			</View>
			<View style={styles.cryptoContentWrap}>
				<View>
					<Text style={styles.cryptoFullName}>{FullName}</Text>
					<Text style={styles.cryptoSymbol}>{symbol}</Text>
				</View>
				<View>
					<Text style={styles.cryptoPrice}>$ {price}</Text>
					<Text
						style={[
							styles.cryptoRating,
							rating != 'A+' && rating != 'B+' && { color: CColor.red }
						]}>
						{rating}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cryptoWrap: {
		flexDirection: 'row',
		paddingVertical: wp(5),
		paddingHorizontal: wp(5),
		borderBottomColor: CColor.border,
		borderBottomWidth: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		justifyContent: 'center'
	},
	image: {
		width: 48,
		height: 48,
		marginRight: wp(1),
		borderRadius: 50
	},
	cryptoContentWrap: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center'
	},
	cryptoFullName: {
		fontSize: 16,
		fontWeight: '600',
		color: CColor.black,
		lineHeight: 24
	},
	cryptoSymbol: {
		fontSize: 14,
		color: CColor.grey,
		fontWeight: '400'
	},
	cryptoPrice: {
		fontSize: 16,
		fontWeight: '600',
		color: CColor.black,
		lineHeight: 24
	},
	cryptoRating: {
		fontSize: 14,
		color: CColor.green,
		fontWeight: '400',
		textAlign: 'right'
	}
})
