import "./style.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs.send(
        "service_8mpeu9w",
        "template_vr35r0t",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: formData.title,
          message: formData.message,
        },
        "IO51RoOncXBeVnExI"
      );

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        title: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message.");
      console.log(error.text);
    }
  };

  return (
    <div className="content_contact">
      <section className="hug_elements_page">
        <div className="format_column">
          <div className="title_form">
            <h3>
              Job prospect? Freelance opportunity? Message me below and I´ll get
              back to you as soon as possible.
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter the title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write the message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="image_send_letter">
          <img src={"/mail_box.jpg"} alt="Mail box" />
        </div>
      </section>
    </div>
  );
}

export default Contacts;
