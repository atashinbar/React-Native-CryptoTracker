import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function DefaultHeader(props: any) {
	const { navigation } = props
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Text>{'<'} Back To List</Text>
		</TouchableOpacity>
	)
}
