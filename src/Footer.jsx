import React from "react"
import Twitter from './assets/Twitter-Icon.png'
import Facebook from './assets/Facebook-Icon.png'
import Instagram from './assets/Instagram-Icon.png'
import Linkedin from './assets/Linkedin-Icon.png'
import GitHub from './assets/GitHub-Icon.png'


export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/austiiin.morenooo"><button><img src={ Facebook }></img></button></a>
            <a href="https://www.instagram.com/raieruu/"><button><img src={ Instagram }></img></button></a>
            <a href="https://www.linkedin.com/in/ryel-austin-moreno-850388147/"><button><img src={ Linkedin }></img></button></a>
            <a href="https://github.com/meioseii"><button><img src={ GitHub }></img></button></a>
        </footer>
    )
}

