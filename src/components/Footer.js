import "./styles/Footer.css"
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';


function Footer() {
    return (
        <div className="footer" id = "main-footer">

            <div id="links">
                <GithubOutlined onClick={() => window.location.href="https://github.com/kaguilera23"} style={{fontSize: 50}}></GithubOutlined>
                <LinkedinOutlined onClick={() => window.location.href="https://www.linkedin.com/in/kaylanaguilera/"} style={{fontSize: 50}}></LinkedinOutlined>
                <InstagramOutlined onClick={() => window.location.href="https://www.instagram.com/lil_llama23/?hl=en"} style={{fontSize: 50}}></InstagramOutlined>
            </div>  
            
        </div>

    )
}

export default Footer;