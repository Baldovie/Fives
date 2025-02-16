import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Fives.css';
import Fives from './Fives.jsx';
import SwipeDetector from './SwipeDetector';

const handleSwipe = (direction) => {
  console.log('Swiped:', direction);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Fives!</h1>
    <Fives />
    <SwipeDetector onSwipe={handleSwipe} />
  </StrictMode>
);
