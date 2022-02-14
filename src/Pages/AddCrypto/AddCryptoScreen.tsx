import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { CryptoSearchBar } from '../../Components'
import { getCrypto } from '../../Redux/Actions/CryptoActions'
import { rootReducerType } from '../../Redux/Reducers'
import { AddCryptoScreenType } from '../../Utils/Types'

function AddCryptoScreen(props: AddCryptoScreenType) {
	const [searchCrypto, setSearchCrypto] = useState<string>('')
	return (
		<View style={styles.container}>
			<CryptoSearchBar
				isLoading={props.isLoading}
				placeholder='Type Your Crypto...'
				onChangeText={(text) => setSearchCrypto(text)}
				value={searchCrypto}
				onPress={() => {
					setSearchCrypto('')
					props.getCrypto(searchCrypto)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: '100%',
		justifyContent: 'center'
	}
})

const mapStateToProps = (state: rootReducerType) => ({
	isLoading: state.crypto.isLoading
})

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
	getCrypto: (text: string) => getCrypto(dispatch, text)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCryptoScreen)
