import { combineReducers } from 'redux'
import { CryptoReducer } from './CryptoReducer'

export const rootReducer = combineReducers({
	crypto: CryptoReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>
