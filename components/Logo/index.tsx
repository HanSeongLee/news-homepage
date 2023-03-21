import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import LogoSVG from '/public/logo.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {

}

const Logo: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <Link href={'/'}>
            <a className={cn(styles.logo, className)}
               {...props}
            >
                <h1 title={process.env.NEXT_PUBLIC_TITLE}>
                    <LogoSVG className={styles.symbol} />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
