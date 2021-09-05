import { combineReducers } from 'redux'
import { tagsReducer } from './ducks/tags/reducer'
import { tweetReducer } from './ducks/tweets/reducer'
export const rootReducer = combineReducers({
  tweets: tweetReducer,
  tags: tagsReducer
})