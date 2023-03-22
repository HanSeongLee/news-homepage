interface IArticleContent {
    thumbnail?: string | {
        mobile: string;
        desktop: string;
    };
    title: string;
    description: string;
}

interface IArticleContentWithLink extends IArticleContent {
    href: string;
}
