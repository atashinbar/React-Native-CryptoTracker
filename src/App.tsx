import * as React from 'react'
import {
	NavigationContainer,
	NavigatorScreenParams,
	DefaultTheme
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddCryptoScreen from './Pages/AddCrypto/AddCryptoScreen'
import HomeHeader from './Global/Headers/HomeHeader'
import DefaultHeader from './Global/Headers/DefaultHeader'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native'
import HomeScreen from './Pages/Home/HomeScreen'
import { CColor } from './Global/Style'

type StackParamList = {}

export type RootStackParamList = {
	Home: NavigatorScreenParams<StackParamList>
	AddCrypto: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()
const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: CColor.white
	}
}

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer theme={MyTheme}>
					<Stack.Navigator
						initialRouteName='Home'
						screenOptions={({ navigation }) => ({
							headerTitle: () => null,
							headerLeft: (props) => (
								<DefaultHeader navigation={navigation} {...props} />
							),
							headerShadowVisible: false
						})}>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{
								headerStyle: {
									backgroundColor: '#385775'
								},
								headerTitle: 'CryptoTracker Pro',
								headerLeft: () => null,
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold'
								},
								headerRight: () => <HomeHeader />
							}}
						/>
						<Stack.Screen name='AddCrypto' component={AddCryptoScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}

export default App
