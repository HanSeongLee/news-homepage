import React, { HTMLAttributes } from 'react';
import Article from 'components/Article';

interface IProps extends HTMLAttributes<HTMLUListElement> {

}

const NewArticleContainer: React.FC<IProps> = (props) => {
    const articles: IArticleContentWithLink[] = [
        {
            title: 'Hydrogen VS Electric Cars',
            description: 'Will hydrogen-fueled cars ever catch up to EVs?',
            href: '#',
        },
        {
            title: 'The Downsides of AI Artistry',
            description: 'What are the possible adverse effects of on-demand AI image generation?',
            href: '#',
        },
        {
            title: 'Is VC Funding Drying Up?',
            description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
            href: '#',
        },
    ];

    return (
        <ul {...props}>
            {articles.map((article, index) => (
                <li key={index}>
                    <a href={article.href}>
                        <Article {...article} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NewArticleContainer;
