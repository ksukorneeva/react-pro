import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Modal.scss';

const Modal = ({
    type = 'default',
    text,
    closeModal,
    successDeleted,
    successEdit,
    changeEditInput,
}) => {
    if (type === 'edit') {
        return (
            <div className='modal'>
                <Input
                    value={text}
                    id={text}
                    change={changeEditInput}
                    text='Title'
                />
                <div className='modal__actions'>
                    <Button
                        text='Save'
                        color='btn-primary'
                        click={successEdit}
                    />
                    <Button
                        text='No Save'
                        color='btn-danger'
                        click={closeModal}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className='modal'>
            <p className='modal__text'>{text}</p>
            <div className='modal__actions'>
                <Button text='Yes' color='btn-primary' click={successDeleted} />
                <Button text='No' color='btn-danger' click={closeModal} />
            </div>
        </div>
    );
};

export default Modal;
