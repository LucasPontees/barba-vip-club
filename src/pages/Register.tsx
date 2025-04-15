
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration - in a real app, this would be a Supabase auth call
    setTimeout(() => {
      // Mock successful registration
      toast({
        title: "Registration Successful",
        description: "Welcome to Barba VIP! You can now log in to your account.",
      });
      setIsLoading(false);
      navigate('/login');
    }, 1500);
    
    // In a real implementation with Supabase:
    // try {
    //   const { error } = await supabase.auth.signUp({
    //     email,
    //     password,
    //     options: {
    //       data: {
    //         full_name: name,
    //       }
    //     }
    //   });
    //   
    //   if (error) throw error;
    //   
    //   toast({ 
    //     title: "Registration Successful", 
    //     description: "Please check your email to confirm your account." 
    //   });
    //   navigate('/login');
    // } catch (error) {
    //   toast({
    //     title: "Registration Failed",
    //     description: error.message,
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4">
          <Card className="mx-auto max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
              <CardDescription>
                Sign up to book appointments and join our VIP club
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the{" "}
                      <Link to="/terms" className="text-barber-gold hover:underline">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-barber-gold hover:bg-barber-gold/90 text-black" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-barber-gold hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
