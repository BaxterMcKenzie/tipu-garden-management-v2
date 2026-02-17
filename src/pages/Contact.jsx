import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import Toast from "../components/Toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState([]);
  const [jobSize, setJobSize] = useState([]);
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // TEMP: simulate success
      console.log({
        name,
        phone,
        email,
        services,
        jobSize,
        jobDescription,
        message,
      });

      setSubmitted(true);
      setError(false);

      // Optional: reset form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setServices([]);
      setJobSize([]);
      setJobDescription("");
    } catch (err) {
      setError(true);
      setSubmitted(false);
    }
  };

  const handleCheckboxChange = (setter) => (event) => {
    const value = event.target.value;
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
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
        image_url="/header-image/contact.jpg"
        blurb="Have a question or want to get started with our services? We'd love to hear from you!"
        showButton={false}
      />

      <div className="contact-form-container">
        <div className="inner-container">
          <h2 className="h2-alt">Get in Touch</h2>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="custom-form">
              {/* All your form fields stay exactly the same */}
              {/* (I trimmed here for readability — keep yours as-is) */}
              
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
            ? "Thank you for your message!"
            : error
            ? "Error submitting your message!"
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
