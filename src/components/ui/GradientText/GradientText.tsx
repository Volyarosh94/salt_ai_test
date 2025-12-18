import { HTMLAttributes, forwardRef } from 'react';
import styles from './GradientText.module.css';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface GradientTextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
}

export const GradientText = forwardRef<HTMLElement, GradientTextProps>(
  ({ children, as: Component = 'h1', className = '', ...props }, ref) => {
    const classNames = [styles.text, className].filter(Boolean).join(' ');

    return (
      <Component ref={ref as never} className={classNames} {...props}>
        {children}
      </Component>
    );
  }
);

GradientText.displayName = 'GradientText';

