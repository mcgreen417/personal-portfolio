import React from 'react';
import './Style.css';
import Navbar from '../components/Navbar/Navbar';
import { ReactComponent as WaveTop } from '../imgs/wave-decoration-top-standard.svg';
import { ReactComponent as WaveBottom } from '../imgs/wave-decoration-bottom-standard.svg';

function projects() {
    return (
        <div>
            <Navbar />
            <WaveTop />
            <div className="homepageFocus">
                <h1> Welcome to my Projects page!</h1>
                <h2>It's currently in progress, so don't mind the mess.</h2>
            </div>
            <WaveBottom className="bottomDecoration"/>
        </div>
    )
}

export default projects;