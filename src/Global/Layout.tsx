import React from 'react'
import { View, StyleSheet } from 'react-native'
import { wp } from './Style'

interface LayoutType {
	children: React.ReactNode
}

export default function Layout(props: LayoutType) {
	return <View style={styles.mainContainer}>{props.children}</View>
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: wp(5)
	}
})
