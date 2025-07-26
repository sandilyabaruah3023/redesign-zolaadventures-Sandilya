import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, Search } from 'lucide-react';
import bikesData from '@/data/bikes.json';

const MotorcycleList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'City', 'Mileage', 'Tour Adventure'];

  const filteredBikes = bikesData.bikes.filter(bike => {
    const matchesCategory = selectedCategory === 'All' || bike.categories.includes(selectedCategory);
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContinue = (id: number, vehicleType: string = 'motorcycle') => {
    // Navigate to vehicle details
    window.location.href = `/${vehicleType}/${id}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Motorcycle & Scooter Rental
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our extensive fleet of well-maintained motorcycles and scooters
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search motorcycles..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="transition-all"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredBikes.length > 0 ? (
              <>
                <div className="mb-6 text-muted-foreground">
                  Showing {filteredBikes.length} vehicle{filteredBikes.length !== 1 ? 's' : ''}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredBikes.map((bike, index) => (
                    <div 
                      key={bike.id} 
                      className="animate-slide-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
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
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">No vehicles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MotorcycleList;