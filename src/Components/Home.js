import React, { useState, useCallback  } from 'react';
import Slider from 'react-slick';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaBars, FaTimes, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { LayoutDashboard, Home as HomeIcon, X, Calendar, Mail, Phone, User } from 'lucide-react';
import plots from './images/plotImg.jpg';
import consti from './images/slider_2.jpg';
import layout from './images/Layout-300x243.jpg';
import market from './images/1603747793-GettyImages-1061234002.webp';
import rohan from './images/rohans.png';
import video from './images/vids2.mp4';
import rename from './images/rename.jpg'
import ChatBot from './Chatbot';  // Ensure this path is correct
import GoogleReviews from './Getting';
import PopularAreas from './Plots/Pages/PopularAreas';
import './Main.css';

// ServiceCard component
const ServiceCard = ({ title, description, icon: Icon, href, image }) => (
  <div
    className="xpat-service-card bg-gray-100 p-8 rounded-lg shadow-md relative overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-10px] hover:bg-gray-900 hover:text-white group"
    onClick={() => window.location.href = href}
  >
    <div className="relative z-10">
      <Icon className="w-12 h-12 mb-4 transition-colors duration-300 group-hover:text-white" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href={href} className="inline-block font-bold text-blue-600 group-hover:text-white">
        Read More
      </a>
    </div>
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-20"
    />
  </div>
);

