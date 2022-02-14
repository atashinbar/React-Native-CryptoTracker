import { getCryptoDetails, getCryptoPrice } from '../../Services/CryptoService'
import {
	CryptoActionsEnum,
	CryptoItemType,
	RefreshCryptoPriceType
} from '../../Utils/Types'

export type Action =
	| {
			type: CryptoActionsEnum.FETCH_CRYPTO_START
	  }
	| {
			type: CryptoActionsEnum.FETCH_CRYPTO_SUCCESS
			payload: CryptoItemType
	  }
	| {
			type: CryptoActionsEnum.FETCH_CRYPTO_FAILED
			payload: object
	  }
	| {
			type: CryptoActionsEnum.DELETE_CRYPTO
			payload: string
	  }
	| {
			type: CryptoActionsEnum.ADD_CRYPTO_SYMBOL
			payload: string
	  }
	| {
			type: CryptoActionsEnum.START_REFRESH_ALL_CRYPTO
	  }
	| {
			type: CryptoActionsEnum.SUCCESS_REFRESH_ALL_CRYPTO
			payload: RefreshCryptoPriceType[]
	  }
	| {
			type: CryptoActionsEnum.FAILED_REFRESH_ALL_CRYPTO
			payload: object
	  }

export const startFetchCrypto = () => ({
	type: CryptoActionsEnum.FETCH_CRYPTO_START
})
export const successFetchCrypto = (data: CryptoItemType) => ({
	type: CryptoActionsEnum.FETCH_CRYPTO_SUCCESS,
	payload: data
})
export const failedFetchCrypto = (error: object) => ({
	type: CryptoActionsEnum.FETCH_CRYPTO_FAILED,
	payload: error
})
export const addCryptoSymbol = (symbol: string) => ({
	type: CryptoActionsEnum.ADD_CRYPTO_SYMBOL,
	payload: symbol
})
export const deleteSpecificCrypto = (symbol: string) => ({
	type: CryptoActionsEnum.DELETE_CRYPTO,
	payload: symbol
})
export const startRefreshAllCrypto = () => ({
	type: CryptoActionsEnum.START_REFRESH_ALL_CRYPTO
})
export const successRefreshAllCrypto = (symbols: RefreshCryptoPriceType[]) => ({
	type: CryptoActionsEnum.SUCCESS_REFRESH_ALL_CRYPTO,
	payload: symbols
})
export const failedRefreshAllCrypto = (error: object) => ({
	type: CryptoActionsEnum.FAILED_REFRESH_ALL_CRYPTO,
	payload: error
})

export const getCrypto = (dispatch: (arg0: any) => void, text: string) => {
	dispatch(startFetchCrypto())
	getCryptoDetails
		.get('/', {
			params: {
				fsym: text,
				tsyms: 'USD'
			}
		})
		.then(function (response) {
			// handle success
			// console.log(response.data.Data[Object.keys(response.data.Data)[0]])
			if (response.data.Response == 'Error')
				dispatch(failedFetchCrypto(response.data.Message))
			const newObj = response.data.Data[Object.keys(response.data.Data)[0]]
			const newItem: CryptoItemType = {
				id: newObj.Id,
				FullName: newObj.FullName,
				symbol: newObj.Symbol,
				ImageUrl: 'https://www.cryptocompare.com' + newObj.ImageUrl,
				rating: newObj.Rating ? newObj.Rating.Weiss.Rating : null,
				price: 0
			}
			getCryptoPrice
				.get('/', {
					params: {
						fsym: text,
						tsyms: 'USD'
					}
				})
				.then(function (response2) {
					newItem.price = response2.data.USD
					dispatch(successFetchCrypto(newItem))
					dispatch(addCryptoSymbol(newItem.symbol))
				})
				.catch(function (error2) {
					// handle error
				})
		})
		.catch(function (error) {
			// handle error
			console.log(error)
			dispatch(failedFetchCrypto(error))
		})
}

export const refreshCryptoList = (dispatch: (arg0: any) => void, symbols: string[]) => {
	const newSymbols: RefreshCryptoPriceType[] = []
	dispatch(startRefreshAllCrypto())
	const all = symbols.map((item) => {
		return getCryptoPrice
			.get('/', {
				params: {
					fsym: item,
					tsyms: 'USD'
				}
			})
			.then(function (response) {
				const price = response.data.USD
				newSymbols.push({ symbol: item.toString(), price: price })
			})
			.catch(function (error) {
				// handle error
				dispatch(failedRefreshAllCrypto(error))
			})
	})
	return Promise.all(all).then(() => {
		dispatch(successRefreshAllCrypto(newSymbols))
	})
}
