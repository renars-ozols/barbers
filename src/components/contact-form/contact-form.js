import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import FormInput from '../form-input/form-input.component'
import { Heading } from './contact-form.styles'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: yup.object({
      name: yup.string().required('Required'),
      email: yup
        .string()
        .email('Invalid email address')
        .required('Required'),
      message: yup.string().required('Required'),
    }),
  })

  return (
    <div>
      <Heading>Contact Us</Heading>
      <form name="Contact Form" onSubmit={formik.handleSubmit} noValidate>
        <FormInput
          id="name"
          name="name"
          type="name"
          label="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <FormInput
          id="email"
          name="email"
          type="email"
          label="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <FormInput
          as="textarea"
          id="message"
          name="message"
          type="text"
          label="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows="6"
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      </form>
    </div>
  )
}

export default ContactForm
