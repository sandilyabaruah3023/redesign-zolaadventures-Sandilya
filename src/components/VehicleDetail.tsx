import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarIcon, MapPin, Clock, Phone, Mail, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import bikesData from '@/data/bikes.json';
import carsData from '@/data/cars.json';

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
  categories?: string[];
  type?: string;
  features: string[];
  description?: string;
  specs: {
    engine: string;
    fuelType: string;
    transmission?: string;
    mileage?: string;
  };
}

const VehicleDetail = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const { toast } = useToast();
  
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Get vehicle data
  let vehicle: Vehicle | undefined;
  if (type === 'motorcycle' || type === 'bike') {
    vehicle = bikesData.bikes.find(bike => bike.id === parseInt(id || ''));
  } else if (type === 'car') {
    vehicle = carsData.cars.find(car => car.id === parseInt(id || ''));
  }

  if (!vehicle) {
    return <Navigate to="/" replace />;
  }

  const locations = [
    'Guwahati Airport ₹700 convenience fee applicable',
    'Guwahati Railway Station',
    'Fancy Bazar',
    'Paltan Bazar',
    'Pan Bazar'
  ];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and policies to continue.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the request to your backend
    toast({
      title: "Request Sent!",
      description: `Your request for ${vehicle?.name} has been submitted successfully.`
    });
    
    // Reset form
    setFullName('');
    setEmail('');
    setMessage('');
    setAcceptedTerms(false);
    setIsRequestDialogOpen(false);
  };

  const handleBookNow = () => {
    if (!pickupDate || !dropoffDate || !pickupLocation || !dropoffLocation) {
      toast({
        title: "Missing Information",
        description: "Please select pickup/dropoff dates and locations.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Initiated!",
      description: `Proceeding to book ${vehicle?.name} from ${format(pickupDate, 'PPP')} to ${format(dropoffDate, 'PPP')}.`
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vehicle Image and Info */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  {vehicle.categories?.map((category, index) => (
                    <Badge key={index} variant="secondary" className="mr-1 mb-1 bg-white/90 text-foreground">
                      {category}
                    </Badge>
                  )) || (
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {vehicle.type}
                    </Badge>
                  )}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">{vehicle.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    Starting from {vehicle.currency}{vehicle.price.toLocaleString()}.00
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {vehicle.description && (
                    <p className="text-muted-foreground">{vehicle.description}</p>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Engine</h4>
                      <p className="text-sm text-muted-foreground">{vehicle.specs.engine}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Fuel Type</h4>
                      <p className="text-sm text-muted-foreground">{vehicle.specs.fuelType}</p>
                    </div>
                    {vehicle.specs.transmission && (
                      <div className="space-y-2">
                        <h4 className="font-semibold">Transmission</h4>
                        <p className="text-sm text-muted-foreground">{vehicle.specs.transmission}</p>
                      </div>
                    )}
                    {vehicle.specs.mileage && (
                      <div className="space-y-2">
                        <h4 className="font-semibold">Mileage</h4>
                        <p className="text-sm text-muted-foreground">{vehicle.specs.mileage}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="mr-2 w-4 h-4" />
                        Request Information
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Request Information for {vehicle.name}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleRequestSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">e-Mail</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="e-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={acceptedTerms}
                            onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                          />
                          <Label htmlFor="terms" className="text-sm text-primary">
                            TERMS AND POLICIES
                          </Label>
                        </div>
                        <Button type="submit" className="w-full">
                          Send Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Booking Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    Select Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !pickupDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={setPickupDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label>Dropoff Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dropoffDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dropoffDate ? format(dropoffDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dropoffDate}
                            onSelect={setDropoffDate}
                            disabled={(date) => date < new Date() || (pickupDate && date <= pickupDate)}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Pickup Location</Label>
                      <Select value={pickupLocation} onValueChange={setPickupLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location, index) => (
                            <SelectItem key={index} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Drop Off Location</Label>
                      <Select value={dropoffLocation} onValueChange={setDropoffLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select dropoff location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location, index) => (
                            <SelectItem key={index} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleBookNow} className="w-full" size="lg">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">+91 8638875616</p>
                      <p className="text-sm text-muted-foreground">+91 6000981707</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <p className="text-sm">zola.assistant@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <div className="text-sm">
                      <p>Mon-Fri: 9am – 5pm</p>
                      <p>Sat: 10am – 3pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleDetail;