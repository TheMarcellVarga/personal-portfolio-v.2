import { useEffect, useState } from 'react';

export default function MouseTrailer() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleHoverableElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('hoverable');
      
      setIsHovering(!!isHoverable);
    };

    // Only add listeners on client side
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleHoverableElements);
      
      return () => {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleHoverableElements);
      };
    }
  }, []);

  // Only render on client side
  if (!mounted) return null;

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <div
      className={`mouse-trailer ${visible ? 'visible' : ''} ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    />
  );
} 