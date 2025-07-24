import { useLocation, Link } from 'react-router-dom';

export default function RepoInformation() {
    const location = useLocation();
    const repo = location.state;
    if (!repo) return <div>No repo found</div>;
    return (
        <div>
            <Link to="/">Back Home</Link>
            <h2>Repo Name: {repo.name}</h2>
            <p>Repo Description: {repo.description}</p>
            <p>Repo URL: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></p>
            <p>Repo Language(s): {repo.language}</p>
            <p>Forks: {repo.forks}</p>
            <p>Open Issues: {repo.open_issues}</p>
            <p>Watchers: {repo.watchers}</p>
        </div>
    )
}