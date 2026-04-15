import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ 
  children, 
  className = '', 
  id,
  containerClassName = '',
  title,
  subtitle
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-md-on-background mb-4 tracking-tight">{title}</h2>}
            {subtitle && <p className="text-lg text-md-on-surface-variant">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
