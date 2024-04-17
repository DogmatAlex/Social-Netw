import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post.tsx';
import state from '../../../redux/state.js';

const MyPosts = () => {
    let postsElements = state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let textP = newPostElement.current.value;
        alert(textP);
    };

    return (
        <div className="postBlock">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className="posts">{postsElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
