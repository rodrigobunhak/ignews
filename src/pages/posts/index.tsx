import Head from 'next/head';
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