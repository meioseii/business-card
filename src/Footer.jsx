import React from "react"
import Twitter from './assets/Twitter-Icon.png'
import Facebook from './assets/Facebook-Icon.png'
import Instagram from './assets/Instagram-Icon.png'
import Linkedin from './assets/Linkedin-Icon.png'
import GitHub from './assets/GitHub-Icon.png'


export default function Footer() {
    return (
        <footer className="footer">
            <button><img src={ Facebook }></img></button>
            <button><img src={ Instagram }></img></button>
            <button><img src={ Linkedin }></img></button>
            <button><img src={ GitHub }></img></button>
        </footer>
    )
}

