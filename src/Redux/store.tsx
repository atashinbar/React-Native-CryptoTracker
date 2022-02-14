import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './Reducers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
	// blacklist: ['crypto']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
