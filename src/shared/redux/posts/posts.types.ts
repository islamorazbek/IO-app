import { Post } from "../../types";


export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    LOADING_POSTS = "LOADING_POSTS"
}

export interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

export interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: Post[];
}

export interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export interface LoadingPostsAction {
    type: PostsActionTypes.LOADING_POSTS;
}

export type PostsAction = FetchPostsAction | LoadingPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction;