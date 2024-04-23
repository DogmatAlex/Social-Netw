/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Post.scss';

const Post = props => {
    return (
        <div>
            <img className="avaUser" src="https://farnedo.ru/news/wp-content/uploads/2023/06/thlpw215g-u.jpg"></img>
            {props.title}
            <div>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    );
};

export default Post;
