import React, { useState } from 'react';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/65b4e800-c62f-11ec-a557-034a17e2da28';

const ContactForm = ({ success, labels }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>{success.title}</h2>
        <div>{success.description}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="first-wrapper">
        <div className="input-container">
          <label htmlFor="name">{labels.name}</label>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">{labels.email}</label>
          <input type="email" placeholder="Your email" name="email" required />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="message">{labels.message}</label>
        <textarea placeholder="Your message..." name="message" required />
      </div>
      <button type="submit" className="submit-button">
        {labels.submit}
      </button>
    </form>
  );
};

export default ContactForm;
