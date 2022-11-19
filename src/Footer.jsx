import React from "react"
import Twitter from './assets/Twitter-Icon.png'
import Facebook from './assets/Facebook-Icon.png'
import Instagram from './assets/Instagram-Icon.png'
import Linkedin from './assets/Linkedin-Icon.png'
import GitHub from './assets/GitHub-Icon.png'


export default function Footer() {
    return (
        <footer className="footer">
            <img src={ Twitter }></img>
            <img src={ Facebook }></img>
            <img src={ Instagram }></img>
            <img src={ Linkedin }></img>
            <img src={ GitHub }></img>
        </footer>
    )
}

