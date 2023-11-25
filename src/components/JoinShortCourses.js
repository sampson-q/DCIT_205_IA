// JoinShortCourses.js
import React from "react";
import { FiGraduationCap, FiAward } from "react-icons/fi";
import "../styles/JoinShortCourses.css";

function JoinShortCourses() {
//   return (
//     <div className="join-short-courses">
//       <div className="overlay">
//         <div className="content">
//           <h2>Join our Short Course Program</h2>
//           <p>
//             To be able to take full advantage of the opportunities available to
//             this technology-driven area, it is important to acquire new skills.
//             Skills in ICT that will springboard your career.
//           </p>
//         </div>
//         <div className="columns">
//           <div className="column">
//             {/* <FiGraduationCap size={50} color="#fff" /> */}
//             <h3>Expert Instructions</h3>
//             <p>
//               Our instructors have years of industry experience which presents
//               students with a unique opportunity of learning from the best.
//             </p>
//           </div>
//           <div className="column">
//             {/* <FiAward size={50} color="#fff" /> */}
//             <h3>Certification</h3>
//             <p>
//               You earn a certificate of completion from the department after
//               completing and passing the prescribed exams.
//             </p>
//           </div>
//         </div>
//         <button>REGISTER</button>
//       </div>
//     </div>
//   );
// }

    return (
        <div className="video-background">
            
            <video autoPlay loop muted>
                <source src="https://dcs.ug.edu.gh/video-bg.mp4" type="video/mp4" />
            </video>

            <div className="overlay"></div>

            <div className="text-overlay">
                <h1>YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION</h1>
            </div>
        </div>
    );
}


export default JoinShortCourses;