
import React from 'react';
import { UserCircle2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    toast({
      title: "Logged out successfully",
      description: "We hope to see you again soon!",
    });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-barber-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Barber VIP Club" className="h-10 w-10" />
          <Link to="/" className="text-2xl font-bold text-barber-gold">BARBA VIP</Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-barber-dark p-4 z-50 animate-fade-in">
                <nav className="flex flex-col space-y-4">
                  <Link to="/" className="text-white hover:text-barber-gold" onClick={toggleMenu}>Home</Link>
                  <Link to="/services" className="text-white hover:text-barber-gold" onClick={toggleMenu}>Services</Link>
                  <Link to="/appointments" className="text-white hover:text-barber-gold" onClick={toggleMenu}>Appointments</Link>
                  <Link to="/membership" className="text-white hover:text-barber-gold" onClick={toggleMenu}>VIP Club</Link>
                  {isAuthenticated ? (
                    <>
                      <Link to="/dashboard" className="text-white hover:text-barber-gold" onClick={toggleMenu}>Dashboard</Link>
                      <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="text-white hover:text-barber-gold" onClick={toggleMenu}>Login</Link>
                      <Link to="/register">
                        <Button variant="default" className="w-full bg-barber-gold hover:bg-barber-gold/90 text-black">Register</Button>
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="text-white hover:text-barber-gold">Home</Link>
              <Link to="/services" className="text-white hover:text-barber-gold">Services</Link>
              <Link to="/appointments" className="text-white hover:text-barber-gold">Appointments</Link>
              <Link to="/membership" className="text-white hover:text-barber-gold">VIP Club</Link>
              {isAuthenticated && (
                <Link to="/dashboard" className="text-white hover:text-barber-gold">Dashboard</Link>
              )}
            </nav>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-white hover:text-barber-gold">
                    <UserCircle2 size={24} />
                  </Link>
                  <Button variant="outline" onClick={handleLogout} className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-black">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" className="text-white hover:text-barber-gold">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="default" className="bg-barber-gold hover:bg-barber-gold/90 text-black">Register</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
