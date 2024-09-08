import styles from './ContactStyles.module.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xrbzdjkz");
  if (state.succeeded) {
      return <div className={styles.message}>
        <p>Your message has been sent. Thank you!</p>
        </div>;
  }
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xrbzdjkz" method="post" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <div className="error-wrapper">
            <p>
          <ValidationError 
          
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="error-message"
        
      />
      </p>
      </div>
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <input className="hover btn" type="submit" value="Submit" disabled={state.submitting}/>
      </form>
    </section>
  );
}

export default Contact;
