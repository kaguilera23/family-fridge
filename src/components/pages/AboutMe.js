import "../styles/AboutMe.css"

function AboutMe() {
    return (
        <div>
            <section id="image-section">
                <img id="profile-picture" alt="profile"/>
                <p className="p-3">Welcome! My name is Kayla Aguilera</p>
            </section>

            <section id="text-section">
                <div>
                    <div>
                        Background
                    </div>

                    <p>
                        I have a B.S. in Neuroscience from Mercer University. I was working as an ophthalmic technician for 3 years before deciding to transition into web development.
                    </p>
                </div>

                <div>
                    <div>
                        Currently
                    </div>
                    <p>
                        By March 17, 2023 I will have completed a Full Stack Coding Bootcamp.
                    </p>
                </div>

                <div>
                    <div>
                        Future
                    </div>
                    <p>
                        I want to work towards an AWS Certification and work on learning Python or Java.
                    </p>
                </div>
            </section>
        </div>
    )
};

export default AboutMe;