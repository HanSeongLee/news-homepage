import type { NextPage } from 'next';
import styles from './style.module.scss';
import Container from 'components/Container';
import Article from 'components/Article';
import Button from 'components/Button';
import NewArticleContainer from 'containers/NewArticleContainer';
import OrderedArticleContainer from 'containers/OrderedArticleContainer';
import Header from 'components/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container className={styles.container}>
                    <section className={styles.headlineSection}>
                        <Article variant={'headline'}
                                 thumbnail={{
                                     mobile: '/img/image-web-3-mobile.jpg',
                                     desktop: '/img/image-web-3-desktop.jpg',
                                 }}
                                 title={'The Bright Future of Web 3.0?'}
                                 description={'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?'}
                        >
                            <Button as={'a'}
                                    href={'#'}
                            >
                                Read More
                            </Button>
                        </Article>
                    </section>
                    <section className={styles.newArticleSection}>
                        <h2 className={styles.title}>
                            New
                        </h2>
                        <NewArticleContainer className={styles.newArticleContainer} />
                    </section>
                    <section>
                        <OrderedArticleContainer className={styles.orderedArticleContainer} />
                    </section>
                </Container>
            </main>
        </>
    );
}

export default Home
