import { createStore } from 'vuex'
import app from './app'
import user from './user'

export default createStore({
	modules: {
		app: app,
		user: user
	}
})