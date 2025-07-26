import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Bike } from 'lucide-react';
import bikesData from '@/data/bikes.json';

const VehicleShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = bikesData.bikes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return bikesData.bikes.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleContinue = (id: number) => {
    // Navigate to vehicle details
    window.location.href = `/motorcycle-list?view=cardetails&carid=${id}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-left">
          <div className="flex items-center justify-center mb-4">
            <Bike className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              RENT A BIKE
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our wide range of motorcycles and scooters for your adventure
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {getCurrentItems().map((bike) => (
              <div key={bike.id} className="animate-slide-in-up">
                      <VehicleCard
                        id={bike.id}
                        name={bike.name}
                        image={bike.image}
                        categories={bike.categories}
                        price={bike.price}
                        currency={bike.currency}
                        features={bike.features}
                        description={bike.description}
                        vehicleType="motorcycle"
                        onContinue={handleContinue}
                      />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={currentIndex === totalPages - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => window.location.href = '/motorcycle-list'}
            className="btn-hero px-8 py-3"
          >
            View All Motorcycles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;