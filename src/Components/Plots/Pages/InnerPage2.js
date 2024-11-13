import {React, useEffect} from 'react';
import ImageCarousel from './ImageCorosel2'; // Assuming this component displays a carousel of images
import projectBanner from '../Assets/rohanlogo.png'; // Example image path

const Project2 = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out">
      {/* Project Banner */}
      <div className="mb-8 flex justify-center">
        <img
          src={projectBanner}
          alt="Project Banner"
          className="w-auto h-32 object-contain"
        />
      </div>

      {/* Project Details */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          ROHAN INFRA BUILDERS and DEVELOPERS
        </h1>
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          ROHAN HILL VIEW ENCLAVE
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Location:</strong> Devanahalli Main Road, opposite the Honda Bike Showroom
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Approval:</strong> BIAAPA
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Price:</strong> ₹4750/sqft
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Total Area:</strong> 2 Acres
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Total Plots:</strong> 29
        </p>
      </div>

      {/* Amenities Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Amenities</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
          <li>Secure Gated Community</li>
          <li>Spacious Roads</li>
          <li>24/7 Security Surveillance</li>
          <li>Abundant Water Supply</li>
          <li>Underground Electrical Systems</li>
          <li>Rainwater Harvesting</li>
          <li>Children's Play Area</li>
        </ul>
      </div>

      {/* Nearby Locations Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Conveniently Located Near:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
          <li>NH-44 Devanahalli Highway</li>
          <li>Kempegowda International Airport</li>
          <li>Devanahalli Town</li>
          <li>D Mart</li>
          <li>Devanahalli Fort</li>
          <li>Club Cabana</li>
          <li>Akash Hospital</li>
          <li>Ancient Wisdom International School</li>
          <li>Govt ITI College</li>
          <li>Nivasa Resort</li>
        </ul>
      </div>

      {/* Registration and Payment Details */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ready for Registration & Construction</h3>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Bank Loan:</strong> Approved by all leading banks
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Flexible Payment Options:</strong> Cheque, Cash, & Online
        </p>
        <p className="text-lg text-gray-700">
          <strong>For More Details Contact:</strong>
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-10 text-center">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Project2;
