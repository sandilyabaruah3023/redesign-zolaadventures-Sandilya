import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Users, Fuel, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import carsData from '@/data/cars.json';

const SelfDriveCarRental = () => {
  const handleBookNow = (carId: number) => {
    // Navigate to car details
    window.location.href = `/car/${carId}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Self Drive Car Rental in Guwahati
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Experience the freedom of self-drive car rentals with our premium fleet of well-maintained vehicles
              </p>
            </div>
          </div>
        </section>

        {/* Featured Car - Innova Hycross */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {carsData.cars.map((car, index) => (
              <Card key={car.id} className="mb-12 overflow-hidden animate-slide-in-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Car Image */}
                  <div className="relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        {car.seating} Seater
                      </Badge>
                    </div>
                  </div>

                  {/* Car Details */}
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold mb-2">{car.name}</h2>
                      <p className="text-muted-foreground text-lg mb-4">
                        {car.description}
                      </p>
                      <div className="text-3xl font-bold text-primary mb-4">
                        Starting from {car.currency}{car.price.toLocaleString()}/day
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Car className="w-5 h-5 text-primary" />
                        <span className="text-sm">{car.specs.engine}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-sm">{car.seating} Passengers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="w-5 h-5 text-primary" />
                        <span className="text-sm">{car.specs.fuelType}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="text-sm">{car.specs.mileage}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-bold mb-3">Key Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {car.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-adventure-green" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleBookNow(car.id)}
                      className="btn-hero w-full lg:w-auto group"
                    >
                      Book Now
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Features for Innova Hycross */}
        {carsData.cars[0].detailedFeatures && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
                Why Choose Innova Hycross?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(carsData.cars[0].detailedFeatures).map(([key, description], index) => (
                  <Card key={key} className="card-hover animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="font-bold mb-3 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your self-drive car today and explore Guwahati at your own pace
            </p>
            <Button
              onClick={() => window.location.href = '#book-now'}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              Book Your Car Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SelfDriveCarRental;