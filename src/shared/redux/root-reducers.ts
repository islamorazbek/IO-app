import { Reducer } from 'react';
import { $CombinedState, combineReducers } from 'redux';
import { PostsReducer, PostsState } from './posts/posts.reducer';

const rootReducers = combineReducers({
    posts: PostsReducer
});

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    posts: PostsState;
}

// export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
