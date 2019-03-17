import Vue from 'vue'

export function sendData (data) {
	return new Promise((resolve, reject) => {
		Vue.axios.post('https://httpbin.org/post', data)
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
	})
}
export default {
	sendData
}