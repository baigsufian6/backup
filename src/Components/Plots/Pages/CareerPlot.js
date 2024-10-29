import React, { useState, useEffect } from 'react';
import page1 from '../Assets/Email1.png';
import page2 from '../Assets/Email2.png';
import page3 from '../Assets/Email3.png';
import Footer from '../FooterPlot';
import Man from '../Assets/person2.png';
import emailjs from 'emailjs-com';
import { FaLink } from 'react-icons/fa';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
  });

  const [driveLink, setDriveLink] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
  });

  const [jobPositions] = useState([
    {
      title: 'Team Leader',
      description: 'Responsible for managing and motivating a team of sales representatives to achieve sales targets and drive revenue growth',
      location: 'Rajajinagar 6th Block',
      workMode: 'offline',
      applyLink: 'rohaninfrabuilderrs@gmail.com',
    },
    {
      title: 'Business Development Executive',
      description: 'Responsible for identifying new business opportunities and partnerships.',
      location: 'Rajajinagar 6th Block',
      workMode: 'offline',
      applyLink: 'rohaninfrabuilderrs@gmail.com',
    },
    {
      title: 'Digital Marketing',
      description: 'Manage digital campaigns, SEO, and social media strategies to boost online presence.',
      location: 'Rajajinagar 6th Block',
      workMode: 'offline',
      applyLink: 'rohaninfrabuilderrs@gmail.com',
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDriveLinkChange = (e) => {
    setDriveLink(e.target.value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', jobRole: '' };

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain alphabets and spaces.';
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should be 10 digits long.';
      valid = false;
    }

    if (!formData.jobRole.trim()) {
      newErrors.jobRole = 'Job role is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      to_name: "Hiring Manager",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      drive_link: driveLink,
      jobRole: formData.jobRole
    };

    emailjs.send('service_6i9br0x', 'template_y961ul9', templateParams, 'V6XQV5b3ZjIxTPWFc')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert(`Application submitted for ${formData.jobRole}. We'll be in touch soon!`);
        setFormData({ name: '', email: '', phone: '', jobRole: '' });
        setDriveLink('');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('There was an error submitting your application. Please try again later.');
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-blue-600 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <p className="inline-block px-4">The future belongs to those who believe in the beauty of their dreams.</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 my-8">
        <img src={page1} alt="Banner Image 1" className="w-1/3 h-auto" />
        <img src={page2} alt="Banner Image 2" className="w-1/3 h-auto" />
        <img src={page3} alt="Banner Image 3" className="w-1/3 h-auto" />
      </div>

      <div className="container mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Available Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPositions.map((position, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
              <p className="text-gray-600 mb-4">{position.description}</p>
              <p className="text-sm text-gray-500">Location: {position.location}</p>
              <p className="text-sm text-gray-500 mb-4">Work Mode: {position.workMode}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => {
                  const careersSection = document.getElementById('careers-page');
                  if (careersSection) {
                    careersSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={Man} alt="Man" className="max-w-full h-auto" />
          </div>
          <div id="careers-page" className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-center mb-6">SEND YOUR RESUME</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Designation</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="BDE">Business Development Executive</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                  {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}
                </div>
                <div>
                  <input
                    type="url"
                    name="driveLink"
                    placeholder="Enter Resume Drive Link"
                    value={driveLink}
                    onChange={handleDriveLinkChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {driveLink && (
                  <div className="flex items-center bg-blue-100 p-2 rounded">
                    <FaLink className="text-blue-500 mr-2" />
                    <p className="text-sm text-gray-700 truncate">{driveLink}</p>
                  </div>
                )}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;