// ServicesGrid component
const ServicesGrid = () => {
  const services = [
    {
      title: "Plots",
      description: "Find the perfect plot with prime locations tailored to your needs.",
      icon: FaMapMarkerAlt,
      href: "/plots",
      image: plots
    },
    {
      title: "Construction",
      description: "Expert construction services built with precision and quality.",
      icon: FaBuilding,
      href: "/construction",
      image: consti
    },
    {
      title: "Layout Development",
      description: "Get expert help in designing your ideal layout.",
      icon: LayoutDashboard,
      href: "/plots",
      image: layout
    },
    {
      title: "Residential Real Estate Marketing",
      description: "Unlock the best market value for your plots with our expert sales strategies.",
      icon: HomeIcon,
      href: "/plots",
      image: market
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

// Main Home component
const Home = React.memo(() => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentFormData, setAppointmentFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: '',
  });
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAppointmentChange = useCallback((e) => {
    const { name, value } = e.target;
    setAppointmentFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleContactChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const sendEmail = (templateParams, isAppointment = false) => {
    emailjs.send('service_6i9br0x', 'template_po4448h', templateParams, 'V6XQV5b3ZjIxTPWFc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(isAppointment ? 'Appointment booked successfully!' : 'Message sent successfully!');
        if (isAppointment) {
          setAppointmentFormData({
            name: "",
            email: "",
            phone: "",
            date: '',
          });
          setShowAppointmentModal(false);
        } else {
          setContactFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Rohan Infra',
      from_name: appointmentFormData.name,
      from_email: appointmentFormData.email,
      from_phone: appointmentFormData.phone,
      appoint_date: `Appointment requested for ${appointmentFormData.date}`,
    };
    sendEmail(templateParams, true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Rohan Infra',
      from_name: contactFormData.name,
      from_email: contactFormData.email,
      from_phone: contactFormData.phone,
      message: contactFormData.message
    };
    sendEmail(templateParams);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleContactClick = () => {
    document.querySelector('.xpat-contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleMoreDetailClick = () => {
    setShowAppointmentModal(true); // Show the appointment modal
    navigate('/construction'); // Navigate to the /construction route
};
  
  // Appointment Modal component
  const AppointmentModal = React.memo(({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000000000]">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Book an Appointment</h2>
          <button
            onClick={() => setShowAppointmentModal(false)}
            className="text-gray-500 hover:text-red-700 transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <p className="mb-6 text-gray-600">Schedule a meeting with one of our expert real estate agents.</p>
        <form onSubmit={handleAppointmentSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
              name="name"
              value={appointmentFormData.name}
              onChange={handleAppointmentChange}
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Your Email"
              name="email"
              value={appointmentFormData.email}
              onChange={handleAppointmentChange}
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              placeholder="Your Phone Number"
              required
              name="phone"
              value={appointmentFormData.phone}
              onChange={handleAppointmentChange}
            />
          </div>
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              required
              name="date"
              value={appointmentFormData.date}
              onChange={handleAppointmentChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  ));


  return (
    <div className="xpat-home">
      {/* Header Section */}
      <header className="xpat-header">
        <img src={rohan} alt="Construction" className="xpat-logo" />
        <div className="xpat-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <nav className={`xpat-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#aboutus" onClick={closeMenu}>About us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="/plots" onClick={closeMenu}>Plots</a>
          <a href="/construction" onClick={closeMenu}>Construction</a>
          <a href="#contactus" onClick={handleContactClick}>Contact us</a>
        </nav>
        <button className="xpat-appointment-btn" onClick={handleContactClick}>Get Appointment</button>
      </header>

      {/* Video Hero Section */}
      <section className="video-hero" id="home">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>An Expert Service <span>You Can Trust</span></h1>
          <p>Creating architectural and creative solutions</p>
          <button className="detail-btn" onClick={handleContactClick}>More Detail</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="xpat-company" id="aboutus">
        <h2>Building Your Dream Since 2017</h2>
        <div className="xpat-company-content">
          <div className="xpat-company-text">
            <p>At Rohan Infra, we specialize in both plot selling and construction services, delivering solutions that cater to a wide range of client needs. Our dedication to quality and precision ensures that every project, whether developing land or constructing buildings, is handled with care and professionalism.</p>
            <p>We prioritize understanding our clients' goals and delivering results that not only meet but exceed their expectations. With an experienced and knowledgeable team, Rohan Infra stands as a trusted partner in the real estate and construction industries.</p>
          </div>
          <div className="xpat-company-image"></div>
        </div>
      </section>

      <PopularAreas />

      {/* Services Section */}
      <section className="xpat-services" id="services">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <ServicesGrid />
      </section>

      {/* Features Section */}
      <section className="xpat-features">
        <div className="xpat-features-content">
          <h2>We Service You More</h2>
          <p>At Rohan Infra, we excel in construction and plot selling, ensuring every project is handled with precision and care. Our commitment to excellence turns your vision into reality.</p>
          <ul className="xpat-features-list">
            <li>Best Quality Work</li>
            <li>Top Quality Equipment</li>
            <li>Experienced Workers</li>
            <li>Best Civil Engineers</li>
            <li>Budget-Friendly</li>
            <li>Great Understanding</li>
            <li>Emergency Support</li>
            <li>Responsible Reasonable</li>
          </ul>
          <button className="xpat-contact-btn" id="contactus" onClick={handleContactClick}>Contact US</button>
        </div>
        <div className="xpat-features-image"></div>
      </section>

      {/* Projects Section */}
      {/* <section className="xpat-projects" id="projects">
        <h2>Our Projects</h2>
        <Slider {...sliderSettings} className="xpat-slider">
          <div className="xpat-project-slide">
            <img src={prop1} alt="Project 1" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop2} alt="Project 2" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop4} alt="Project 3" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop5} alt="Project 4" />
          </div>
        </Slider>
      </section> */}

      {/* Contact Section */}
      <GoogleReviews />

      <section className="xpat-contact">
        <div className="xpat-contact-content" id="contactus">
          <h2>Contact Us</h2>
          <form className="xpat-contact-form" onSubmit={handleContactSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              value={contactFormData.name}
              onChange={handleContactChange} 
              required
            />
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              name="phone" 
              value={contactFormData.phone}
              onChange={handleContactChange} 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              value={contactFormData.email}
              onChange={handleContactChange} 
              required 
            />
            <textarea
              placeholder="Message"
              name="message"
              value={contactFormData.message}
              onChange={handleContactChange}
              required
            />
            <button type="submit" className="xpat-submit-btn">Send Message</button>
          </form>
        </div>

        <div className="xpat-contact-info">
          <h3>Get In Touch</h3>
          <p>Address: #342, 2nd and 3rd Floor Dr. Rajkumar Road Beside AL-BEK Restaurant Block 6th Rajajinagar Bengaluru - 560010</p>
          <br></br>
          <p>Phone: (+91) 6361285668</p>
          <p>Email: rohaninfrabuilderrs@gmail.com</p>
          <div className="xpat-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61554191187502" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            </a>
            <a href="https://youtube.com/@rohaninfrabuilderrs?si=PwFo7YBOsMje_JFu" target="_blank" rel="noopener noreferrer">
            <FaYoutube/>
             </a>
            <a href="https://www.instagram.com/rohaninfrabuilderrs?igsh=MTV5MTg2amJ2cXV2cg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            
          </div>
        </div>
      </section>

      {/* Render Appointment Modal */}
      {showAppointmentModal && <AppointmentModal />}

      <ChatBot />

    </div>
);
});

export default Home;