import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Post.scss';
import Button from '../../components/UI/Button/Button';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const posts = useSelector((state) => state.posts);
    useEffect(() => {
        setPost(posts.find((post) => post.id === id));
    }, [id, posts]);
    console.log(post);

    return (
        <div className='post'>
            <h1>Post</h1>
            <p>Title: {post?.title}</p>
            <NavLink to='/'>
                <Button text='Назад' color='btn-success' />
            </NavLink>
        </div>
    );
};

export default Post;
