import {combineReducers} from 'redux';
import pageReducer from './pageReducer';

export default combineReducers({
	pageData: pageReducer
});