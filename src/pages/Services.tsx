
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: "Classic Haircut",
    description: "Precision cut with expert styling and hot towel finish.",
    price: 25,
    image: "/haircut.jpg",
    duration: 30,
    slug: "haircut"
  },
  {
    title: "Beard Trim",
    description: "Shape and style your beard for a clean, defined look.",
    price: 15,
    image: "/beard-trim.jpg",
    duration: 15,
    slug: "beard-trim"
  },
  {
    title: "Haircut & Beard Combo",
    description: "Complete grooming package for the modern gentleman.",
    price: 35,
    image: "/combo.jpg",
    duration: 45,
    slug: "haircut-beard"
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment.",
    price: 30,
    image: "/hot-towel.jpg",
    duration: 30,
    slug: "hot-towel"
  },
  {
    title: "Hair Coloring",
    description: "Professional color application to cover grays or change your look.",
    price: 50,
    image: "/hair-color.jpg",
    duration: 60,
    slug: "hair-color"
  },
  {
    title: "Men's Facial",
    description: "Rejuvenating facial treatment designed specifically for men's skin.",
    price: 40,
    image: "/facial.jpg",
    duration: 30,
    slug: "facial"
  },
  {
    title: "Head Shave",
    description: "Clean head shave with razor and soothing aftercare.",
    price: 35,
    image: "/head-shave.jpg",
    duration: 30,
    slug: "head-shave"
  },
  {
    title: "Kid's Haircut",
    description: "Gentle haircuts for young gentlemen under 12.",
    price: 20,
    image: "/kids-haircut.jpg",
    duration: 20,
    slug: "kids-haircut"
  }
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-barber-dark text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our premium grooming services, tailored to meet the needs of the modern gentleman.
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Service Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">VIP Club Members</h3>
                  <p className="text-muted-foreground">
                    As a VIP Club member, you enjoy special discounts on all our services.
                    Standard members receive 10% off, Premium members 20% off, and Executive members 30% off.
                    Learn more about our membership options on our <a href="/membership" className="text-barber-gold hover:underline">Membership page</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Group Bookings</h3>
                  <p className="text-muted-foreground">
                    Planning a special event or group grooming session? We offer special rates for groups
                    of 4 or more. Contact us directly to arrange group bookings for weddings, corporate events,
                    or other special occasions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Services</h3>
                  <p className="text-muted-foreground">
                    Don't see exactly what you're looking for? Our skilled barbers can provide custom services
                    tailored to your specific needs. Please discuss your requirements when booking your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-barber-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="mb-6">
              Schedule your appointment now and experience premium grooming at Barba VIP.
            </p>
            <a href="/appointments" className="inline-block bg-barber-gold hover:bg-barber-gold/90 text-black px-6 py-3 rounded-md font-semibold">
              Book Appointment
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
