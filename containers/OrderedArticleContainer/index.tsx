import React, { HTMLAttributes } from 'react';
import Article from 'components/Article';

interface IProps extends HTMLAttributes<HTMLOListElement> {

}

const OrderedArticleContainer: React.FC<IProps> = (props) => {
    const articles: IArticleContentWithLink[] = [
        {
            thumbnail: '/img/image-retro-pcs.jpg',
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?',
            href: '#',
        },
        {
            thumbnail: '/img/image-top-laptops.jpg',
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.',
            href: '#',
        },
        {
            thumbnail: '/img/image-gaming-growth.jpg',
            title: 'The Growth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.',
            href: '#',
        },
    ];

    return (
        <ol {...props}>
            {articles.map((article, index) => (
                <li key={index}>
                    <a href={article.href}>
                        <Article variant={'order'}
                                 {...article}
                        />
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default OrderedArticleContainer;
