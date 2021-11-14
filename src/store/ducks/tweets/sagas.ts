import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { addTweet, setTweets, setTweetsLoadingState } from './actionsCreatores/actionsCreators';
import { FeatchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest():any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* featchAddTweetRequest({payload}: FeatchAddTweetActionInterface):any {
  try {
    const data : Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
       user: {
         fullname :  "TEST" ,
         username :  "test" ,
         avatarUrl : "https://source.unsplash.com/random/100x100?4"
      }
    }
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FEATCH_ADD_TWEET, featchAddTweetRequest);
}

