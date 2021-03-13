import { Reducer } from "react";
import { Post } from "../../types";
import { PostsAction, PostsActionTypes } from "./posts.types";

export interface PostsState {
    posts: Post[];
    post: Post | null;
    error: string;
    loading: boolean;
}

const initialState = {
    posts: [] as Post[],
    post: null,
    error: '',
    loading: false
}

export const PostsReducer: Reducer<PostsState, PostsAction> = (state = initialState, action) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return state;
        case PostsActionTypes.LOADING_POSTS:
            return {
                ...state,
                loading: true
            };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                error: '',
                loading: false
            }
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}