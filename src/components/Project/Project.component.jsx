import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectComponent = ({repo}) => {
	// console.log("repo :", repo);
	return (
		<div className="project-card">
			<h3 className="project-name">{repo.name}</h3>
			<p className="project-description">{repo.description || "No description available."}</p>
			
			{/* Button Container - Ensures buttons are side by side and aligned at the bottom */}
			<div className="button-container">
				<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-button">
					<FontAwesomeIcon icon={faGithub} className="github-icon" /> GitHub
				</a>
				{repo.liveUrl?.length > 0 && (
					<a href={repo.liveUrl} target="_blank" rel="noopener noreferrer" className="live-button">
						Live Demo
					</a>
				)}
			</div>
		</div>
	
	);
}

export default ProjectComponent;