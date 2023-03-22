import React, { HTMLAttributes, LiHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import MenuIcon from '/public/icons/icon-menu.svg';
import MenuCloseIcon from '/public/icons/icon-menu-close.svg';
import Link from 'next/link';
import { UrlObject } from 'url';

interface IMenuProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const Menu: React.FC<IMenuProps> = ({
                                        open, onOpen, onClose, className,
                                        children, ...props
                                    }) => {
    return (
        <nav className={cn(styles.menu, {
            [styles.open]: open,
        }, className)}
             {...props}
        >
            <div className={styles.overlay}
                 onClick={onClose}
            />
            <ul className={styles.menuList}>
                <li className={styles.closeMenuItem}>
                    <button className={cn(styles.menuButton, styles.close)}
                            type={'button'}
                            title={'Menu Close'}
                            onClick={onClose}
                    >
                        <MenuCloseIcon />
                    </button>
                </li>

                {children}
            </ul>
            <button className={styles.menuButton}
                    type={'button'}
                    title={'Menu'}
                    onClick={onOpen}
            >
                <MenuIcon />
            </button>
        </nav>
    );
};

interface IMenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
    href: string | UrlObject;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, className, children, ...props }) => {
    return (
        <li className={cn(styles.menuItem, className)}
            {...props}
        >
            <Link href={href}>
                <a>
                    {children}
                </a>
            </Link>
        </li>
    );
};

export { Menu, MenuItem };
