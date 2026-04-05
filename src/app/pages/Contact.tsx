import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
     const whatsappNumber = "919226131359"; // Replace with actual WhatsApp number (country code + number, no spaces or special characters)
  
     const encodedMessage = encodeURIComponent(formData.subject + ": " + formData.message + " - Contact Info: " + formData.name + ", " + formData.email + ", " + formData.phone + ", " + formData.company );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    alert("Thank you for contacting us! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updatedForm = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(updatedForm);
     
    console.log("Form data updated:", updatedForm);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Register & Corporate Office",
      details: ["Novanex Pharmaceuticals Pvt Ltd Office.No-818, Sr.No-263/264, Vantage Capital(Hinjawadi), Pune-411057, Maharashtra"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 70506 05093", "+91 92261 31359"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@novanex.in", "novanex.pharmaceutical@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have questions or need assistance? Our team is here to help you with any inquiries about our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="quality">Quality & Regulatory</option>
                    <option value="distribution">Distribution & Supply</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                We welcome visitors to our facility. Please schedule an appointment in advance for factory tours or business meetings.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 mb-8 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.823956893019!2d73.8567433153617!3d18.52043008472209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08c5b0a8b2d%3A0x2b9b1b1b1b1b1b1b!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Novanex Pharmaceuticals Location"
                />
              </div>

              {/* Regional Offices */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Regional Offices
                </h3>
                <div className="space-y-4">
                  {/* <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">North Region</p>
                      <p className="text-sm text-gray-600">Delhi NCR, India</p>
                    </div>
                  </div> */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Region</p>
                      <p className="text-sm text-gray-600">Pune, India</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">West Region</p>
                      <p className="text-sm text-gray-600">Ahmedabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">East Region</p>
                      <p className="text-sm text-gray-600">Kolkata, India</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">For Product Inquiries</h3>
              <a href="mailto:support@novanex.in" className="text-blue-100 hover:text-white transition-colors">
                support@novanex.in
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">For Career Opportunities</h3>
              <a href="mailto:support@novanex.in" className="text-blue-100 hover:text-white transition-colors">
                support@novanex.in
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">General Inquiries</h3>
              <a href="mailto:support@novanex.in" className="text-blue-100 hover:text-white transition-colors">
                support@novanex.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
