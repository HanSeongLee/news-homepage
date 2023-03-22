import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Picture from 'components/Picture';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IArticleContent {
    variant?: 'headline' | 'default' | 'order';
    number?: number;
    footer?: React.ReactNode;
}

const Article: React.FC<IProps> = ({
                                       variant, thumbnail, title, description,
                                       number, children, className, ...props
                                   }) => {
    return (
        <article className={cn(styles.headlineArticle, {
            [styles.headline]: variant === 'headline',
            [styles.default]: variant === 'default',
            [styles.order]: variant === 'order',
        }, className)}
                 {...props}
        >
            {thumbnail && (
                <header className={styles.header}>
                    <Picture className={styles.image}
                             src={thumbnail}
                             alt={''}
                    />
                </header>
            )}
            <section className={styles.body}>
                {React.createElement(variant === 'default' ? 'h3' : 'h2', {
                    className: styles.title,
                    children: title,
                })}
                <div>
                    <p className={styles.description}>
                        {description}
                    </p>

                    {children && (
                        <footer className={styles.footer}>
                            {children}
                        </footer>
                    )}
                </div>
            </section>
        </article>
    );
};

Article.defaultProps = {
    variant: 'default',
};

export default Article;
