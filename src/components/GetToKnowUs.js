import React from 'react';
import '../styles/CoursesOffered.css';
import Accordion from './Accordion';
import entry1 from '../assets/entry1.jpeg';

function GetToKnowUs() {
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h2 className='short-courses-heading' style={{fontSize: 30, marginBottom: -10}}>Get To Know US</h2>
                <p>Things get interesting because you are eager to know more , or you become eager to know more because it is interesting?</p>
            </div>

            <div className='gtku-columns'>
                <div className='accordion-div'>
                    <Accordion title="Organization" content={["The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News."]} />
                    <Accordion title="UG-CSCD" content={["The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News."]} />
                    <Accordion title="Distance Learning" content={["The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News."]} />
                    <Accordion title="Building our Future" content={["The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News."]} />
                </div>

                <div className='image-div'>
                    <img src={entry1} />
                </div>
            </div>
        </>
    );
}

export default GetToKnowUs;