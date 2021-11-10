import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetState;
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store;