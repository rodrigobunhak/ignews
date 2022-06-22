import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInbutton() {
    const { data: session } = useSession();

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04D361" />
            Rodrigo Bunhak
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EbA417" />
            Sign in with Github
        </button>
    )
}