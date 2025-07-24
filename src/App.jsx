import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import RepoInformation from './RepoInformation'
import axios from 'axios'
import './App.css'

function Home({ data }) {
  return (
    <div>
      <h1>GoDaddy Repositories</h1>
      {data.map((repo) => (
        <div key={repo.id}>
          <Link className='repo-link' to={`/repo/${repo.name}`} state={repo}>
            {repo.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('https://api.github.com/orgs/godaddy/repos')
      .then((response) => { 
        setData(response.data); 
        setLoading(false);
        console.log("Success", response.data);
      })
      .catch((err) => { 
        setError(err);
        setLoading(false);
      })
  }, []);

  // in the case of api taking longer than expected we display loading message.
  if (loading) return <div>Loading GoDaddy Repos...</div>;
  // in the case of an error, display error message
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/repo/:name" element={<RepoInformation />} />
    </Routes>
  )
}

export default App