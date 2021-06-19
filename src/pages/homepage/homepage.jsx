import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <Link className="sections selectSections" to="/mileage">
            <h1 className="name">Mileage Predictor</h1>
        </Link>
        <Link className="sections selectSections" to="/handwriting">
            <h1 className="name">Handwriting Predictor</h1>
        </Link>
        <Link className="sections" to="/handwriting">
            <h1 className="name">Random Predictor</h1>
        </Link>
    </div>
);

export default Homepage;