import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import Logo from 'components/Logo';
import MenuContainer from 'containers/MenuContainer';

interface IProps extends HTMLAttributes<HTMLHeadElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />

                <MenuContainer />
            </Container>
        </header>
    );
};

export default Header;
