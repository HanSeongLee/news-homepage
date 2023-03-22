import React, { ElementType } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps<T extends ElementType = 'button' | 'a'> {
    variant?: 'primary';
    as?: T;
    className?: string;
    href?: string;
}

const Button: React.FC<IProps> = ({ variant, as = 'button', className, ...props }) => {
    return (
        React.createElement(as, {
            className: cn(styles.button, {
                [styles.primary]: variant === 'primary',
            }, className),
            ...props
        })
    );
};

Button.defaultProps = {
    variant: 'primary',
    as: 'button',
};

export default Button;
