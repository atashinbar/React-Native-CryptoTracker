import axios from 'axios'

axios.interceptors.response.use(
	(response) => {
		return response
	},
	function (error) {
		return Promise.reject(error.response)
	}
)

export default {
	post: axios.post,
	get: axios.get,
	put: axios.put,
	delete: axios.delete
}
