import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './actionsCreatores/actionsCreators'
import { LoadingState, TweetsState } from './contracts/state'

const initialState : TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action:TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED
      break;
    case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;
  
    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break;
      case TweetsActionsType.ADD_TWEET:
        draft.items.push(action.payload)
        break;
    default:
      break;
  }
},initialState)