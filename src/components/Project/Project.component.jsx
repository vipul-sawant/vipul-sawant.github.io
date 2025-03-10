import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectComponent = ({repo}) => {
	return (
			<div className="project-card">
				<h3 className="project-name">{repo.name}</h3>
				<p className="project-description">{repo.description || "No description available."}</p>
				<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-button">
				<FontAwesomeIcon icon={faGithub} className="github-icon" /> View on GitHub
				</a>
			</div>
	);
}

export default ProjectComponent;