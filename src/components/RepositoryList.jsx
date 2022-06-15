import { RepositoryItem } from "./RepositoryItem";

const respository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
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