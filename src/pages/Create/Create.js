import React, { useState } from 'react';
import Input from '../../components/UI/Input/Input';
import './Create.scss';
import Button from '../../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/reducers/postReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Create() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [disabled, setDisabled] = useState(true);

    const changeInputHandler = (e) => {
        setTitle(e.target.value);
        setDisabled(e.target.value ? false : true);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(addPost(title));
        setTitle('');
        setDisabled(!disabled);
        toast.success('Post created');
    };

    return (
        <>
            <form className='form' onSubmit={submitFormHandler}>
                <h2 className='form__title'>Create task</h2>
                <Input
                    id='title'
                    text='Title'
                    change={changeInputHandler}
                    value={title}
                />
                <Input id='desc' text='Description' />
                <div className='form__actions'>
                    <Button
                        text='Create'
                        color='btn-primary'
                        disabled={disabled}
                    />
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default Create;
