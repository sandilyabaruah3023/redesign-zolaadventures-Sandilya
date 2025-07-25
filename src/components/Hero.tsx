import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';
import siteConfig from '@/data/site-config.json';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [bookingForm, setBookingForm] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropOffDate: '',
    dropOffTime: '',
    category: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log('Search with:', bookingForm);
    // Handle search logic here
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {siteConfig.hero.subtitle}
          </p>
          
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => window.location.href = siteConfig.hero.primaryCta.href}
            >
              {siteConfig.hero.primaryCta.label}
            </Button>
            <Button 
              className="btn-secondary-hero text-lg px-8 py-4"
              onClick={() => window.location.href = siteConfig.hero.secondaryCta.href}
            >
              {siteConfig.hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Booking Form */}
        <Card className="glass-card p-6 md:p-8 max-w-6xl mx-auto animate-slide-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-6">
            {/* Pickup Location */}
            <div className="xl:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Pickup Location
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.pickupLocation}
                onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
              >
                <option value="">Select pickup location</option>
                {siteConfig.bookingForm.pickupLocations.map((location, index) => (
                  <option key={index} value={location.name}>
                    {location.name} - {location.feeText}
                  </option>
                ))}
              </select>
            </div>

            {/* Drop Off Location */}
            <div className="xl:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Drop Off Location
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.dropOffLocation}
                onChange={(e) => handleInputChange('dropOffLocation', e.target.value)}
              >
                <option value="">Select drop off location</option>
                {siteConfig.bookingForm.dropOffLocations.map((location, index) => (
                  <option key={index} value={location.name}>
                    {location.name} - {location.feeText}
                  </option>
                ))}
              </select>
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Pickup Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.pickupDate}
                onChange={(e) => handleInputChange('pickupDate', e.target.value)}
              />
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline w-4 h-4 mr-1" />
                Pickup Time
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.pickupTime}
                onChange={(e) => handleInputChange('pickupTime', e.target.value)}
              >
                <option value="">Select time</option>
                {siteConfig.bookingForm.timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Drop Off Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Drop Off Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.dropOffDate}
                onChange={(e) => handleInputChange('dropOffDate', e.target.value)}
              />
            </div>

            {/* Drop Off Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline w-4 h-4 mr-1" />
                Drop Off Time
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.dropOffTime}
                onChange={(e) => handleInputChange('dropOffTime', e.target.value)}
              >
                <option value="">Select time</option>
                {siteConfig.bookingForm.timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={bookingForm.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                {siteConfig.bookingForm.categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                className="w-full h-12 btn-hero flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;