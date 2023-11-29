import React from "react";
import "../styles/Pages.css";
import ProgramsComponent from "../components/ProgramsComponent";
import entryImage from "../assets/entry1.jpeg";
import comImage from '../assets/community.jpg';


function EntryRequirements() {
    return (
        <>
            <div class="entryrequirements ">
                <div class="textoverlay">
                    <div class="textcontent">
                        <h1>Insight Into Our Programmes</h1>
                        <p><a href="/">Home</a></p>
                    </div>
                </div>
            </div >

            <div style={{ height: 100 }}></div>
            <ProgramsComponent />
            <div style={{ height: 100 }}></div>
            <div class="imagecontainer">
                <div class="imagecolumn">
                    <img src={entryImage} alt="" />
                </div>
                <div class="imagecolumn">
                    <div><h1>Entry Requirements</h1>
                        <p><h2>Bachelor of Science in Mathematical Sciences</h2>
                            Mathematical Sciences (Actuarial Science, Biomathematics, Computer Science, Mathematics, Statistics, Physics)
                        </p>

                        <p>Core: Credit passes in English, Core Mathematics, Integrated Science & Social Studies
                            Electives: Credit passes in Elective Mathematics and any other two subjects
                        </p>

                        <p><h2>Bachelor of Science in Information Technology</h2></p>
                        Core: Credit passes in English, Core Mathematics, Integrated Science & Social Studies
                        Electives: Credit passes in any three subjects
                        MSc Computer science
                        MPhil Computer science
                        Ph.D.
                    </div>
                </div>

            </div>

            <div>
                <h2 class="Containerheader">Get To Know Us</h2>
                <div className="imagecontainer">
                    <div className="imagecolumn">
                        <h2 className="imageheader">Our Organisation</h2>
                        <div className="Orgimage">
                            <img src={entryImage} />
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
                        </div></div>
                </div>
            </div>
        </>
    );
}

export default EntryRequirements;