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

    const isLive = async (url) => {
        try {
          const response = await fetch(`${url}/index.html`, { method: "HEAD" });
      
          // If the response is OK (status 200), the site is live
          return response.ok;
        } catch (error) {
          return false; // If the request fails, assume site is not live
        }
      };
      
      // // Example usage:
      // const url = "https://vipul-sawant.github.io/SimpleTaskManager";
      // isLive(url).then((live) => {
      //   console.log(live ? `${url} is live! ✅` : `${url} is NOT live ❌`);
      // });
      
    useEffect(() => {
      fetch("https://api.github.com/users/vipul-sawant/repos")
      .then((response) => response.json())
      .then(async (data) => {
        const filteredRepos = data
          .filter((repo) => repo.topics.includes("resume"))
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sorting by date (latest first)
    
        const reposWithLiveUrls = await Promise.all(
          filteredRepos.map(async (repo) => {
            const liveUrl = `https://vipul-sawant.github.io/${repo.name}`;
            const live = await isLive(liveUrl);
            console.log(liveUrl, " is live:", live);
            return live ? { ...repo, liveUrl } : repo;
          })
        );
    
        // 🟢 CHUNK the array into subarrays of size 3
        const chunkedRepos = chunkArray(reposWithLiveUrls, 3);
    
        // ✅ Now call setRepos with the chunked array
        setRepos(chunkedRepos);
      })
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
          <div className="project-list">
              {repos.map((row, rowIndex) => (
                  <div key={rowIndex} className="project-row">
                      {row.map((repo) => (
                          <Project key={repo.name} repo={repo} />
                      ))}
                  </div>
              ))}
          </div>
      )}
  </div>
  
    );
};

export default ProjectPage;
