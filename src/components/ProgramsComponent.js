// ProgramsComponent.js

import React from "react";
import "../styles/ProgramsComponent.css";

function ProgramsComponent() {
  return (
    <div className="programs-container">
      <div className="program-column">
        <button className="column-header">Short Courses</button>
        <div className="column-body">
          {/* Body content for Program 1 */}
          <p>Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public.</p>
        </div>
        <div className="column-footer">
          <button>Read more</button>
        </div>
      </div>

      <div className="program-column">
        <button className="column-header">Ungergraduate Programmes</button>
        <div className="column-body">
          {/* Body content for Program 2 */}
          <p>Open the door to sought-after technology careers with a world-class Bachelor of Science in Computer Science degree.</p>
        </div>
        <div className="column-footer">
          <button>Read more</button>
        </div>
      </div>

      <div className="program-column">
        <button className="column-header">MPhil and Msc Programmes</button>
        <div className="column-body">
          {/* Body content for Program 3 */}
          <p>Embrace world class gradate education with unique blend of cutting-edge research and industry experience.</p>
        </div>
        <div className="column-footer">
          <button>Read more</button>
        </div>
      </div>

      <div className="program-column">
        <button className="column-header">PhD Programmes</button>
        <div className="column-body">
          {/* Body content for Program 4 */}
          <p>Our PHDs lead the effort to extend the boundaries of knowledge through quality and industry relevant research.</p>
        </div>
        <div className="column-footer">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default ProgramsComponent;