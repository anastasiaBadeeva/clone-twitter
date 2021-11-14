import { Action } from "redux";
import { AddTweetActionInterface, FeatchAddTweetActionInterface, FetchSetTweetsActionInterface, SetAddFormStateActionInterface, SetTweetsActionInterface, SetTweetsLoadingStateInterface, TweetsActionsType } from "../contracts/actionTypes";
import { TweetsState,LoadingState, Tweet, AddFormState } from "../contracts/state";



export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})
export const featchAddTweet = (payload: string): FeatchAddTweetActionInterface => ({
  type: TweetsActionsType.FEATCH_ADD_TWEET,
  payload,
})
export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});
export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})
export const fetchTweets = (): FetchSetTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateInterface | FetchSetTweetsActionInterface | AddTweetActionInterface | FeatchAddTweetActionInterface
