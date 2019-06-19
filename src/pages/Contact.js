import React from 'react';
import { stringLiteral } from '@babel/types';

let styles = {
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textContainer: {
    textAlign: 'center',
    height: '50vh',
    width: '100vw',
    lineHeight: '2.5'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40vh',
    width: '100vw'
  },
  submitBtn: {
    height: '120px',
    width: '150px',
    border: 'none',
    background: '#333',
    color: 'white',
    margin: 10,
    padding: 5,
    fontSize: '1.0em'
  }
}

const Contact = () => {
  return (
    <div style={styles.contactContainer}>
      <div style={styles.textContainer}>
      <h1>
        Contact Us
      </h1>
      <p><span style={{fontWeight: 'bold'}}>Sonu Corporate Communications</span></p>
      <p>
        1021 E F st.
        </p>
        <p>
        Oakdale CA 95361
      </p>
      <p>
        <a className='email-link' href="# " >gsandhu916@gmail.com</a>
      </p>
      <p>
        (916) 719-9049
      </p>
      <p>
        8:00 a.m. to 12:00 a.m. Pacific Time
      </p>
      </div>
      <form style={styles.formContainer}>
        <p className='inputHeading'>Name<span style={{color: 'red'}}>*</span></p>
        <input className='contactInput' required='required' type='text' placeholder='Please enter name' />
        <p>E-mail<span style={{color: 'red'}}>*</span></p>
        <input className='contactInput' required='required' type='email' placeholder='Please enter email' />
        <p>Message<span style={{color: 'red'}}>*</span></p>
        <textarea type='text' className='contactTextarea' placeholder='Please enter message' />
        <button style={styles.submitBtn}>Send Message</button>
      </form>
    </div>
  )
}

export default Contact;