import React from "react";

import TechChip from "../../TechChip";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;

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
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

          {/* Description */}
          <div className="mb-4">{project.description}</div>

          {/* Links */}
          <div className="mb-4">Links</div>

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
