import "./styles/Footer.css"

const styles = {
    links: {
        textDecoration: "none",
        color: "white"
    }
}

function Footer() {
    return (
        <div className="footer" id = "main-footer">
            <p id="links">
                <a href="https://github.com/kaguilera23" style={styles.links}>GitHub Profile</a>
                <a href="https://www.linkedin.com/in/kaylanaguilera/" style={styles.links}>LinkedIn</a>
                <a href="https://open.spotify.com/user/5tqhcf6f1lzhppgrdjrvoduqk?si=bd6ad24d1cbf420f" style={styles.links}>Spotify</a>
            </p>            
        </div>
    )
}

export default Footer;