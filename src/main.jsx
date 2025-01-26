import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Sevens.css';
import Sevens from './Sevens.jsx';
import Number from './Number.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Number id="numberTwo" style="number-tile two" value="2" />
    <h1>Fives!</h1>
    <Sevens />
  </StrictMode>
);
