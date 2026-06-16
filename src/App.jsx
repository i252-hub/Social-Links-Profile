import { useState } from 'react'
import './App.css'
import Profile from './assets/images/KirstenAshleyMProfile.jpeg'


function App() {
 
  return (
    <>
      <section className='social-link-container'>
      <div className='social-link-wrapper'>
        <div className='social-link-form'>
          <div className='social-link-top-profile'>
          <img src={Profile} alt="Profile"/>
          <h1>Kirsten Ashley Magpantay</h1>
          <h6>Las Pinas City, Philippines</h6>
          <p>"WordPress Developer & Designer who loves sports."</p>
          </div>
          <div className='social-links'>
            <a href="https://kirsten-ashley-m-portfolio.vercel.app/">Portfolio</a>
            <a href="https://github.com/i252-hub">Github</a>
            <a href="https://www.figma.com/files/project/108228615">Figma</a>
            <a href="https://www.linkedin.com/in/kirsten-ashley-magpantay-43079a212/">LinkedIn</a>
          </div>
        </div>

      </div>
      </section>

      
     
    </>
  )
}

export default App
