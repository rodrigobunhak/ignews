import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';

export default function Posts() {
    return (
        <>
            <Head>
                <title> Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with bla bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid enim quis error, laudantium minus porro. Inventore, exercitationem quisquam. Qui iste temporibus placeat sunt voluptatem dolor cupiditate quisquam laboriosam eum.</p>
                    </a>

                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with bla bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid enim quis error, laudantium minus porro. Inventore, exercitationem quisquam. Qui iste temporibus placeat sunt voluptatem dolor cupiditate quisquam laboriosam eum.</p>
                    </a>

                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with bla bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid enim quis error, laudantium minus porro. Inventore, exercitationem quisquam. Qui iste temporibus placeat sunt voluptatem dolor cupiditate quisquam laboriosam eum.</p>
                        
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.getByType('post', {
        pageSize: 100,
    })

    console.log(response)

    return {
        props: {}
    }
}