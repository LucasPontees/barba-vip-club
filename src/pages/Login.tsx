
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication - in a real app, this would be a Supabase auth call
    setTimeout(() => {
      // Mock successful login
      toast({
        title: "Login Successful",
        description: "Welcome back to Barba VIP!",
      });
      setIsLoading(false);
      navigate('/');
    }, 1500);
    
    // In a real implementation with Supabase:
    // try {
    //   const { error } = await supabase.auth.signInWithPassword({
    //     email,
    //     password
    //   });
    //   
    //   if (error) throw error;
    //   toast({ title: "Login Successful", description: "Welcome back to Barba VIP!" });
    //   navigate('/');
    // } catch (error) {
    //   toast({
    //     title: "Login Failed",
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
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-barber-gold hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-barber-gold hover:bg-barber-gold/90 text-black" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-barber-gold hover:underline">
                  Sign up
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

export default Login;
