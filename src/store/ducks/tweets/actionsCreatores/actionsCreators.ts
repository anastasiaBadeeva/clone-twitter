import { Action } from "redux";
import { Tweet } from "../../../../Components/Tweets";
import { TweetsState,LoadingState } from "../contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}
export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
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
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})
export const fetchTweets = (): FetchSetTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions = SetTweetsActionInterface |SetTweetsLoadingStateInterface | FetchSetTweetsActionInterface
