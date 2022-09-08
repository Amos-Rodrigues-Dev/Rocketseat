import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';

import Prismic from '@prismicio/client';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    },
  );

  const posts = response?.results.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt:
        post.data.content.find(
          (content: { type: string; text: string }) =>
            content.type === 'paragraph' || content.type === 'heading3',
        )?.text ?? '',
      updatedAt: new Date(post.last_publication_date!).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });

  return {
    props: { posts },
  };
};
