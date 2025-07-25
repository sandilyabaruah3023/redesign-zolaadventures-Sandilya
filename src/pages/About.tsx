import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                About Us
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your trusted partner for vehicle rentals in Guwahati since 2016
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Since 2016 Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="animate-slide-in-left">
                  <h2 className="text-6xl font-bold text-primary mb-8">Since 2016</h2>
                </div>
                <div className="space-y-6 animate-slide-in-right">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Zola Adventures a bike rental in Guwahati and Self drive car rental in 
                    Guwahati has been providing cars and bike on rent since 2016. We have 
                    completed more than 10,000 kms in our total journey.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A team of all travel enthusiast knows what are the expectations of a traveller, 
                    and adhere to it.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We look forward to your upcoming trip. Along with self drive cars and bikes in 
                    Guwahati, we also provide cabs and tempo travellers on rent
                  </p>
                </div>
              </div>

              {/* Mission, Vision, Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission */}
                <Card className="card-hover animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Continue with the blooms of Northeast and spread its blossom to the rest of the world.
                    </p>
                  </CardContent>
                </Card>

                {/* Vision */}
                <Card className="card-hover animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide the best of the best support to any individual who comes to get bloom in the 
                      lap of nature
                    </p>
                  </CardContent>
                </Card>

                {/* Values */}
                <Card className="card-hover animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Values</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-adventure-green rounded-full"></div>
                        <span className="text-muted-foreground">To be punctual</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-adventure-green rounded-full"></div>
                        <span className="text-muted-foreground">Support at any cost</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-adventure-green rounded-full"></div>
                        <span className="text-muted-foreground">Build trust</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;