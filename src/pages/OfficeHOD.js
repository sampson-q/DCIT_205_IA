import React from "react";
import "../styles/Pages.css";
import ProgramsComponent from "../components/ProgramsComponent";
import InformationComponent from "../components/InformationComponent";
import hodImage from '../assets/hod.jpg';
import GetToKnowUs from "../components/GetToKnowUs";
function OfficeHOD() {
    return (
        <div>
            <div class="officehod">
                <div class="textoverlay">
                    <div class="textcontent">
                        <h1>Head of Department's Office</h1>
                        <p><a href="/">Home</a></p>
                    </div>
                </div>
            </div>
            
            <ProgramsComponent />
            <InformationComponent title="Head of Department's Office" image={hodImage} />
            <GetToKnowUs />

        </div>
    );
}

export default OfficeHOD;