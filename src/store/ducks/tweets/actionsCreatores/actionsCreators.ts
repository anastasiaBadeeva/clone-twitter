import { Action } from "redux";
import { TweetsState,LoadingState, Tweet } from "../contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FEATCH_ADD_TWEET = 'tweets/FEATCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
}
export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FeatchAddTweetActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.FEATCH_ADD_TWEET;
  payload: string
}
export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface FetchSetTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.FETCH_TWEETS;
}
export interface SetTweetsLoadingStateInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
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

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})
export const fetchTweets = (): FetchSetTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateInterface | FetchSetTweetsActionInterface | AddTweetActionInterface | FeatchAddTweetActionInterface
