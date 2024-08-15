import React from "react";
import { FaAppStore, FaGithub, FaYoutube } from "react-icons/fa";
import Tooltip from "../../Tooltip/Tooltip";
import TechChip from "../../TechChip";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;

    // Helper function to determine the appropriate icon for the link
    const getLinkIcon = (url) => {
      if (url.includes("github.com"))
        return <FaGithub className="size-6 sm:size-8" />;
      if (url.includes("youtube.com"))
        return <FaYoutube className="size-6 sm:size-8" />;
      if (url.includes("apps.apple.com"))
        return <FaAppStore className="size-6 sm:size-8" />;
      return null;
    };

    return (
      <div className="flex flex-col md:flex-row items-center bg-slate bg-opacity-10 backdrop-blur-lg p-4 md:p-5 mx-auto rounded-lg shadow-lg">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-8 rounded-lg"
        />

        {/* Everything else on the right */}
        <div className="w-full md:w-2/3 flex flex-col justify-between space-y-4 md:space-y-8">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>

            {/* Links */}
            <div className="flex space-x-2 md:space-x-4">
              {project.links.map((link, index) => (
                <Tooltip key={index} text={link.tooltip}>
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {getLinkIcon(link.url)}
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="text-sm md:text-base mb-4">{project.description}</div>

          {/* Tech Used */}
          <div className="mt-auto flex flex-wrap gap-2">
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
