import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/65b4e800-c62f-11ec-a557-034a17e2da28';

const ContactForm = ({ success, error, labels }) => {
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(FORM_ENDPOINT, values)
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false));

    setTimeout(() => {
      setIsSuccess(null);
    }, 9000);

    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required')
  });

  return (
    <div className="contact-form">
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
      {isSuccess === true && <p className="submit-success">{success}</p>}
      {isSuccess === false && <p className="submit-error">{error}</p>}
    </div>
  );
};

ContactForm.propTypes = {
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  labels: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default ContactForm;
