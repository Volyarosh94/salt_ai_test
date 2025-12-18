import { HTMLAttributes, forwardRef } from 'react';
import styles from './Typography.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElement = 'p' | 'span' | 'div';
type TypographyElement = HeadingLevel | TextElement;

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption';

type TypographyColor = 'primary' | 'secondary' | 'muted' | 'inherit';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyElement;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

const variantMapping: Record<TypographyVariant, TypographyElement> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children,
      as,
      variant = 'body',
      color = 'primary',
      className = '',
      ...props
    },
    ref
  ) => {
    const Component = as || variantMapping[variant];

    const classNames = [
      styles.typography,
      styles[variant],
      styles[`color-${color}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component ref={ref as never} className={classNames} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

