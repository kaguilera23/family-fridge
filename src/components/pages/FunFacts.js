import "../styles/FunFacts.css"
import { Image, Row, Col } from 'antd';


function FunFacts() {
    return (
        <div id="box">

            <Row>
               
                <Image
                     width={400}
                     src="https://i.imgur.com/dfo7AiL.jpg"
                     id="image"
                />

                <Col flex={8} id="parks-stuff">
                    <Row>
                        <p id="fun-intro-text">
                            The left image was taken in Yosemite National Park (specifically The Mist Trail which has been my favorite hike so far), and the right image is from Haleakala National Park!
                        </p>

                        <p id="fun-intro-text">
                            One of my biggest goals is to see all the national parks in the United States. So far, my boyfriend and I have been to 6. I'm very proud of the hikes I do because I'm not a super athlete who finds hikes easy, but I definitely think they're worth it. They're also the biggest inspirations for my first project for travellers!
                        </p>
                    </Row>
                </Col>

                <Image
                     width={400}
                     src="https://i.imgur.com/yozp3JB.jpg"
                     id="image"
                />  

            </Row>

            {/* ----------------------------------------------------------------------------------------------------- */}

            <Row>
                <Col flex={8} id="parks-stuff">
                    <Row>
                        <p id="fun-intro-text">
                            I was an ophthalmic technician for 3 years and loved my patients and job, but I wanted to combine my interests of typing, attention to detail, and creation into a career. I'm excited to work with clients and turn a small idea into a website even better than they imagined!
                        </p>
                    </Row>
                </Col>

                <Image
                     width={400}
                     src="https://i.imgur.com/scr3gpg.jpg"
                     id="image"
                />

                <Col flex={8} id="parks-stuff">
                    <Row>
                        <p id="fun-intro-text">
                            Althought the outdoors are fun, I absolutely love staying in and watching movies. My boyfriend and I will watch anything from The Notebook (don't ask how many times I've watched it) to Puss in Boots to The Witch and so many more. My personal favorites are rom-coms and horror/thrillers. You think I'd be tired of being in front of a screen all day!
                        </p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default FunFacts;

// &#x1F332;