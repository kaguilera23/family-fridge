import "../styles/Portfolio.css"

const styles = {
    cardClass: {
        width: "18rem"
    }
}

function Portfolio() {
    return (
        <div id="cards-section">
            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture "id="weather"></div>
                <div className="card-body">
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">See the current and future weather forecasts for your area</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/sunshine-rain-dashboard" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://kaguilera23.github.io/sunshine-rain-dashboard/" id="nav-buttons">Live Link</a>
                </div>
            </div>

            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture" id="medi"></div>
                <div className="card-body">
                    <h5 className="card-title">My Medi</h5>
                    <p className="card-text">Keep track of important medications and medical information</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/my-medi" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://my-medi.herokuapp.com/" id="nav-buttons">Live Link</a>
                </div>
            </div>

            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture" id="password"></div>
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">Create a strong, unhackable password quickly</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/password-generator" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://kaguilera23.github.io/password-generator/" id="nav-buttons">Live Link</a>
                </div>
            </div>

            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture" id="binge"></div>
                <div className="card-body">
                    <h5 className="card-title">Binge Show Calculator</h5>
                    <p className="card-text">Calculate how long it will take you to watch your favorite show, even with your busy, hectic schedule</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/Binge-Show-Calculator-p01" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://camh915.github.io/Binge-Show-Calculator-p01/" id="nav-buttons">Live Link</a>
                </div>
            </div>

            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture" id="quiz"></div>
                <div className="card-body">
                    <h5 className="card-title">Coding Quiz</h5>
                    <p className="card-text">See how much you know about coding with this quick, five-question quiz</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/code-quiz" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://kaguilera23.github.io/code-quiz/" id="nav-buttons">Live Link</a>
                </div>
            </div>

            <div className="card" style={styles.card} id="project-cards">
                <div className="project-picture" id="schedule"></div>
                <div className="card-body">
                    <h5 className="card-title">Word Day Scheduler</h5>
                    <p className="card-text">Keep track of all the things you have to do in a day with this simple, easy-to-use application</p>
                    <a className="btn btn-primary" href="https://github.com/kaguilera23/busy-bee-organizer" id="nav-buttons">GitHub Repository</a>
                    <a className="btn btn-primary" href="https://kaguilera23.github.io/busy-bee-organizer/" id="nav-buttons">Live Link</a>
                </div>
            </div>                        
        </div>
    )
};

export default Portfolio;