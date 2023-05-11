import React from 'react'
import './Contact.scss'
import whatsapp from '../../assets/whats.png'

const Contact = () => {
  return (
    <div className='contact'>
      <img src='https://toneopeats.com/public/img/call.svg' alt='p' />
      <img src={whatsapp} alt='w' />
    </div>
  )
}

export default Contact
