import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import './index.scss';
import Home from './pages/Home.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Home />);
