import { Dimensions } from 'react-native'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
export function wp(percentage: number) {
	const value = (percentage * viewportWidth) / 100
	return Math.round(value)
}
export function hp(percentage: number) {
	const value = (percentage * viewportHeight) / 100
	return Math.round(value)
}
const CColor = {
	black: '#212B36',
	red: '#DE3617',
	green: '#0A8150',
	yellow: '#FBD24D',
	buttonText: '#385775',
	placeholder: '#B7C0C6',
	blue: '#385775',
	white: 'white',
	grey: '#56626E',
	navText: '#385775',
	border: '#E4E8EB'
}

export { CColor }
