import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import About from './pages/About/About';
import Post from './pages/Post/Post';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/post/:id' element={<Post />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
