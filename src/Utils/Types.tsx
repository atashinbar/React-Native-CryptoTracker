export interface CryptoItemType {
	id: number
	FullName: string
	symbol: string
	ImageUrl: string
	rating: string
	price: number
}

export interface GeneralInputType {
	value: string
	onChangeText: (v: string) => void
	placeholder?: string
	extraStyles?: object
}

export interface GeneralButtonType {
	onPress: (v: any) => void
	title: React.ReactNode | string | undefined
	disable?: boolean
	extraStyle?: object
	isLoading?: boolean
}
export interface CryptoSearchBarType {
	isLoading: boolean
	onChangeText: (v: string) => void
	value: string
	placeholder?: string
	onPress: (v: string) => void
}

export interface AddCryptoScreenType {
	isLoading: boolean
	getCrypto: (v: string) => void
	searchText: string
	setSearchText: (v: string) => void
	message?: string
}

export enum CryptoActionsEnum {
	FETCH_CRYPTO_START = 'FETCH_CRYPTO_START',
	FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS',
	FETCH_CRYPTO_FAILED = 'FETCH_CRYPTO_FAILED',
	DELETE_CRYPTO = 'DELETE_CRYPTO',
	ADD_CRYPTO_SYMBOL = 'ADD_CRYPTO_SYMBOL',
	START_REFRESH_ALL_CRYPTO = 'START_REFRESH_ALL_CRYPTO',
	SUCCESS_REFRESH_ALL_CRYPTO = 'SUCCESS_REFRESH_ALL_CRYPTO',
	FAILED_REFRESH_ALL_CRYPTO = 'FAILED_REFRESH_ALL_CRYPTO'
}

export interface CryptoReducerPropsType {
	items: CryptoItemType[]
	isLoading: boolean
	message: string
	symbols: string[]
}

export interface RefreshCryptoPriceType {
	symbol: string
	price: number
}
