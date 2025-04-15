
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from 'react-router-dom';
import DateTimeTab from './appointment/DateTimeTab';
import ServiceBarberTab from './appointment/ServiceBarberTab';
import ContactDetailsTab from './appointment/ContactDetailsTab';

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
    
    if (!date || !timeSlot || !service || !barber || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
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

  const navigateToTab = (tabValue: string) => {
    const tab = document.querySelector(`[data-value="${tabValue}"]`) as HTMLElement;
    if (tab) tab.click();
  };

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
            
            <TabsContent value="datetime">
              <DateTimeTab
                date={date}
                setDate={setDate}
                timeSlot={timeSlot}
                setTimeSlot={setTimeSlot}
                onContinue={() => navigateToTab('service')}
              />
            </TabsContent>
            
            <TabsContent value="service">
              <ServiceBarberTab
                service={service}
                setService={setService}
                barber={barber}
                setBarber={setBarber}
                onBack={() => navigateToTab('datetime')}
                onContinue={() => navigateToTab('contact')}
              />
            </TabsContent>
            
            <TabsContent value="contact">
              <ContactDetailsTab
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                notes={notes}
                setNotes={setNotes}
                date={date}
                timeSlot={timeSlot}
                service={service}
                barber={barber}
                onBack={() => navigateToTab('service')}
              />
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
