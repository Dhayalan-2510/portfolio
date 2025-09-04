import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const MouseTrail: React.FC = () => {
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      trailRef.current.push(newPoint);

      // Limit trail length
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }

      // Create trail element
      const trailElement = document.createElement('div');
      trailElement.className = 'mouse-trail';
      trailElement.style.left = `${e.clientX - 10}px`;
      trailElement.style.top = `${e.clientY - 10}px`;
      
      document.body.appendChild(trailElement);

      // Remove trail element after animation
      setTimeout(() => {
        if (document.body.contains(trailElement)) {
          document.body.removeChild(trailElement);
        }
      }, 1000);
    };

    // Cursor glow effect
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    const handleMouseMoveGlow = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX - 20}px`;
      cursorGlow.style.top = `${e.clientY - 20}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleMouseMoveGlow);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleMouseMoveGlow);
      if (document.body.contains(cursorGlow)) {
        document.body.removeChild(cursorGlow);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none" />;
};

export default MouseTrail;