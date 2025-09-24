import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="mt-20">
      <div className="container px-0 mx-auto max-w-6xl">
        <div className="bg-white p-8 rounded-2xl relative">
          {/* Contact Info */}
          <div className="row flex flex-wrap mt-2">
            <div className="w-full md:w-1/3 lg:w-1/3 pr-0 sm:pr-0">
              <div className="flex flex-col lg:flex-row md:block items-center text-center md:text-center lg:text-left mb-6 lg:mb-10 transition-all duration-300">
                <div className="inline-block text-center bg-gray-100 rounded-full p-3 mr-0 lg:mr-6 mb-3 lg:mb-0">
                  <span className="text-blue-500 inline-block text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Address</h4>
                  <p className="text-gray-600">Awesome Road, New York, Us</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/3">
              <div className="flex flex-col lg:flex-row md:block items-center text-center md:text-center lg:text-left mb-6 lg:mb-10 transition-all duration-300">
                <div className="inline-block text-center bg-gray-100 rounded-full p-3 mr-0 lg:mr-6 mb-3 lg:mb-0">
                  <span className="text-blue-500 inline-block text-xl">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Phone</h4>
                  <p className="mb-0">
                    <a
                      href="tel:+1234567890"
                      className="text-gray-700 hover:text-blue-500 transition-colors block"
                    >
                      +123 456 7890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/3">
              <div className="flex flex-col lg:flex-row md:block items-center text-center md:text-center lg:text-left mb-6 lg:mb-10 transition-all duration-300">
                <div className="inline-block text-center bg-gray-100 rounded-full p-3 mr-0 lg:mr-6 mb-3 lg:mb-0">
                  <span className="text-blue-500 inline-block text-xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="mb-0">
                    <a
                      href="mailto:Hello@persia.com"
                      className="text-gray-700 hover:text-blue-500 transition-colors block"
                    >
                      Hello@persia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 xl:w-2/3">
              <div className="text-center mt-6 lg:mt-10 mb-4 lg:mb-5">
                <h2 className="mb-14 text-3xl font-bold">Send me a message</h2>
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 lg:w-1/2 px-3 mb-4">
                      <input
                        className="name w-full border border-gray-300 pl-5 py-4 pr-3 bg-white rounded-lg"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 px-3 mb-4">
                      <input
                        className="email w-full border border-gray-300 pl-5 py-4 pr-3 bg-white rounded-lg"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 px-3 mb-4">
                      <input
                        className="phone w-full border border-gray-300 pl-5 py-4 pr-3 bg-white rounded-lg"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 px-3 mb-4">
                      <input
                        className="subject w-full border border-gray-300 pl-5 py-4 pr-3 bg-white rounded-lg"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Your Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-4">
                      <textarea
                        className="message w-full border border-gray-300 pl-5 py-4 pr-3 bg-white rounded-lg h-32"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="my-btn">
                    <button
                      className="btn w-full inline-block bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <p className="form-message mt-3"></p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-wrap overflow-hidden bg-gray-100 mt-8 mb-4 rounded-2xl">
            <div className="w-full">
              <div className="map-wrapper rounded-2xl h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">
                  Map will be displayed here
                </span>
                {/* You can integrate Google Maps or any other map service here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
