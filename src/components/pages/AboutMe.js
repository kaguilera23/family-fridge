import "../styles/AboutMe.css"
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import resume from "../../pdf/Resume.pdf"

function AboutMe() {
    const frontEnd = ["HTML5", "CSS", "JavaScript", "React", "Bootstrap", "Chakra UI", "Ant Design", "Handlebars"]

    const backEnd = ["Mongoose", "MongoDB", "Express", "NodeJS", "MySQL", "GraphQL", "Handlebars"]

    return (
        <Row id="box">
            {/* Profile Picture Section */}
            <Col flex={7} id="profile-picture">
                <Avatar size={250} icon={<UserOutlined />} src="https://avatars.githubusercontent.com/u/118678899?s=400&u=513bc2568da26206fb1ed9c72fb4dfd58a8c179f&v=4" />
                <Row id="name">Kayla Aguilera</Row>
                <Row className="contact">Phone Number: 678-789-9622</Row>
                <Row><a href="mailto:aguilera.k02@gmail.com" className="email">Email: aguilera.k02@gmail.com</a></Row>
                <Row><a href={resume} download="KAguileraResume" className="email">Download My Resume</a></Row>
            </Col>

            {/* Information Section */}
            <Col flex={17} id="information">
                {/* Intro */}
                <section id="intro-section">
                    <Row>
                        <div id="intro-text">I recently graduated from Georgia Tech's Full Stack Web Development Bootcamp! I've always had an interest in computers, applications, and creation, but I also love medicine, and in the battle of what career I wanted to pursue, the medical field won by a 1px margin! However, I felt I wasn't getting the creativity and creation aspect I craved in a job, so I decided to transition my career to web development. </div>
                    </Row>
                </section>

                <section id="prof-section">
                {/* Front End Proficiencies */}
                <Col>
                    <Col className="titles">Front End Proficiencies</Col>
                    <Col id="list-section">
                        <ul>
                            <li className="profs">{frontEnd[0]}</li>
                            <li className="profs">{frontEnd[1]}</li>
                            <li className="profs">{frontEnd[2]}</li>
                        </ul>

                        <ul>
                            <li className="profs">{frontEnd[3]}</li>
                            <li className="profs">{frontEnd[4]}</li>
                            <li className="profs">{frontEnd[5]}</li>
                        </ul>

                        <ul>
                            <li className="profs">{frontEnd[6]}</li>
                            <li className="profs">{frontEnd[7]}</li>
                        </ul>
                    </Col>
                </Col>

                {/* Back End Proficiencies */}
                <Col>
                    <Col className="titles">Back End Proficiencies</Col>
                    <Col id="list-section">
                        <ul>
                            <li className="profs">{backEnd[0]}</li>
                            <li className="profs">{backEnd[1]}</li>
                            <li className="profs">{backEnd[2]}</li>
                        </ul>

                        <ul>
                            <li className="profs">{backEnd[3]}</li>
                            <li className="profs">{backEnd[4]}</li>
                            <li className="profs">{backEnd[5]}</li>
                        </ul>

                        <ul>
                            <li className="profs">{backEnd[6]}</li>
                        </ul>
                    </Col>
                </Col>

                {/* Currently Learning */}
                <Col>
                   <Col className="titles">Current/Future Learning</Col>
                   <Col id="currently-section">
                        <p>Currently, I am learning TypeScript, and will soon dive into C#. I am working on an application that will be used by vacationers, but have many other passion projects that I can't wait to pursue!</p>

                        <p>While there's a lot to learn in my new journey, after the above are completed, I will obtain Professional Scrum Developer and AWS Certifications.</p>  
                   </Col>
                </Col>

                {/* Maybe A Button Section for Q&A */}

                </section>
            </Col>
        </Row>
    )
};

export default AboutMe;