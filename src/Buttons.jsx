import React from 'react'
import Mail from './assets/Mail.png'


export default function Buttons() {
    return (
        <div className='btn-container'>
            <a href='mailto:moreno.austin12@gmail.com'><button className='emailBtn'><img src={ Mail }></img>Email</button></a>
        </div>
    )
}
