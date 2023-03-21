import React, { ImgHTMLAttributes } from 'react';

interface IProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    src: string | {
        mobile: string;
        desktop: string;
    };
}

const Picture: React.FC<IProps> = ({ src, ...props }) => {
    return (
        <picture>
            <source srcSet={typeof src === 'string' ? src : src.mobile}
                    media={'(max-width: 1339px)'}
            />
            <source srcSet={typeof src === 'string' ? src : src.desktop}
                    media={'(min-width: 1339px)'}
            />
            <img src={typeof src === 'string' ? src : src.mobile}
                 {...props}
            />
        </picture>
    );
};

export default Picture;
