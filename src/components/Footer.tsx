import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">Ecofy Agency</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              We help eCommerce brands grow profitably with ROI-driven email & SMS marketing.
              Built to scale your revenue, not your workload.
            </p>
          </div>


          <div className="flex md:justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-green-500 transition">Services</a></li>
                <li><a href="#about" className="hover:text-green-500 transition">About</a></li>
                <li><a href="#case-studies" className="hover:text-green-500 transition">Case Studies</a></li>
                <li><a href="#team" className="hover:text-green-500 transition">Team</a></li>
                <li><Link to="/book-a-call" className="hover:text-green-500 transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-green-500 mr-3" />
                <span>Uzbekistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-3" />
                <span>+998 50 072 21 20</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-500 mr-3" />
                <span>zuxriddinmutalibjonov@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-3" />
                <span>Mon–Fri, 9AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ecofy Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
