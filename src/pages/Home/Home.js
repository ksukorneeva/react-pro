import React, { useState } from 'react';
import './Home.scss';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '../../components/UI/Drawer/Drawer';
import Modal from '../../components/UI/Modal/Modal';
import { removePost } from '../../store/reducers/postReducer';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const count = posts.length;

    const dispatch = useDispatch();

    const deleteHandler = (e, id) => {
        e.stopPropagation();
        setOpen(!open);
        setDeleteModal(!deleteModal);
        setIdDelete(id);
    };
    const editPost = (e, id) => {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);

        setEditItem(posts.find((post) => post.id === id));
        setOpen(!open);
        setEditModal(!editModal);
    };
    const successDeleted = () => {
        dispatch(removePost(idDelete));
        setOpen(!open);
        setDeleteModal(!deleteModal);
    };
    const closeModal = () => {
        setOpen(false);
        setDeleteModal(false);
        setEditModal(false);
    };
    const changeEditInput = (e) => {
        setEditItem({ ...editItem, title: e.target.value });
    };
    const successEdited = () => {
        dispatch(editPost(editItem));
    };

    return (
        <div className='home'>
            {deleteModal && (
                <Modal
                    closeModal={closeModal}
                    text='Are you deleted this file?'
                    successDeleted={successDeleted}
                />
            )}
            {editModal && (
                <Modal
                    closeModal={closeModal}
                    text={editItem.title}
                    type='edit'
                    changeEditInput={changeEditInput}
                    successEdit={successEdited}
                />
            )}
            {open && <Drawer closeModal={closeModal} />}
            {count ? (
                <h1>Количество постов: {count}</h1>
            ) : (
                <>
                    <h1>Постов нет</h1>{' '}
                    <button>
                        <NavLink to='/create' className='menu__link'>
                            Создать пост
                        </NavLink>
                    </button>
                </>
            )}
            <div className='cards'>
                {posts.map((post) => {
                    return (
                        <div
                            className='card'
                            key={post.id}
                            onClick={() => {
                                navigate(`/post/${post.id}`);
                            }}
                        >
                            <p>{post.title}</p>

                            <div className='card__actions'>
                                <FaPencilAlt
                                    onClick={(e) => editPost(e, post.id)}
                                />
                                <FaTrashAlt
                                    onClick={(e) => deleteHandler(e, post.id)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
