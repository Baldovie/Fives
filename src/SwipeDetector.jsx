import { useState, useEffect } from 'react';

const SwipeDetector = ({ onSwipe }) => {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState('Swipe to detect');

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      if (startX === null || startY === null) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      detectSwipe(startX, startY, endX, endY);
      setStartX(null);
      setStartY(null);
    };

    const handleMouseDown = (e) => {
      setStartX(e.clientX);
      setStartY(e.clientY);
    };

    const handleMouseUp = (e) => {
      if (startX === null || startY === null) return;
      detectSwipe(startX, startY, e.clientX, e.clientY);
      setStartX(null);
      setStartY(null);
    };

    const detectSwipe = (startX, startY, endX, endY) => {
      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dx) > Math.abs(dy)) {
        setSwipeDirection(dx > 0 ? 'right' : 'left');
      } else {
        setSwipeDirection(dy > 0 ? 'down' : 'up');
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [startX, startY, swipeDirection]);

  return (
    <div>
      Swipe or Drag Here<div id:swipeDir>{swipeDirection}</div>
    </div>
  );
};

export default SwipeDetector;
