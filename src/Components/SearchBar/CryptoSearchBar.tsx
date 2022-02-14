import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { GeneralButton, GeneralInput } from '..'
import { CColor, wp } from '../../Global/Style'
import { CryptoSearchBarType } from '../../Utils/Types'

function CryptoSearchBar(props: CryptoSearchBarType) {
	const { isLoading, onChangeText, value, placeholder, onPress } = props
	return (
		<View style={styles.container}>
			<GeneralInput
				value={value}
				placeholder={placeholder}
				onChangeText={(text) => onChangeText(text)}
			/>
			<View style={styles.button}>
				<GeneralButton
					onPress={onPress}
					title={
						isLoading ? (
							<Text>
								<ActivityIndicator
									size='small'
									color={CColor.black}
									style={{ marginRight: wp(5) }}
								/>{' '}
								{'Add'}
							</Text>
						) : (
							'Add'
						)
					}
					isLoading={isLoading}
					extraStyle={{
						marginTop: 0,
						backgroundColor: CColor.yellow,
						width: wp(40),
						alignSelf: 'auto',
						borderRadius: wp(2)
					}}
					disable={
						value && value.length > 2 ? (isLoading ? true : false) : true
					}
				/>
			</View>
		</View>
	)
}
export { CryptoSearchBar }

const styles = StyleSheet.create({
	button: {
		alignItems: 'flex-end'
	},
	container: {
		width: wp(90)
	}
})
