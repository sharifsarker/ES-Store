import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { useEffect, useCallback } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvaenr");

  const handleSubmission = useCallback(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Good job!",
        text: "Form Submitted Successfully!",
        icon: "success"
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    handleSubmission();
  }, [handleSubmission]);

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        title="London, England"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1714547851259!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mpzvaenr"
            method="POST"
            className="contact-inputs"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="Username"
              placeholder="Username"
              name="Username"
              autoComplete="off"
              required
            />
            <ValidationError prefix="Username" field="Username" errors={state.errors} />
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />
            <textarea
              id="Message"
              name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter you message"
              required
            ></textarea>
            <ValidationError prefix="Message" field="Message" errors={state.errors} />
            <input type="submit" value="send" />
            {!state.succeeded ? (
              <p style={{ color: "red" }}>{state.errors?.formErrors[0].message}</p>
            ) : null}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
            border-radius: 50px;
          }
        }
      }
    }
  }
`;

export default Contact;
