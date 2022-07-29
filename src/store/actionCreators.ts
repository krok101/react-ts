import { Post } from '../models'
import {
  SET_POSTS
} from './action'

export const setPosts = (payload: Array<Post>) => ({
  type: SET_POSTS,
  payload
})