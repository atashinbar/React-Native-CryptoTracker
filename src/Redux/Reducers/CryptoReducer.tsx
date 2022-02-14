import { CryptoActionsEnum, CryptoReducerPropsType } from '../../Utils/Types'
import { Action } from '../Actions/CryptoActions'

const initialState: CryptoReducerPropsType = {
	items: [],
	isLoading: false,
	message: '',
	symbols: []
}

export const CryptoReducer = (
	state: CryptoReducerPropsType = initialState,
	action: Action
) => {
	switch (action.type) {
		case CryptoActionsEnum.FETCH_CRYPTO_START:
			return { ...state, isLoading: true, message: '' }
		case CryptoActionsEnum.FETCH_CRYPTO_SUCCESS:
			if (state.items.some((crypto) => crypto.id === action.payload.id)) {
				return {
					...state,
					isLoading: false,
					message: 'Your crypto is in list'
				}
			} else {
				return {
					...state,
					isLoading: false,
					items: [...state.items, action.payload],
					message: 'Your crypto is added successfully!'
				}
			}

		case CryptoActionsEnum.FETCH_CRYPTO_FAILED:
			return {
				...state,
				isLoading: false,
				message: 'Faild to load crypto, Please try another one!'
			}
		case CryptoActionsEnum.ADD_CRYPTO_SYMBOL:
			if (state.symbols.some((crypto) => crypto === action.payload)) {
				return {
					...state,
					isLoading: false
				}
			} else {
				return {
					...state,
					isLoading: false,
					symbols: [...state.symbols, action.payload],
					message: 'Your crypto symbol is added successfully!'
				}
			}
		case CryptoActionsEnum.START_REFRESH_ALL_CRYPTO:
			return { ...state, isLoading: true, message: '' }
		case CryptoActionsEnum.SUCCESS_REFRESH_ALL_CRYPTO:
			//console.log(action.payload)
			action.payload.map((item) => {
				const objIndex = state.items.findIndex((obj) => obj.symbol == item.symbol)
				state.items[objIndex].price = item.price
			})
			console.log(state.items)
			return {
				...state,
				isLoading: false,
				items: state.items,
				message: 'Your list is updated successfully!'
			}
		case CryptoActionsEnum.DELETE_CRYPTO:
			const newItems = state.items.filter((item) => item.symbol !== action.payload)
			const newSymbols = state.symbols.filter((item) => item !== action.payload)
			return { ...state, items: newItems, message: '', symbols: newSymbols }
		default:
			return state
	}
}
