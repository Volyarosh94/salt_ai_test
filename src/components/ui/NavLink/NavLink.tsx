'use client';

import { AnchorHTMLAttributes, forwardRef } from 'react';
import styles from './NavLink.module.css';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, href, className = '', ...props }, ref) => {
    const classNames = [styles.link, className].filter(Boolean).join(' ');

    return (
      <a ref={ref} href={href} className={classNames} {...props}>
        <span className={styles.text}>{children}</span>
        <span className={styles.textGradient} aria-hidden="true">
          {children}
        </span>
      </a>
    );
  }
);

NavLink.displayName = 'NavLink';

