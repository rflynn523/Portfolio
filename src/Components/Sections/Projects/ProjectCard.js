import React from "react";
import { FaAppStore, FaGithub, FaYoutube } from "react-icons/fa"; // Import icons from react-icons

import TechChip from "../../TechChip";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;

    // Helper function to determine the appropriate icon for the link
    const getLinkIcon = (url) => {
      if (url.includes("github.com")) return <FaGithub size={32} />;
      if (url.includes("youtube.com")) return <FaYoutube size={32} />;
      if (url.includes("apps.apple.com")) return <FaAppStore size={32} />;

      return null;
    };

    return (
      <div className="flex items-center h-full bg-slate bg-opacity-10 backdrop-blur-lg p-5 mx-auto rounded-lg shadow-lg">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-1/3 h-auto object-cover mr-16"
        />

        {/* Everything else on the right */}
        <div className="w-2/3 flex flex-col justify-between space-y-8">
          <div className="flex justify-between pr-8 space-x-4">
            {/* Title */}
            <h2 className="text-2xl font-bold">{project.title}</h2>

            {/* Links */}
            <div className="flex space-x-4">
              {Object.entries(project.links).map(([url, label]) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  {getLinkIcon(url)}
                </a>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">{project.description}</div>

          {/* Tech Used */}
          <div className="mt-auto">
            {project.technology.map((tech, index) => (
              <TechChip key={index} technology={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
