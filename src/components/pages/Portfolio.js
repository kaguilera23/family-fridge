import "../styles/Portfolio.css"
import React from 'react';
import { Card, Row } from 'antd';

const { Meta } = Card;

function Portfolio() {
    return (
        <Row id="cards-section">
            <Card
                hoverable style={{ width: 300, backgroundColor: "#f0e7d8" }} cover={<img alt="caffiends" src="https://i.imgur.com/BQpitRc.png" />}>
                <Meta title="Caffiends" description="A local coffee shop's dream site! Users can login and keep track of rewards points and order history, but you can also order without an account." />
                <section id="proj-links">
                    <a href="https://caffiends.herokuapp.com/" target="_blank" rel="noreferrer" className="a-links">Live Website</a>
                    <a href="https://github.com/kaguilera23/caffiends" target="_blank" rel="noreferrer" className="a-links">GitHub Repository</a>                    
                </section>
            </Card>     

            <Card
                hoverable
                style={{ width: 300, backgroundColor: "#f0e7d8" }}
                cover={<img alt="medi" src="https://i.imgur.com/GQfF3uQ.png" />}
            >
                <Meta title="My Medi" description="A website that helps users keep track of the medications they're on as well as other important medical information such as blood type, emergency contact, allergies, etc." />
                <section id="proj-links">
                    <a href="https://github.com/kaguilera23/caffiends" target="_blank" rel="noreferrer" className="a-links">GitHub Repository</a>                    
                </section>
            </Card>    

            <Card
                hoverable
                style={{ width: 300, backgroundColor: "#f0e7d8" }}
                cover={<img alt="binge" src="https://i.imgur.com/24ekWQF.png" />}
            >
                <Meta title="Binge Show Calculator" description="Unlike other show calculators, this one takes into account the hours in a day you're busy with other things such as work and adds it to the total run time of a show, giving you a realistic timeframe to watch your favorite shows. " />
                <section id="proj-links">
                    <a href="https://camh915.github.io/Binge-Show-Calculator-p01/" target="_blank" rel="noreferrer" className="a-links">Live Website</a>
                    <a href="https://github.com/kaguilera23/Binge-Show-Calculator-p01" target="_blank" rel="noreferrer" className="a-links">GitHub Repository</a>                    
                </section>
            </Card>         
        </Row>
    )
};

export default Portfolio;