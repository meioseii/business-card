import React from 'react'
import Mail from './assets/Mail.png'


export default function Buttons() {
    return (
        <div className='btn-container'>
            <button className='emailBtn'><img src={ Mail }></img>Email</button>
        </div>
    )
}
