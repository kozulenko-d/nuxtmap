import Vue from 'vue'
import Vuex from 'vuex'

// Use Vuex in Vue application
Vue.use(Vuex)

export const state = () => ({
	companyName: 'Global Message Services Ukraine LLC',
	companyEmail: 'info@gms-worldwide.com',
	mainPhoneNumber: '+41 41 544 62 00'
})

export const mutations = {
	setMainPhoneNumber (state, payload) {
		state.mainPhoneNumber = payload
	}
}

export const actions = {
	setMainPhoneNumber (context, str) {
		context.commit('setMainPhoneNumber', str)
	}
}

const getters = {
	getMainPhoneNumber (state) {
		return state.mainPhoneNumber
	}
}

const store = () => new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: process.env.NODE_ENV === 'development'
})

export default store