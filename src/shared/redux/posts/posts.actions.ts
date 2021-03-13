import { Post } from "../../types"
import { FetchPostsAction, FetchPostsErrorAction, FetchPostsSuccessAction, LoadingPostsAction, PostsActionTypes } from "./posts.types"


export const fetchPosts = (): FetchPostsAction => {
    return {
        type: PostsActionTypes.FETCH_POSTS
    }
}

export const loadingPosts = (): LoadingPostsAction => {
    return {
        type: PostsActionTypes.LOADING_POSTS
    }
}

export const fetchPostsSuccess = (posts: Post[]): FetchPostsSuccessAction => {
    return {
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsError = (error: string): FetchPostsErrorAction => {
    return {
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: error
    }
}