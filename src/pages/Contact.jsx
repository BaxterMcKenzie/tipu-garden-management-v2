import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import Toast from "../components/Toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);
    setError(false);
    e.target.reset();
  } catch (err) {
    console.error(err);
    setError(true);
    setSubmitted(false);
  }
};

  return (
    <>
      <Seo
        title="Contact Us - Tipu Garden Management"
        description="Get in touch with Tipu Garden Management for any inquiries or to schedule a consultation."
        url={window.location.href}
      />

      <PageHeader
        title="Contact Us"
        image_url="/header-image/contact.webp"
        blurb="Have a question or want to get started with our services? We'd love to hear from you!"
        showButton={false}
      />

      <div className="contact-form-container">
        <div className="inner-container">
          <h2 className="h2-alt">Get in Touch</h2>
          <p>
  Got a project in mind? Send us a message with a few details of your space so we can get a clear idea of what’s needed.
</p>

<p className="contact-call">
  Or give us a call if you’d rather talk it through.
</p>

<a href="tel:0221753264" className="primary-button">
  Call 022 175 3264
</a>

          <div className="form-container">
            <form className="custom-form" onSubmit={handleSubmit}>
              
              <label>
                Full Name
                <input type="text" name="from_name" required />
              </label>

              <label>
                Email Address
                <input type="email" name="from_email" required />
              </label>

              <label>
                Subject
                <input type="text" name="subject" />
              </label>

              <label>
                Message
                <textarea name="message" rows="5" required />
              </label>

              <button type="submit" className="secondary-button">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

      <Toast
        message={
          submitted
            ? "Your message has been sent! Thank you."
            : error
            ? "Something went wrong. Please try again."
            : ""
        }
        type={submitted ? "success" : "error"}
        onClose={() => {
          setSubmitted(false);
          setError(false);
        }}
      />
    </>
  );
};

export default Contact;