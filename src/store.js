import { createStore, applyMiddleware } from 'redux';
import thunkMiddlewere from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => next(action);

const store = createStore(reducer, applyMiddleware(thunkMiddlewere, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
	setTimeout(() => {
		dispatch({
			type: "DELAYD_ACTION",
		});
	}, timeout);
};
store.dispatch(delayedActionCreator(2000));
export default store;
