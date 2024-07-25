
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import AboutBackground from "../Assets/about-background.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #0a2540;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background:#0a2540;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
`;

function Contact() {
  const form = useRef();
  const [formState, setFormState] = useState({
    from_email: '',
    from_name: '',
    subject: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (number) => {
    const re = /^(\d{3}[- ]?)?\d{3}[- ]?\d{4}$/;
    return re.test(String(number));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Validate the field while the user types
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'from_email' && !validateEmail(value)) {
      setErrors({ ...errors, [name]: 'Invalid email format' });
    } else if (name === 'phone' && !validatePhoneNumber(value)) {
      setErrors({ ...errors, [name]: 'Invalid phone number' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = form.current.querySelectorAll("input[name], textarea[name]");
    let isValid = true;
    let newErrors = {};

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        newErrors[input.name] = 'This field is required';
      }
      if (input.name === 'from_email' && !validateEmail(input.value)) {
        isValid = false;
        newErrors[input.name] = 'Invalid email format';
      }
      if (input.name === 'phone' && !validatePhoneNumber(input.value)) {
        isValid = false;
        newErrors[input.name] = 'Invalid phone number';
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const notify = () => toast.success("Mail Sent Successfully", {
      position: "bottom-center",
      transition: "Bounce",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
    });

    emailjs.sendForm("service_91p16cq", "template_ectcmaw", form.current, "w_YXjysSub1u4G_3V")
      .then(
        (result) => {
          notify();
          form.current.reset();
          setFormState({
            from_email: '',
            from_name: '',
            subject: '',
            message: '',
            phone: ''
          });
          setErrors({});
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <Container id="contact">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Wrapper className="contact-page-wrapper">
          <h1 className="contact-primary-heading">Thinking of building your dream home or upgrading your existing home?</h1>
          <h1 className="primary-heading">Let Us Help You</h1>
          <p className="primary-text">Please submit your details in the form below. We will schedule a 30-min call with you and provide a free high-level estimate.</p>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              value={formState.from_email}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.from_email}</ErrorMessage>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              value={formState.from_name}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.from_name}</ErrorMessage>
            <ContactInput
              placeholder="Subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.subject}</ErrorMessage>
            <ContactInput
              placeholder="Your Phone Number"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.phone}</ErrorMessage>
            <ContactInputMessage
              placeholder="Message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.message}</ErrorMessage>
            <ContactButton className="secondary-button" type="submit" value="Send Message" />
          </ContactForm>
        </Wrapper>
      </motion.div>
    </Container>
  );
}

export default Contact;
