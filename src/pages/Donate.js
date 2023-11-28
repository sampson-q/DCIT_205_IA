import React from "react";
import "../styles/Pages.css";

function Resources() {
    return (
        <div>
            <div class="bgresources">
                <div class="textoverlay">
                    <div class="textcontent">
                        <h1>Resources</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2>Top Online Resources</h2>
                <div class="columndiv">
                    <p class="firstp"> <em> Computer science is academically challenging, and students need as many resources as possible so that they can do their nest to succeed. Computer science professionals also need industry resources so they can stay on top of new developments and products.</em>

                        <b> Todays internet is chock full of information that anyone can access and use; it is no different for computer science majors. Some of the information you will need can be found here; such as certifications, study materials, open access journals, and associations. However, searching on your own can be time consuming and just a general hassle. Instead, take a look here, where weve gathered a number of easy-to-use resources for every stage of your career: student, job seeker, and professional.</b>
                    </p>
                </div>
            </div>
            <div>
                <div><h2 class="Containerheader">Resources for Computer Science Students</h2>
                    <div className="imagecontainer">
                        <div className="imagecolumn">
                            <h2 className="imageheader"><a href="https://www.computerscience.org/resources/blockchain-and-sustainability/">Blockchain Technology and the Future of Sustainability</a></h2>
                            <div className="blockchain">
                                {/* Body content for Our Org */}

                            </div>

                            <div className="imagefooter">
                                <p><b> Blockchain exploded onto the global scene in the early 2010s as the technology behind Bitcoin, the world's first decentralized, digital currency. Its secure and unalterable ledger has transformed the way
                                </b></p>
                            </div>
                        </div>

                        <div className="imagecolumn">
                            <h2 class="imageheader"><a href="https://www.computerscience.org/resources/top-ai-writing-tools/"> The Top AI Writing Tools to Help You Become a Better Writer in College</a></h2>
                            <div className="Topai">
                                {/* Body content for Program 2 */}

                            </div>
                            <div className="imagefooter">
                                <p><b> Artificial intelligence are revolutionizing the higher learning landscape, saving students' time and potentially boosting their grades. However, this trend is accompanied by contentious debates. Is it ethical for students to...</b> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <div><h2 class="Containerheader">More Resources</h2>
                    <div className="imagecontainer">
                        <div className="imagecolumn">
                            <h2 className="imageheader"><a href="https://www.computerscience.org/resources/ai-tools-to-help-you-study/"> The Top AI Tools to Help You Study in College</a></h2>
                            <div className="IAstudies">
                                {/* Body content for Our Org */}

                            </div>

                            <div className="imagefooter">
                                <p><b>  Artificial intelligence tools are rapidly gaining popularity, especially among college students. However, with the abilities of AI advancing so quickly, there is a large grey area on where and how...
                                </b></p>
                            </div>
                        </div>

                        <div className="imagecolumn">
                            <h2 class="imageheader"><a href="https://www.computerscience.org/resources/artificial-intelligence/">What Do You Learn In an Artificial Intelligence Course? </a></h2>
                            <div className="aicourses">


                                {/* Body content for Program 2 */}
                            </div>
                            <div className="imagefooter"> <p><b> Everyone either knows a lot about artificial intelligence (AI) or very little. For fun, let's do a pop quiz. What is AI? You get an A+ if you know it's...</b></p>
                                <p><b> Everyone either knows a lot about artificial intelligence (AI) or very little. For fun, let's do a pop quiz. What is AI? You get an A+ if you know it's...</b></p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>



    );
}

export default Resources;