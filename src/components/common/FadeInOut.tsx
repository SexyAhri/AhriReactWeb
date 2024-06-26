import React, { useState, useEffect, ReactNode } from "react";

interface FadeInOutProps {
  children: ReactNode;
  duration?: number;
}


const FadeInOut: React.FC<FadeInOutProps> = ({ children, duration = 1000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {isVisible && children}
    </div>
  );
};

export default FadeInOut;
