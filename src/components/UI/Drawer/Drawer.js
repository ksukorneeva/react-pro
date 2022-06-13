import React from 'react';
import './Drawer.scss';

const Drawer = ({ closeModal }) => (
    <div className='drawer' onClick={closeModal} />
);

export default Drawer;
