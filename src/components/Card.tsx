import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'elevated' | 'filled' | 'outlined';
  hoverable?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  variant = 'filled',
  hoverable = false
}: CardProps) {
  const baseStyles = "rounded-md-lg p-6 transition-all duration-300";
  
  const variants = {
    elevated: "bg-md-surface-container md-shadow-1",
    filled: "bg-md-surface-container",
    outlined: "bg-md-surface border border-md-outline"
  };

  const hoverStyles = hoverable ? "hover:md-shadow-2 hover:scale-[1.02] cursor-pointer" : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
