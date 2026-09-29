import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  className = '',
  ariaLabel,
}) => {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center ${className}`}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
};
