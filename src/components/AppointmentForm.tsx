
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM"
];

interface ServiceOption {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface BarberOption {
  id: string;
  name: string;
  specialties: string[];
}

const services: ServiceOption[] = [
  { id: "haircut", name: "Classic Haircut", duration: 30, price: 25 },
  { id: "beard-trim", name: "Beard Trim", duration: 15, price: 15 },
  { id: "haircut-beard", name: "Haircut & Beard Combo", duration: 45, price: 35 },
  { id: "hot-towel", name: "Hot Towel Shave", duration: 30, price: 30 },
  { id: "hair-color", name: "Hair Coloring", duration: 60, price: 50 },
  { id: "facial", name: "Men's Facial", duration: 30, price: 40 },
];

const barbers: BarberOption[] = [
  { id: "john", name: "John Smith", specialties: ["haircut", "beard-trim", "haircut-beard"] },
  { id: "mike", name: "Mike Johnson", specialties: ["haircut", "hair-color", "beard-trim"] },
  { id: "dave", name: "Dave Williams", specialties: ["hot-towel", "facial", "haircut-beard"] },
  { id: "carlos", name: "Carlos Rodriguez", specialties: ["haircut", "beard-trim", "hot-towel"] },
];

const AppointmentForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [service, setService] = useState(initialService);
  const [barber, setBarber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!date || !timeSlot || !service || !barber || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would be an API call to save the appointment
    // For now, we'll just show a success toast
    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${format(date, 'MMMM d, yyyy')} at ${timeSlot}.`,
    });
    
    // Reset form
    setDate(undefined);
    setTimeSlot("");
    setService("");
    setBarber("");
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
  };

  // Filter barbers based on selected service
  const availableBarbers = service 
    ? barbers.filter(b => b.specialties.includes(service))
    : barbers;
  
  const selectedService = services.find(s => s.id === service);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
        <CardDescription>Schedule your next grooming session with our expert barbers.</CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="datetime" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="datetime">Date & Time</TabsTrigger>
              <TabsTrigger value="service">Service & Barber</TabsTrigger>
              <TabsTrigger value="contact">Your Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="datetime" className="space-y-6">
              <div>
                <Label htmlFor="date">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => 
                        date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                        date.getDay() === 0
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="time">Select Time</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="button" className="w-full" onClick={() => document.querySelector('[data-value="service"]')?.click()}>
                Continue to Services
              </Button>
            </TabsContent>
            
            <TabsContent value="service" className="space-y-6">
              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - ${service.price} ({service.duration} mins)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedService && (
                <div className="bg-muted p-3 rounded-md text-sm">
                  <div className="font-medium text-barber-brown">{selectedService.name}</div>
                  <div className="flex justify-between mt-1">
                    <span>Duration: {selectedService.duration} minutes</span>
                    <span>Price: ${selectedService.price}</span>
                  </div>
                </div>
              )}
              
              <div>
                <Label htmlFor="barber">Select Barber</Label>
                <Select value={barber} onValueChange={setBarber} disabled={!service}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder={service ? "Choose a barber" : "Select a service first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {availableBarbers.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id}>
                        {barber.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => document.querySelector('[data-value="datetime"]')?.click()}
                >
                  Back
                </Button>
                <Button 
                  type="button" 
                  onClick={() => document.querySelector('[data-value="contact"]')?.click()}
                  disabled={!service || !barber}
                >
                  Continue to Details
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <Textarea 
                  id="notes" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} 
                  placeholder="Any special requests or notes for your barber..."
                  rows={3}
                />
              </div>
              
              <Separator />
              
              {date && service && (
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold text-center mb-2">Appointment Summary</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Date:</div>
                    <div>{date ? format(date, 'MMMM d, yyyy') : 'Not selected'}</div>
                    
                    <div>Time:</div>
                    <div>{timeSlot || 'Not selected'}</div>
                    
                    <div>Service:</div>
                    <div>{selectedService?.name || 'Not selected'}</div>
                    
                    <div>Price:</div>
                    <div>${selectedService?.price || '0'}</div>
                    
                    <div>Barber:</div>
                    <div>{barbers.find(b => b.id === barber)?.name || 'Not selected'}</div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => document.querySelector('[data-value="service"]')?.click()}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  className="bg-barber-gold hover:bg-barber-gold/90 text-black"
                >
                  Book Appointment
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
