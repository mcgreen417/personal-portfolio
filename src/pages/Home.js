import React from 'react';
import './Style.css';
import Navbar from '../components/Navbar/Navbar';
import { ReactComponent as WaveTop } from '../imgs/wave-decoration-top-standard.svg';

function home() {
    return (
        <div>
            <Navbar />
            <WaveTop />
        </div>
    )
}

export default home;