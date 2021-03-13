import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../shared/redux/posts/posts.actions';
import { selectPosts, selectPostsError, selectPostsLoading } from '../../shared/redux/posts/posts.selectors';

const Home = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const loading = useSelector(selectPostsLoading);
    const error = useSelector(selectPostsError);

    const handleClick = () => {
        dispatch(fetchPosts())
    }

    return (
        <div>
            <button onClick={handleClick}>
                Get POSTS
            </button>
            {loading && <span>Loading...</span>}
            {error && <span>Error occured... try later, please</span>}
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home
