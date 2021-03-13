import { getPosts } from "./posts.api";
import { FetchPostsAction, PostsActionTypes } from "./posts.types";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsError, fetchPostsSuccess, loadingPosts } from "./posts.actions";

export function* fetchPostsAsync() {
    yield put(loadingPosts())
    try {
        const res = yield call(getPosts)
        if (res) {
            yield put(fetchPostsSuccess(res.data))
        }
    } catch (err) {
        yield put(fetchPostsError(err))
    }
}

export function* fetchPostsSaga() {
    yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsAsync);
}

export function* postsSagas() {
    yield all([
        call(fetchPostsSaga)
    ])
}
