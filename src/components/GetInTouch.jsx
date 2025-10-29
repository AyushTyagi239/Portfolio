import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import GetInTouchImage from "../assets/GetInTouch.png";
import Notification from "./Notification";
import "./GetInTouch.css";

const GetInTouch = () => {
  const bubbleImage = GetInTouchImage;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Stored submissions (for local state display only)
  const [submissions, setSubmissions] = useState([]);

  // Notification state
  const [notification, setNotification] = useState({ message: "", type: "" });

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setNotification({ message: "All fields are required!", type: "error" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNotification({ message: "Invalid email address!", type: "error" });
      return false;
    }

    return true;
  };

  // Submit form → send to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/save-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Server error");
      }

      // Add to local submissions list for display/debug
      const newEntry = { ...formData, id: Date.now() };
      setSubmissions((prev) => [...prev, newEntry]);

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Success notification
      setNotification({
        message: "Message sent and saved successfully!",
        type: "success",
      });

      console.log("✅ Saved on server:", result.saved);
    } catch (error) {
      console.error("❌ Error sending form data:", error);
      setNotification({
        message: "Something went wrong. Try again!",
        type: "error",
      });
    }
  };

  return (
    <section className="get-in-touch-section">
      {/* Popup notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

      <div className="container">
        <motion.div
          className="get-in-touch-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Visual Section */}
          <motion.div
            className="get-in-touch-visual-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="visual-container">
              <motion.div
                className="floating-element"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundImage: `url(${bubbleImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="ai-network-pattern"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="get-in-touch-text-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="get-in-touch-title">
              <BlurText text={"Get in Touch Today!"} />
            </h1>

            <div className="get-in-touch-description">
              <p>
                Have a question, project idea, or looking for more information about our services?
                Fill out the form below, and we'll get back to you promptly.
              </p>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
