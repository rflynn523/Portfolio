import React from "react";
import TechChip from "../../TechChip";

class JobDetails extends React.Component {
  render() {
    const { bullet_points, technology } = this.props.job_info;

    return (
      <div className="pb-2 poppins-regular">
        {/* Bullet Points */}
        <div className="mb-4">
          <ul className="list-disc px-4 text-md">
            {bullet_points.map((bullet, index) => (
              <li key={index} className="p-2">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Chips with the tech used */}
        <div className="flex flex-wrap gap-2">
          {technology.map((tech, index) => (
            <TechChip key={index} technology={tech} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default JobDetails;
