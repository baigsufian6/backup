import {React,useEffect} from "react";
import ImageCarousel from "./Imagecorosel3"; // Ensure this is the path to your carousel component

const ProjectDetails = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-blue-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 mt-10 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500 ease-out">

        {/* Project Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-900 animate-fade-in-down">Rohan Infra Builders and Developers</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-4 animate-fade-in-down">Introducing Our Latest Project</h2>
          <h3 className="text-xl font-bold text-blue-800 mt-2 animate-fade-in-down">RRR - Rohan Royal Residency</h3>
        </div>

        {/* Image Carousel */}
        <div className="mb-6 animate-fade-in-up">
          <ImageCarousel />
        </div>

        {/* Project Details Section */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Premium Plots for Sale</h3>
          <p className="text-gray-600 mb-2"><strong>Location:</strong> Chandrappa Circle, Near Big Banyan Tree</p>
          <p className="text-gray-600 mb-2"><strong>Special Launch Offer:</strong> ₹2077/- per sqft (First 15 Plots Only!)</p>
          <p className="text-gray-600 mb-2"><strong>Booking Amount:</strong> ₹1 Lakh per Plot</p>
          <p className="text-gray-600 mb-2"><strong>Total Area:</strong> 1 Acre</p>
          <p className="text-gray-600 mb-2"><strong>Total Plots:</strong> 35</p>
        </div>

        {/* Plot Dimensions */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Plot Dimensions</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li className="hover:text-blue-600 transition-colors duration-300">30x40 (1200 sq.ft)</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Odd Sites Available</li>
          </ul>
        </div>

        {/* Amenities */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Amenities</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li className="hover:text-blue-600 transition-colors duration-300">Gated Community with 10ft Compound Wall</li>
            <li className="hover:text-blue-600 transition-colors duration-300">White Top Road</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Water Connection (CMC & Borewell)</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Underground Sanitary Connections</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Overhead Electricity</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Street Lights</li>
            <li className="hover:text-blue-600 transition-colors duration-300">24/7 Security</li>
          </ul>
        </div>

        {/* Nearby Locations */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Nearby Locations</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li className="hover:text-blue-600 transition-colors duration-300">Big Banyan Tree: 2 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Chandrappa Circle: 500 M</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Manchanabele Dam: 5.5 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Saligrama Temple: 5 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Ruppi's Resort: 2 KM</li>
          </ul>
        </div>

        {/* Nearby Schools & Colleges */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Nearby Schools & Colleges</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li className="hover:text-blue-600 transition-colors duration-300">Universal Group of Institutions: 4 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Sacred Group of Institutions: 3 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">GR International Public School: 5 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">East West College: 8 KM</li>
          </ul>
        </div>

        {/* Nearby Hospitals */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Nearby Hospitals</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li className="hover:text-blue-600 transition-colors duration-300">Sri Sanjeevini Multispeciality Hospital: 5.5 KM</li>
            <li className="hover:text-blue-600 transition-colors duration-300">Samraksha Hospital: 8.5 KM</li>
          </ul>
        </div>

        {/* Registration & Payment Info */}
        <div className="mt-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-gray-700">Ready for Registration & Construction</h4>
          <p className="text-gray-600 mt-2"><strong>Bank Loan:</strong> Approved by all leading banks (up to 70% loan available)</p>
          <p className="text-gray-600 mt-2"><strong>Payment Terms:</strong> Payments can be made via Cheque, Cash, or Online Transfer.</p>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center animate-fade-in-up">
          <p className="text-xl font-semibold text-blue-700">For More Details</p>
          <p className="text-lg text-gray-700">Contact us now!</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;