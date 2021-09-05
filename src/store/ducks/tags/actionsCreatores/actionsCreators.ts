import { Action } from "redux";
import { TagsState,LoadingState } from "../contracts/state";

export enum TagsActionsType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}
export interface SetTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_TAGS;
  payload: TagsState['items'];
}
export interface FetchSetTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.FETCH_TAGS;
}
export interface SetTagsLoadingStateInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})
export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})
export const fetchTags = (): FetchSetTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})

export type TagsActions = SetTagsActionInterface |SetTagsLoadingStateInterface | FetchSetTagsActionInterface
