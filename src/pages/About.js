import React from "react";
import "../styles/Pages.css";
import orgImage from '../assets/org.jpg';
import comImage from '../assets/community.jpg';
import disImage from '../assets/distance.jpg';
import buildingFutureVid from '../assets/buildingfuture.mp4';
import backgroundVideo from "../assets/video-bg.mp4";

function About() {
    return (
        <div>
            <div class="aboutus">
                <div class="textoverlay">
                    <div class="textcontent">
                        <h1>About Us</h1>
                        <p><a href="/">Home</a></p>
                    </div>
                </div>
            </div>
            <div>
                <h2>WELCOME</h2>
                <div class="columndiv">
                    <p class="firstp"> <em>This is the Information Technology age and at its core is Computer Science. The study of computer science is therefore critical if society is to take full advantage of the benefits Information Technology has to offer and make rapid economic advances. Computer science involves the study and development of applications that allow for our everyday use of computers, the software systems that support these applications, and the means and methods used to produce both applications and systems that behave reliably, correctly and ethically.</em> At the heart of Computer Science lies the skill of computer programming and employers who hire Computer Scientists expect adept programmers with knowledge of current techniques and tools and the ability to apply sound engineering principles to the development, construction and maintenance of computer programs.The range of courses available in the department and the skills acquired by students enable them to find employment in many diverse fields of the economy and prepare our graduates for the computing industry, working in a project team (or research and development team), and to enable the graduate to bring specialist skills to that team. The course also provides the platform for further study or research through exposure to established and emerging technologies and methods, and to active fields of research in Computer Science.

                        <b> The Department offers two undergraduate degree programmes, Bachelor of Science in Computer Science Single-Major and Major-Minor as well as Bachelor of Science in Information Technology.</b>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h2 class="Containerheader">Get To Know Us</h2>
                    <div className="imagecontainer">
                        <div className="imagecolumn">
                            <h2 className="imageheader">Our Organisation</h2>
                            <div className="Orgimage">
                                <img src={orgImage} />
                            </div>

                            <div className="imagefooter">
                                <p><b>The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News.
                                </b></p>
                            </div>
                        </div>

                        <div className="imagecolumn">
                            <h2 className="imageheader">Our Community</h2>
                            <div className="Orgimage">
                                <img src={comImage} />
                            </div>

                            <div className="imagefooter">
                                <p><b>If you are inspired by a big challenge, you've come to the right place! The computer science community at the univrersity of Ghana encourages it's people to be vibrant and brave in taking on new challenges that push boundries beyond imagination.
                                </b></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <div><h2 class="Containerheader">More about Us</h2>
                    <div className="imagecontainer">
                        <div className="imagecolumn">
                            <h2 className="imageheader">Distance Learning</h2>
                            <div className="Orgimage">
                                <img src={disImage} />
                            </div>

                            <div className="imagefooter">
                                <p><b>Experience a UG-CDCD classroom from wherever you are. Take advantage of real-time lectures and personal interaction with professors through a suite of online delivery options, customizing your degree to fit your schedule. Our online classroom maintains the same level of academic rigor, while providing students with more ways of learning.
                                </b></p>
                            </div>
                        </div>

                        <div className="imagecolumn" align="center">
                            <h2 className="imageheader">Building the Future</h2>
                            <video controls>
                                <source src={buildingFutureVid} type="video/mp4" />
                            </video>

                            <div className="imagefooter">
                                <p><b>So what defines our students, faculty and community members? Above all, it's our belief in the infinite possibilitie and our unshakable optimism. Its a connection to others near and far. A hunger for socio-economic transformation that pushes us to tackle challenges and pursue progress. Its the conviction that together we can create a world of good. Join us on the journey.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;