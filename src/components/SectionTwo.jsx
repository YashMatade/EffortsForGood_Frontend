import React, { useEffect, useState } from 'react';
import prj from "../Assets/Project.png";
import fif from "../Assets/50@50.png";
import p from "../Assets/padhegass.png";
import badhega from "../Assets/Badhega.png";
const SectionTwo = () => {
    const [screen, setScren] = useState();

    useEffect(() => {
        const handleResize = () => {
            setScren(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const tabStyle = {
        backgroundColor: "",
        padding: "10px",
    };

    const navLinkStyle = {
        color: "#007bff",
        backgroundColor: "#fff",
        borderBottom: "1px solid #dee2e6",
        margin: "0",
        padding: "10px",
        cursor: "pointer",
    };


    const activeNavLinkStyle = {
        color: "#fff",
        backgroundColor: "#007bff",
        border: "1px solid #007bff",
        borderBottom: "2px solid #000", // Add this line for the underline
    };

    const tabContentStyle = {
        padding: "20px",
    };

    const pStyle = {
        fontWeight: "400",
        fontSize: "16px",
        color: "#999999",
        overflowY: "auto",
        height: "250px",
    };

    const accordionStyle = {
        padding: "1px",
    };

    const accordionButtonStyle = {
        fontWeight: "400",
        color: "#999999",
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={prj} alt="" />
                        </div>
                        <div className='mb-5'>
                            <img src={fif} style={{ height: "50px" }} alt="" />
                        </div>
                        <div>
                            <img src={p} style={{ height: "200px" }} alt="" />
                        </div>
                        <div className='ms-4'>
                            <img src={badhega} style={{ height: "50px" }} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <ul className="nav nav-tabs text-center d-flex justify-content-around" id="myTab" role="tablist" style={tabStyle}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" style={navLinkStyle}>50@50</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" style={navLinkStyle}>{screen <= 546 ? "AI" : "AI For Social Good"}</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" style={navLinkStyle}>FAQs</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent" style={tabContentStyle}>
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className='p-2'>
                                    <div style={pStyle}>
                                        50@50 stands as a transformation initiative, poised to elevate one million classrooms across India by integrating cutting-edge technology. This recurrent campaign operates under the "Tech-Led Education" framework, a vital component of AI For Social Good and facilitated by Efforts For Good.
                                        <br />
                                        <br />
                                        Aligned with the National Education Policy, this initiative advocates the adoption of tech-led and AI integrations to address comprehension challenges.
                                        <br />
                                        <br />
                                        By redefining smart schooling beyond infrastructure(hardware and content), it prioritizes proven tech-led interventions, emphasizing measurable learning outcomes and surpassing global best practices. Partnering with Build A Class foundation, known for their decade-long expertise in technological interventions, 50@50 implements advanced Atomo-powered solutions to transform classrooms and elevate learning experiences.
                                        <br />
                                        <br />
                                        50@50 envisions a future where personalized learning, AI-driven analytics, and holistic education drive India's position as a global leader in inclusive education.
                                        <br />
                                        <br />
                                        Discover details about 50@50 here.
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className='p-2'>
                                    <div style={pStyle}>
                                        AI For Social Good represents an open collaborative initiative led by prominent tech companies in India, aiming to harness the unparalleled capabilities of AI for enhanced decision-making, accelerated problem-solving, and societal advancement.
                                        <br />
                                        <br />
                                        AI For Social Good thrives at the crossroads of precise insights, social investments, bleeding-edge innovations, and impactful interventions. This tech-driven framework is poised to optimize SDG indicators, revolutionize decision-making via intricate data analysis and visualization, elevating interventions while meticulously gauging sustainable progress towards pivotal Sustainable Development Goals (SDGs).
                                        <br />
                                        <br />
                                        We're making sure the people who are driven to change the world have open access to the latest tools and technologies. Together with our collaborators, AI For Social Good is constructing a comprehensive tech and insights repository, empowering implementing agencies and NGOs to seamlessly integrate AI tools.
                                        <br />
                                        <br />
                                        With a primary focus on Education, Climate, Health, and Financial Inclusion, AI For Social Good continues to advocate for social projects rooted in robust tech and AI foundations.
                                        Discover more about joining our collective and the ongoing endeavors at AI For Social Good here.
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className='p-1'>
                                    <div className="accordion accordion-flush" id="accordionFlushExample" style={accordionStyle}>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button style={accordionButtonStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    What Problem Are We Solving?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body" style={accordionButtonStyle}>
                                                    The problem is the lack of accessibility for people with disabilities in public spaces in India. With over 2% of the population having some form of intellectual or physical disability and approximately 20% of them facing movement disabilities, many public places remain inaccessible and uninformed about disability needs
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" style={accordionButtonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    How Is Our Partner NGO Fixing IT?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body" style={accordionButtonStyle}>
                                                    RampMyCity, started in 2018, is addressing the problem by implementing simple and effective solutions such as installing ramps and grab bars in public spaces. They provide end-to-end solutions, from designing ramps to sensitizing and training staff to cater to differently-abled individuals, aiming to make public places wheelchair-friendly and inclusive.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
