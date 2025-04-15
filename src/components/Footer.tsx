
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-barber-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Barber VIP Club" className="h-10 w-10" />
              <span className="text-xl font-bold text-barber-gold">BARBA VIP</span>
            </div>
            <p className="text-gray-400 mb-4">Premium barber services with exclusive VIP club membership benefits.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-gold">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-gold">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/appointments" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white">VIP Club</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-gold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/haircut" className="text-gray-400 hover:text-white">Haircut</Link></li>
              <li><Link to="/services/beard" className="text-gray-400 hover:text-white">Beard Trim</Link></li>
              <li><Link to="/services/shave" className="text-gray-400 hover:text-white">Hot Towel Shave</Link></li>
              <li><Link to="/services/color" className="text-gray-400 hover:text-white">Hair Coloring</Link></li>
              <li><Link to="/services/facials" className="text-gray-400 hover:text-white">Facials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-barber-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Barber Street, Hairtown, HT 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-barber-gold flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-barber-gold flex-shrink-0" />
                <span className="text-gray-400">info@barbavip.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Barba VIP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
