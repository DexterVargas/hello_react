import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const trainee = 'Rockstar FE';
// const element = <h1>Hello, {trainee}!</h1>;

// const element = getGreeting('Dexter');

// const element = <a href="https://www.hackerhero.com">Hackerhero</a>;

const kitten = { imgURL: 'https://placekitten.com/200/100' };
const element = <img src={kitten.imgURL}></img>;

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger!</h1>;
}

// root.render(element);
root.render(<Welcome/>);
