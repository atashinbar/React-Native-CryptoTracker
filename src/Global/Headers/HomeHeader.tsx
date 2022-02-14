import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function HomeHeader() {
	return (
		<View>
			<Image
				style={styles.avatar}
				source={require('../../../assets/images/a-avatar-img.png')}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	avatar: {
		width: 48,
		height: 48
	}
})
