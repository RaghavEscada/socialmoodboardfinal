import React from 'react';

interface CurveProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Curve: React.FC<CurveProps> = ({ backgroundColor = "#f1f1f1", children }) => {
  return (
    <div style={{ backgroundColor }}>
      {children}
    </div>
  );
}; 