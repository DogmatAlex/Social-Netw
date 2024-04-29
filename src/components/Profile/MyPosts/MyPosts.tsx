import React from 'react';
import './MyPosts.scss';
import { useState } from 'react';
import Post from './Post/Post.tsx';

const MyPosts = () => {
    const [posts, setPosts] = useState([]);

    let postsElements = posts.map(p => <Post title={p.title} likesCount={p.likesCount} />);

    const initialState = { title: '' }; // Начальное состояние
    const [formValues, setFormValues] = useState(initialState);

    const onChange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    const addPost = () => {
        const newPost = {
            id: 4,
            title: formValues.title,
            likesCount: 0,
            date: new Date(),
        };
        setPosts([...posts, newPost].sort((a, b) => b.date - a.date));
        setFormValues({ title: '' }); // Очищаем значение textarea после добавления поста
    };

    return (
        <div className="postBlock">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea className="myInput" value={formValues.title} name="title" onChange={onChange} variant="filled"></textarea>
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
