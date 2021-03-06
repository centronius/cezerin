import * as t from './actionTypes'

const initialState = {
	isFetching: false,
	isAuthorized: false,
	emailIsSent: false,
	error: null
};

export default(state = initialState, action) => {
	switch (action.type) {
		case t.AUTHORIZE_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthorized: false,
				emailIsSent: false,
				error: null
			});
		case t.AUTHORIZE_RECEIVE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthorized: false,
				emailIsSent: action.emailIsSent,
				error: action.error
			});
		case t.AUTHORIZE_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthorized: false,
				emailIsSent: false,
				error: action.error
			});
		default:
			return state
	}
}
