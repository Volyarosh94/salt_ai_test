'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './GradientButton.module.css';

type ButtonVariant = 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, variant = 'outline', size = 'md', className = '', ...props }, ref) => {
    const classNames = [styles.button, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classNames} {...props}>
        <span className={styles.content}>{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = 'GradientButton';

