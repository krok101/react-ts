import { SET_POSTS } from './action'

const initialState = {
  posts: null
}

const rootReducer = (state = initialState, { type, payload }: any) => {
  switch(type) {
    case SET_POSTS: return { ...state, posts: payload }
  }
  return state
}

export default rootReducer