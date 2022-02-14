import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import config from './config.json'

const cryptoDetails: AxiosRequestConfig = {
	baseURL:
		config.searchCryptoServer +
		'?api_key=' +
		config.apiKey +
		'&tsyms=' +
		config.currencySymbold
}
export const getCryptoDetails: AxiosInstance = axios.create(cryptoDetails)

const cryptoPrice: AxiosRequestConfig = {
	baseURL:
		config.searchCryptoPrice +
		'?api_key=' +
		config.apiKey +
		'&tsyms=' +
		config.currencySymbold
}
export const getCryptoPrice: AxiosInstance = axios.create(cryptoPrice)
