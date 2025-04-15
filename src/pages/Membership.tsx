
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MembershipCard from '@/components/MembershipCard';
import { Check, AlertCircle } from 'lucide-react';

// Simulated subscription check - in a real app, this would come from an API
const mockUserSubscription = {
  status: false,
  tier: null
};

// Mock function to simulate Stripe checkout - in a real app, this would call a Supabase edge function
const handleSubscription = async (priceId: string) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock redirect to Stripe checkout
  alert(`Redirecting to Stripe checkout for price ID: ${priceId}`);
  
  // In a real implementation, this would be something like:
  // const { data, error } = await supabase.functions.invoke('create-checkout', {
  //   body: { priceId },
  // });
  // if (data?.url) window.location.href = data.url;
};

const membershipPlans = {
  monthly: [
    {
      title: "Standard",
      price: 19.99,
      features: [
        "2 haircuts per month",
        "10% off additional services",
        "Standard booking privileges",
        "Free beard trim with haircut",
        "Access to standard products"
      ],
      isPopular: false,
      priceId: "price_standard_monthly"
    },
    {
      title: "Premium",
      price: 39.99,
      features: [
        "4 haircuts per month",
        "20% off additional services",
        "Priority booking (24h advance)",
        "Free beard trim & hot towel service",
        "Complimentary beverage",
        "Access to premium products",
        "Monthly grooming product"
      ],
      isPopular: true,
      priceId: "price_premium_monthly"
    },
    {
      title: "Executive",
      price: 69.99,
      features: [
        "Unlimited haircuts",
        "30% off additional services",
        "VIP booking (48h advance)",
        "Complete grooming package with each visit",
        "Complimentary beverages",
        "Access to all premium products",
        "Monthly premium grooming kit",
        "Exclusive events access"
      ],
      isPopular: false,
      priceId: "price_executive_monthly"
    }
  ],
  yearly: [
    {
      title: "Standard Annual",
      price: 199.99,
      features: [
        "2 haircuts per month",
        "15% off additional services",
        "Standard booking privileges",
        "Free beard trim with haircut",
        "Access to standard products",
        "Save $40 compared to monthly"
      ],
      isPopular: false,
      priceId: "price_standard_yearly"
    },
    {
      title: "Premium Annual",
      price: 399.99,
      features: [
        "4 haircuts per month",
        "25% off additional services",
        "Priority booking (24h advance)",
        "Free beard trim & hot towel service",
        "Complimentary beverage",
        "Access to premium products",
        "Monthly grooming product",
        "Save $80 compared to monthly"
      ],
      isPopular: true,
      priceId: "price_premium_yearly"
    },
    {
      title: "Executive Annual",
      price: 699.99,
      features: [
        "Unlimited haircuts",
        "35% off additional services",
        "VIP booking (48h advance)",
        "Complete grooming package with each visit",
        "Complimentary beverages",
        "Access to all premium products",
        "Monthly premium grooming kit",
        "Exclusive events access",
        "Save $140 compared to monthly"
      ],
      isPopular: false,
      priceId: "price_executive_yearly"
    }
  ]
};

const benefits = [
  {
    title: "Unlimited Haircuts",
    description: "Depending on your plan, get up to unlimited haircuts every month.",
    icon: <Check className="w-8 h-8 text-green-500" />
  },
  {
    title: "Service Discounts",
    description: "Enjoy discounts on all additional services, from 10% to 30%.",
    icon: <Check className="w-8 h-8 text-green-500" />
  },
  {
    title: "Priority Booking",
    description: "Skip the line with priority and VIP booking privileges.",
    icon: <Check className="w-8 h-8 text-green-500" />
  },
  {
    title: "Complimentary Add-ons",
    description: "Enjoy free beard trims, hot towel service, and premium products.",
    icon: <Check className="w-8 h-8 text-green-500" />
  },
  {
    title: "Monthly Products",
    description: "Receive curated grooming products monthly with premium plans.",
    icon: <Check className="w-8 h-8 text-green-500" />
  },
  {
    title: "Exclusive Events",
    description: "Access to member-only events, product launches, and more.",
    icon: <Check className="w-8 h-8 text-green-500" />
  }
];

const faqs = [
  {
    question: "How does the membership work?",
    answer: "Our membership is a subscription service that gives you access to a set number of haircuts and additional benefits each month. Simply choose your preferred plan, subscribe, and start enjoying the perks right away."
  },
  {
    question: "Can I cancel my membership at any time?",
    answer: "Yes, you can cancel your membership at any time. There are no long-term commitments or cancellation fees. Your benefits will continue until the end of your current billing cycle."
  },
  {
    question: "How do I book appointments as a member?",
    answer: "Members can book appointments through our website, mobile app, or by calling us directly. Depending on your membership tier, you'll have standard, priority, or VIP booking privileges."
  },
  {
    question: "What happens if I don't use all my haircuts in a month?",
    answer: "Haircuts do not roll over to the next month. We encourage you to make the most of your membership by using all allocated services each month."
  },
  {
    question: "Can I share my membership with family or friends?",
    answer: "Memberships are non-transferable and can only be used by the registered member. Each person needs their own membership to enjoy the benefits."
  },
  {
    question: "How do I upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your membership plan at any time through your account settings. Changes will take effect at the beginning of your next billing cycle."
  }
];

const Membership: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubscribe = async (priceId: string) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in or create an account to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await handleSubscription(priceId);
    } catch (error) {
      toast({
        title: "Subscription Error",
        description: "There was a problem processing your subscription. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isLoggedIn} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-barber-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Barba VIP Club Membership</h1>
              <p className="text-xl mb-8">
                Join our exclusive membership club and elevate your grooming experience
                with premium benefits, priority service, and significant savings.
              </p>
              {isLoggedIn && mockUserSubscription.status ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 inline-block">
                  <p className="font-semibold">
                    You're currently subscribed to our {mockUserSubscription.tier || "VIP"} plan
                  </p>
                </div>
              ) : (
                <p className="text-barber-gold font-semibold">
                  Choose a plan below to get started
                </p>
              )}
            </div>
          </div>
        </section>
        
        {/* Membership Plans */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Select Your Membership Plan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your grooming needs and budget.
                All plans include core benefits with increasing perks at higher tiers.
              </p>
              
              <div className="flex justify-center mt-6">
                <Tabs
                  value={billingPeriod}
                  onValueChange={(value) => setBillingPeriod(value as "monthly" | "yearly")}
                  className="w-full max-w-xs"
                >
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly (Save)</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipPlans[billingPeriod].map((plan, index) => (
                <MembershipCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  isSubscribed={isLoggedIn && mockUserSubscription.status && mockUserSubscription.tier === plan.title}
                  priceId={plan.priceId}
                  onSubscribe={handleSubscribe}
                />
              ))}
            </div>
            
            {!isLoggedIn && (
              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <AlertCircle className="text-amber-500 mr-2" size={20} />
                  <p className="text-amber-800">
                    Please <Link to="/login" className="font-semibold underline">login</Link> or <Link to="/register" className="font-semibold underline">create an account</Link> to subscribe
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Membership Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Membership Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enjoy these exclusive perks when you join our VIP club.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our membership program.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-barber-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become a Barba VIP member today and start enjoying exclusive benefits and savings on premium grooming services.
            </p>
            {isLoggedIn ? (
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                  View Membership Plans
                </Button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                    Create Account
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Membership;
