import { render, screen } from '@testing-library/react';
import { getPrismicClient } from '../../services/prismic';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { getSession } from 'next-auth/react';

const post = {
    slug: 'my-new-post',
    title: 'My New Post',
    content: '<p>Post Excerpt</p>',
    updatedAt: '10 de Abril'
}

jest.mock('../../services/prismic');
jest.mock('next-auth/react');

describe('Post page', () => {
    it('should renders correctly', () => {
        render(<Post post={post} />)

        expect(screen.getByText('My New Post')).toBeInTheDocument();
        expect(screen.getByText('Post Excerpt')).toBeInTheDocument();
    })

    it('should redirects user if no subscription is found', async () => {
        const getSessionMocked = jest.mocked(getSession);

        getSessionMocked.mockResolvedValueOnce({
            activeSubscription: null
        } as any)

        const response = await getServerSideProps({ params: { slug: 'my-new-post'} } as any)

        expect(response).toEqual(
            expect.objectContaining({
                redirect: expect.objectContaining({
                    destination: '/'
                })
            })
        )
    });

    it('should loads initial data', async () => {
        const getSessionMocked = jest.mocked(getSession);
        const getPrismicClientMocked = jest.mocked(getPrismicClient);

        getPrismicClientMocked.mockReturnValueOnce({
            getByUID: jest.fn().mockResolvedValueOnce({
                data: {
                    title: [
                        { type: 'heading', text: 'My New Post' }
                    ],
                    content: [
                        { type: 'paragraph', text: 'Post content' }
                    ]
                },
                last_publication_date: '04-01-2021',
            })
        } as any)

        getSessionMocked.mockResolvedValueOnce({
            activeSubscription: 'fake-active-subscription'
        } as any)

        const response = await getServerSideProps({ params: { slug: 'my-new-post'} } as any)

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    post: {
                        slug: 'my-new-post',
                        title: 'My New Post',
                        content: '<p>Post content</p>',
                        updatedAt: '01 de abril de 2021'
                    }
                }
            })
        )
    })
})