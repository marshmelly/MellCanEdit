import { useRef, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function CTA() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");



  const serviceId = 'service_vqyrg1p',
         templateId = 'template_bbq7pif',
         publicKey = 'guGQndD2UougJWhTq';

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(() => {
        setLoading(false);
        setMessage("✅ Your message has been sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setMessage("❌ Failed to send. Please try again.");
      });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="wrap">

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="eyebrow mono">
              <span className="rec-dot"></span>
              LET'S CONNECT
            </div>

            <h2 className="cta-title">
              Ready to create something
              <span className="accent"> amazing?</span>
            </h2>

            <p>
              Whether you need video editing, photography,
              graphic design or monthly content creation,
              I'd love to hear about your project.
            </p>

            <div className="contact-details">

              <div>
                <h4>Email</h4>
                <span>rolfensonfobbs05@gmail.com</span>
              </div>

              <div>
                <h4>Response Time</h4>
                <span>Usually within 24 Hours</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className="form-row">

              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
              />

              <select
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service
                </option>

                <option>Video Editing</option>
                <option>Photography</option>
                <option>Graphic Design</option>
                <option>Brand Identity</option>
                <option>Monthly Content</option>

              </select>

            </div>

            <select
              name="budget"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Estimated Budget
              </option>

              <option>Below KSh 5,000</option>
              <option>KSh 5,000 - 15,000</option>
              <option>KSh 15,000 - 30,000</option>
              <option>KSh 30,000 - 50,000</option>
              <option>Above KSh 50,000</option>

            </select>

            <textarea
              name="message"
              rows="7"
              placeholder="Tell me about your project..."
              required
            />

           <div className="contact-buttons">

  <button
    className="btn-primary"
    type="submit"
    disabled={loading}
  >
    {loading ? "Sending..." : "SEND MESSAGE →"}
  </button>

  <a
  href="https://wa.me/254794652017?text=Hi%20Fobbs,%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
>
  {/* <FaWhatsapp /> */}
  <span>WhatsApp Me</span>
</a>
</div>
            {message && (
              <p className="form-message">
                {message}
              </p>
            )}

           

          </form>

        </div>
      </div>
    </section>
  );
}