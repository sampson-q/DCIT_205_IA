import React from "react";
import "../styles/Pages.css";
import InformationComponent from "../components/InformationComponent";
import HardwareImage from "../assets/hardwarelab2.webp";
import FaqBranch from "../assets/faq csbranches.png"
import FaqCs from "../assets/faq cs.png"
import FaqAi from "../assets/faqai.webp"
import RoboticsLab from "../assets/Roboticslab1.webp"
import FaqMac from "../assets/faqmachinel.webp"
import GeneralLab from "../assets/general lab.jpg"


function FAQs() {


    return (

        <div class="faqs">
            <h1>Frequently Asked Questions</h1>
            <InformationComponent
                title="What is the main purpose of computer science?"
                body="The main purpose of computer science is to develop theoretical models, algorithms, and systems that enable the effective and efficient manipulation and processing of data. It is an interdisciplinary field that combines aspects of mathematics, engineering, and science."
                image={HardwareImage}
            />
            <InformationComponent
                title="What are the different branches of computer science?"
                body="The main branches of computer science are theoretical computer science, computer architecture, software engineering, networking, operating systems, databases, and artificial intelligence."
                image={FaqBranch}
            />
            <InformationComponent
                title="What are the main components of a computer system? "
                body="The main components of a computer system are the hardware (CPU, memory, storage devices, input/output devices), operating system (software that manages the hardware and provides a user interface), and application software (software that performs specific tasks, such as word processing or web browsing)."
                image={FaqCs}
            />

            <InformationComponent
                title="Which courses are available for study in the department "
                body="Bachelor of Science in Mathematical Sciences
                Mathematical Sciences (Actuarial Science, Biomathematics, Computer Science, Mathematics, Statistics, Physics)
                
                Core: Credit passes in English, Core Mathematics, Integrated Science & Social Studies Electives: Credit passes in Elective Mathematics and any other two subjects
                
                Bachelor of Science in Information Technology
                
                Core: Credit passes in English, Core Mathematics, Integrated Science & Social Studies Electives: Credit passes in any three subjects MSc Computer science MPhil Computer science Ph.D. Courses you can enroll in in UG legon Computer Science Department"
                image={GeneralLab}
            />
            <InformationComponent
                title="What is artificial Intelligence"
                body=" here is what you need to know about AI:  Artificial intelligence is the ability of a computer or computer-controlled robot to perform tasks that are commonly associated with the intellectual processes characteristic of humans, such as the ability to reason. Although there are as yet no AIs that match full human flexibility over wider domains or in tasks requiring much everyday knowledge, some AIs perform specific tasks as well as humans. "
                image={FaqAi}
            />
            <InformationComponent
                title="Understanding the foundation of CS theory  "
                body="= Computer science theory; Artificial intelligence is the ability of a computer or computer-controlled robot to perform tasks that are commonly associated with the intellectual processes characteristic of humans, such as the ability to reason. Although there are as yet no AIs that match full human flexibility over wider domains or in tasks requiring much everyday knowledge, some AIs perform specific tasks as well as humans. "
                image={RoboticsLab}
            />
            <InformationComponent
                title="How to become an expert in machine learning "
                body=" Machine Learning Courses; Artificial intelligence is the ability of a computer or computer-controlled robot to perform tasks that are commonly associated with the intellectual processes characteristic of humans, such as the ability to reason. Although there are as yet no AIs that match full human flexibility over wider domains or in tasks requiring much everyday knowledge, some AIs perform specific tasks as well as humans. "
                image={FaqMac}
            />




        </div>

    );
}

export default FAQs;