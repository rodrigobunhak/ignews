import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import '../styles/repositories.scss';

const respository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
            </ul>
        </section>
    );
}