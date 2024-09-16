
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-us" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Say Hello! 👋</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4 shadow-lg border-0">
              <div className="row">
                <div className="col-md-6">
                  <form className="row g-3">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="address-section text-center">
                    <h4 className="mb-4">Our Location</h4>
                    <p>
                      <FaMapMarkerAlt /> <strong>Kihara Secondary School</strong><br />
                      Kihara-Gacii-Karura Road, Kiambaa<br />
                      P.O. Box: 72155, 00200 City Square, Nairobi, Kenya
                    </p>
                    <p>
                      <FaPhoneAlt /> <strong>Phone:</strong> 020 521385<br />
                    </p>
                    <p>
                      <FaEnvelope /> <strong>Email:</strong> info@kiharasecondary.ac.ke
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h4 className="text-center">Find Us on the Map</h4>
                <div className="map-container text-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.933962598193!2d36.73630627577079!3d-1.2063770987821008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23241e936bab%3A0xe7bd370fcad4768!2sKIHARA%20SECONDARY%20SCHOOL!5e0!3m2!1sen!2ske!4v1726496795335!5m2!1sen!2ske"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kihara Secondary School"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
