import { useState, useEffect } from "react";
import Project from "../../components/Project/Project.component";
// import { FaGithub } from "react-icons/fa"; // Import FontAwesome GitHub icon
import "./ProjectPage.css";

const ProjectPage = () => {
    const [repos, setRepos] = useState([]);
    const [ repoRows, setRepoRows ] = useState([]);

    const chunkArray = (arr, size) => {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            console.log("i =", i);
            result.push(arr.slice(i, i + size));
            console.log("result after i = ", i, " is ", result);
        }
        return result;
    };

    useEffect(() => {
        fetch("https://api.github.com/users/vipul-sawant/repos")
  .then((response) => response.json())
  .then((data) =>
    data
      .filter((repo) => repo.topics.includes("resume"))
      .map((repo) => ({
        ...repo,
        liveUrl: `https://vipul-sawant.github.io/${repo.name}`,
      }))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sorting by date (latest first)
  )
  .then((data) => setRepos(data))
  .catch((error) => console.error("Error fetching repos:", error));

    }, []);

    useEffect(()=>{

        setRepoRows(repos);
    }, [repos]);

    return (
        <div className="project-section">
            <h2 className="project-title">My Projects</h2>
            {repos.length === 0 ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading projects...</p>
                </div>
            ) : (
                <div className="project-grid">
                    {repos.map(repo => (
                        <Project key={repo.name} repo={repo} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectPage;
