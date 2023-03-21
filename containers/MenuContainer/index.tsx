import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from 'components/Menu';

const menuList = [
    {
        name: 'Home',
        href: '#home',
    },
    {
        name: 'New',
        href: '#new',
    },
    {
        name: 'Popular',
        href: '#popular',
    },
    {
        name: 'Trending',
        href: '#tranding',
    },
    {
        name: 'Categories',
        href: '#categories',
    },
];

const MenuContainer: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    }

    const onResize = () => {
        if (window.innerWidth <= 1399) {
            return;
        }
        onClose();
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <Menu open={open}
              onOpen={onOpen}
              onClose={onClose}
        >
            {menuList.map(({ name, href }, index) => (
                <MenuItem key={index}
                          href={href}
                          onClick={onClose}
                >
                    {name}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default MenuContainer;
