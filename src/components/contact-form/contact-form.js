import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { IoIosClose, IoIosCloseCircleOutline } from 'react-icons/io'

import Button from '../button/button'
import FormInput from '../form-input/form-input.component'
import {
  Container,
  Message,
  StyledForm,
  Heading,
  CloseButton,
  InfoBtn,
} from './contact-form.styles'

const ContactForm = ({ closeModal }) => {
  const [message, setMessage] = useState(false)
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

    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        setMessage(true)
        resetForm()
      }, 5000)
    },
  })

  return (
    <Container>
      <CloseButton onClick={closeModal}>
        <IoIosClose />
      </CloseButton>
      <Heading>Contact Us</Heading>
      <Message show={message}>
        Thank You!
        <br />
        We will get back to you shortly &nbsp;:)
        <InfoBtn onClick={() => setMessage(false)}>
          <IoIosCloseCircleOutline />
        </InfoBtn>
      </Message>
      <StyledForm name="Contact Form" onSubmit={formik.handleSubmit} noValidate>
        <FormInput
          id="name"
          name="name"
          type="name"
          label="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          border={formik.touched.name && formik.errors.name && '1px solid red'}
        />
        {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
        <FormInput
          id="email"
          name="email"
          type="email"
          label="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          border={
            formik.touched.email && formik.errors.email && '1px solid red'
          }
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
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
          style={{ resize: `none` }}
          border={
            formik.touched.message && formik.errors.message && '1px solid red'
          }
        />
        {formik.touched.message && formik.errors.message ? (
          <span>{formik.errors.message}</span>
        ) : null}
        <Button
          css={`
            width: 100%;
            margin-top: 2rem;
          `}
          upperCase
          noRadius
          noShadow
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Submiting....' : 'Submit'}
        </Button>
      </StyledForm>
    </Container>
  )
}

export default ContactForm
