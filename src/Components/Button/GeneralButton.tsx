import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CColor, wp } from '../../Global/Style'
import { GeneralButtonType } from '../../Utils/Types'

function GeneralButton(props: GeneralButtonType) {
	const { onPress, title, disable, extraStyle } = props
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			disabled={disable}
			style={[styles.buttonStyle, extraStyle]}
			onPress={onPress}>
			<Text
				style={[
					styles.textStyle,
					disable && { color: 'rgba(56, 87, 117, 0.2)' }
				]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
export { GeneralButton }
const styles = StyleSheet.create({
	buttonStyle: {
		marginTop: wp(20),
		padding: 20,
		alignSelf: 'stretch',
		textAlign: 'center',
		alignItems: 'center'
	},
	textStyle: {
		fontSize: 18,
		color: CColor.black
	}
})
