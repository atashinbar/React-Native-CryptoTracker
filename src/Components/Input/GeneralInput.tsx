import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { CColor, wp } from '../../Global/Style'
import { GeneralInputType } from '../../Utils/Types'

function GeneralInput(props: GeneralInputType) {
	const [onfocus, setOnFocus] = useState(false)

	const onFocusFucntion = () => {
		setOnFocus(true)
	}
	const { value, onChangeText, placeholder, extraStyles } = props
	return (
		<TextInput
			onFocus={() => onFocusFucntion()}
			placeholder={placeholder}
			autoCorrect={false}
			value={value}
			onChangeText={onChangeText}
			multiline={false}
			style={[
				styles.input,
				extraStyles,
				{
					height: wp(15),
					borderColor: onfocus ? CColor.yellow : '#B7C0C6',
					backgroundColor: onfocus ? CColor.white : '#FAFBFC'
				}
			]}
		/>
	)
}
export { GeneralInput }

const styles = StyleSheet.create({
	container: {
		padding: wp(5)
	},
	input: {
		borderWidth: 1,
		borderRadius: wp(2),
		paddingHorizontal: wp(4),
		fontSize: wp(4),
		marginBottom: 20,
		paddingVertical: 0
	}
})
