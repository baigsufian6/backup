import { React, useEffect } from 'react';
import ImageCarousel from './ImageCourosel';
import projectBanner from '../Assets/rohanlogo.png';

const Project1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const amenities = [
    'Gated Community with 10-feet Compound Wall',
    'White Top Road',
    'Water Connection, CMC',
    'Underground Sanitary Connections',
    'Overhead Electricity & Tank',
    'Street Lights',
    '24/7 Security',
    'Sewage System'
  ];

  const plotDimensions = [
    '20x30 (600 sq. ft)',
    '20x40 (800 sq. ft)',
    '30x30 (900 sq. ft)',
    '30x40 (1200 sq. ft)',
    'ODD SITES'
  ];

  const nearbyLocations = [
    'Christ School, BGS International School',
    'ISS Sports Arena Cricket Ground - 4.5 Km (10 min)',
    'BGS International Residential School & Cricket Stadium',
    'Sri Adichunchanagiri Shaka Mutt & National Public Schools - 5.5 Km (12 min)',
    'Guhantara Resorts - 6.0 Km (13 min)',
    'Kanakapura Road - 7.5 Km (15 min)',
    'Bangalore Mysore Expressway - 7.5 Km (15 min)',
    'Rajarajeshwari Medical & Engineering College - 8.0 Km (15 min)',
    'Art of Living Centre - 8.5 Km (17 min)',
    'Metro Station, Challaghatta - 9.0 Km (18 min)',
    'Christ University, Kengeri Campus - 9.5 Km (20 min)',
    'NICE Road Toll Plaza (Kanakapura) - 11.5 Km (20 min)',
    'Wonderla Dreamland - 14 Km (25 min)',
    'Turahalli Forest - 12 Km (20 min)',
    'Vivekananda Institute of Technology, Delhi Public School - 4.5 Km (11 min)',
    'Jyothy Institute of Technology - 7.5 Km (15 min)',
    'Aagara Lake View Point - 4.5 Km (11 min)',
    'RNS Institute of Technology - 15 Km (25 min)',
    'Eagleton The Golf Resort - 13 Km (20 min)'
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Project Banner */}
      <div className="mb-8 flex justify-center">
        <img 
          src={projectBanner} 
          alt="Project Banner" 
          className="w-auto h-32 object-contain"
          loading="eager"
        />
      </div>

      {/* Project Details */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          ROHAN INFRA BUILDERS and DEVELOPERS
        </h1>
        <h2 className="text-2xl font-semibold text-blue-700">
          Introducing ROHAN CHUNCHADRI LAYOUT
        </h2>
      </div>

      {/* Highlights Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Project Highlights</h3>
        <p className="text-lg text-gray-700 mb-2"><strong>Premium DC Conversion Plots</strong></p>
        <p className="text-lg text-gray-700 mb-2"><strong>Location:</strong> Kumbalgodu, Mysore Road</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Total Area:</strong> 8 Acres, 2.5 Guntas</p>
        <p className="text-lg text-gray-700"><strong>Total Plots:</strong> 219</p>
      </div>

      {/* Plot Dimensions Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Plot Dimensions</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {plotDimensions.map((dimension, index) => (
            <li key={index}>{dimension}</li>
          ))}
        </ul>
      </div>

      {/* Amenities Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Amenities</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Nearby Locations Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nearby Locations</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {nearbyLocations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>

      {/* Location Map */}
      <div className="mb-10 text-center">
        <ImageCarousel />
      </div>

      {/* Registration and Payment Details */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          Ready for Registration & Construction
        </h3>
        <p className="text-lg text-gray-700 mb-2"><strong>Bank Loan:</strong> Approved by IDBI and all leading banks up to 70%</p>
        <p className="text-lg text-gray-700"><strong>Payment Options:</strong> Cheque, Cash, and Online</p>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">
          Contact Us Today for More Details!
        </h3>
      </div>
    </div>
  );
};

export default Project1;