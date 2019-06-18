import React from 'react';

let styles = {
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',

  },
  textContainer: {
    textAlign: 'center',
    background: 'yellow',
    height: '50vh',
    width: '100vw'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'aqua',
    height: '30vh',
    width: '100vw'
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
        (916)719-9049
      </p>
      <p>
        8:00 a.m. to 12:00 a.m., Pacific Time
      </p>
      </div>
      <form style={styles.formContainer}>
        <h4 className='inputHeading'>Name:</h4>
        <input className='contactInput'/>
        <h4>E-mail:</h4>
        <input className='contactInput'/>
      </form>
    </div>
  )
}

export default Contact;