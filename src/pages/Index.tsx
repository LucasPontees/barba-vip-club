
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Scissors, Clock, Star, Users } from 'lucide-react';

const featuredServices = [
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
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Executive",
    content: "The VIP membership is absolutely worth it. I save money every month and the priority booking is a game changer for my busy schedule.",
    avatar: "/testimonial1.jpg"
  },
  {
    name: "Mike Smith",
    role: "Software Developer",
    content: "I've been to many barbershops, but the attention to detail and personalized service here is unmatched. My go-to place for grooming.",
    avatar: "/testimonial2.jpg"
  },
  {
    name: "David Williams",
    role: "Financial Advisor",
    content: "Since joining the VIP club, I've never had a bad haircut. The consistency and quality are impressive, and the extra perks make it a no-brainer.",
    avatar: "/testimonial3.jpg"
  }
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-barber-dark text-white">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
          ></div>
          <div className="container mx-auto px-4 py-24 relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Experiência de cuidados pessoais premium para o cavalheiro moderno
              </h1>
              <p className="text-xl mb-8 text-gray-200">
              Barbeiros especialistas, produtos premium e serviço excepcional. Junte-se ao nosso clube VIP para vantagens exclusivas e reservas prioritárias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments">
                  <Button size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Join VIP Club
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Barba VIP</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 card-hover">
                <CardContent className="p-0 pt-6">
                  <div className="mx-auto w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Scissors size={28} className="text-barber-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Barbers</h3>
                  <p className="text-muted-foreground">
                    Our skilled barbers bring years of experience and passion to every cut.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 card-hover">
                <CardContent className="p-0 pt-6">
                  <div className="mx-auto w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Star size={28} className="text-barber-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
                  <p className="text-muted-foreground">
                    We use only the finest grooming products for outstanding results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 card-hover">
                <CardContent className="p-0 pt-6">
                  <div className="mx-auto w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Clock size={28} className="text-barber-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Efficient Service</h3>
                  <p className="text-muted-foreground">
                    Respect for your time with prompt, efficient appointments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 card-hover">
                <CardContent className="p-0 pt-6">
                  <div className="mx-auto w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Users size={28} className="text-barber-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">VIP Experience</h3>
                  <p className="text-muted-foreground">
                    Exclusive membership benefits and a personalized approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our range of expert grooming services designed to keep you looking sharp.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" className="border-barber-brown text-barber-brown hover:bg-barber-brown hover:text-white">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* VIP Club CTA */}
        <section className="py-20 bg-barber-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our VIP Club</h2>
              <p className="text-xl mb-8">
                Become a member and enjoy exclusive benefits like discounted services, 
                priority booking, complimentary products, and more.
              </p>
              <Link to="/membership">
                <Button size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Booking CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for a Fresh Look?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the Barba VIP difference.
            </p>
            <Link to="/appointments">
              <Button size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
