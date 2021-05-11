import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import styles from './style.module.scss';

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts | ignews</title>
			</Head>
		
			<main className={styles.container}>
				<div className={styles.posts}>
					<a href="#">
						<time>12 de março de 2021</time>
						<strong>Build your Responsive website without media query</strong>
						<p>Since the introduction of media queries (before 2000), CSS has evolved and now (in 2021) there are a lot of tricks that can help you drastically reduce the usage of media queries and create an optimized code. I will even show you how to replace multiple media queries with only one CSS declaration.</p>
					</a>
					<a href="#">
						<time>12 de março de 2021</time>
						<strong>Build your Responsive website without media query</strong>
						<p>Since the introduction of media queries (before 2000), CSS has evolved and now (in 2021) there are a lot of tricks that can help you drastically reduce the usage of media queries and create an optimized code. I will even show you how to replace multiple media queries with only one CSS declaration.</p>
					</a>
					<a href="#">
						<time>12 de março de 2021</time>
						<strong>Build your Responsive website without media query</strong>
						<p>Since the introduction of media queries (before 2000), CSS has evolved and now (in 2021) there are a lot of tricks that can help you drastically reduce the usage of media queries and create an optimized code. I will even show you how to replace multiple media queries with only one CSS declaration.</p>
					</a>
				</div>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query([
		Prismic.predicates.at('document.type', 'post')
	], {
		fetch: ['publication.title', 'publication.content'],
		pageSize: 100,
	})

	console.log(JSON.stringify(response, null, 2))

	return {
		props: {}
	}
}