import Head from 'next/head';
import styles from './styles.module.scss';

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