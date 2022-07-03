import { DictionaryAction, DictionaryActionTypes, DictionaryState } from "../../types/dictionary";

const initialState: DictionaryState = {
  words: [],
  loading: false,
  error: null
}

export const dictionaryReducer = (state = initialState, action: DictionaryAction): DictionaryState => {
  switch (action.type) {
    case DictionaryActionTypes.FETCH_WORDS:
      return {loading: true, error: null, words: []};
    case DictionaryActionTypes.FETCH_WORDS_SUCCESS:
      return {loading: false, error: null, words: action.payload};
    case DictionaryActionTypes.FETCH_WORDS_ERROR:
      return {loading: false, error: action.payload, words: []};
    default:
      return state;
  }
}