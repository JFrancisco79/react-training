import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <StarRating maxRating={10} color="red" size={30} />
    <StarRating maxRating={7} color="blue" size={20} />
    <StarRating /> */}
    </React.StrictMode>
);
