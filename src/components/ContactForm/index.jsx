import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/65b4e800-c62f-11ec-a557-034a17e2da28';

const ContactForm = ({ success, labels }) => {
  const [isSuccess, setIsSuccesss] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setIsSuccesss(true);
    }, 100);
    setTimeout(() => {
      setIsSuccesss(false);
    }, 8000);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required')
  });

  return (
    <>
      <Formik
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
        <div className="first-wrapper">
          <div className="input-container">
            <label htmlFor="name">{labels.name}</label>
                <Field id="name" name="name" placeholder="Full name" />
                {errors.name && touched.name && (
                  <div className="error">{errors.name}</div>
                )}
          </div>
          <div className="input-container">
            <label htmlFor="email">{labels.email}</label>
                <Field
                  id="email"
                  name="email"
              type="email"
                  placeholder="Email address"
            />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
          </div>
        </div>
        <div className="input-container">
              <label className="message-label" htmlFor="message">
                {labels.message}
              </label>
              <Field
                id="message"
                name="message"
                placeholder="Your message"
                as="textarea"
              />
              {errors.message && touched.message && (
                <div className="error">{errors.message}</div>
              )}
        </div>
            <button
              disabled={!isValid || !dirty}
              type="submit"
              className="submit-button"
            >
          {labels.submit}
        </button>
          </Form>
        )}
      </Formik>
      {isSuccess === true && <p className="success">{success}</p>}
    </>
  );
};

export default ContactForm;
