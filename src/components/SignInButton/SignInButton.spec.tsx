import { render, screen } from '@testing-library/react';
// import { mocked } from 'jest-mock';
import { useSession } from 'next-auth/react';
import { SignInbutton } from '.';

jest.mock('next-auth/react');

describe('SignInButton component', () => {
    it('should renders correctly when user is not authenticated', () => {
        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValue([null, false])
        
        render(
            <SignInbutton />
        )
    
        expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
    })

    it('should renders correctly when user is authenticated', () => {
        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: {
                user : {
                name: "John Doe",
                email: "john.doe@example.com",
                },
                expires: "fake-expires"
            },
            status: "authenticated",
        });

        render(
            <SignInbutton />
        )
    
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    })
})

