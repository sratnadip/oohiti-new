import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
}

export function Button({ 
  children, 
  variant = 'filled', 
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 h-10 rounded-full font-medium text-sm transition-all duration-300 active:scale-95 md-state-layer";
  
  const variants = {
    filled: "bg-md-primary text-md-on-primary md-shadow-1 hover:md-shadow-2",
    tonal: "bg-md-secondary-container text-md-on-secondary-container",
    outlined: "border border-md-outline text-md-primary hover:bg-md-primary/5",
    text: "text-md-primary hover:bg-md-primary/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
