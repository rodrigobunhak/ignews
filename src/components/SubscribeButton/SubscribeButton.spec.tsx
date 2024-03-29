import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { SubscribeButton } from '.';

jest.mock('next-auth/react');
jest.mock('next/router')

describe('SubscribeButton component', () => {
    it('should renders correctly', () => {
        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: null,
            status: 'unauthenticated'
        });
        
        render(
            <SubscribeButton />
        )
    
        expect(screen.getByText('Subscribe now')).toBeInTheDocument();
    })

    it('should redirects user to sign in when not authenticated', () => {
        const signInMocked = jest.mocked(signIn);

        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: null,
            status: 'unauthenticated'
        });
        
        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton);

        expect(signInMocked).toHaveBeenCalled();
    });

    it('should redirects to posts when user already has a subscription', () => {
        const useRouterMocked = jest.mocked(useRouter)
        const useSessionMocked = jest.mocked(useSession)
        const pushMock = jest.fn();

        useSessionMocked.mockReturnValueOnce({
            data: {
                user : {
                name: "John Doe",
                email: "john.doe@example.com",
                },
                activeSubscription: 'fake-active-subscription',
                expires: "fake-expires"
            },
            status: "authenticated",
        });

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as never)

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton);

        expect(pushMock).toHaveBeenCalledWith('/posts');

    })
})

