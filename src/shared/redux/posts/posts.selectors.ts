import { createSelector } from "reselect";
import { RootState } from "../root-reducers";

const selectPostsState = (state: RootState) => state.posts;

export const selectPosts = createSelector(
    [selectPostsState],
    (state) => state.posts
)

export const selectPost = createSelector(
    [selectPostsState],
    (state) => state.post
)

export const selectPostsError = createSelector(
    [selectPostsState],
    (state) => state.error
)


export const selectPostsLoading = createSelector(
    [selectPostsState],
    (state) => state.loading
)