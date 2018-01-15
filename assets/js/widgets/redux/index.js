/* eslint-disable global-require */
import { combineReducers } from 'redux';
import chat from '../reducers/chat';
import gameList from '../reducers/gameList';
import storeLoaded from '../reducers/store';
import user from '../reducers/user';
import executionOutput from '../reducers/executionOutput';
import editors from '../reducers/editor';

export default combineReducers({
  gameStatus: require('./GameRedux').reducer,
  editors,
  user,
  chat,
  gameList,
  storeLoaded,
  executionOutput,
});

