import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Shield } from 'lucide-react';
import siteConfig from '@/data/site-config.json';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Oldest Rentals",
      description: "One of the oldest rental services in Guwahati"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional and experienced team to assist you"
    },
    {
      icon: Clock,
      title: "Fast Booking",
      description: "Quick and hassle-free booking process"
    },
    {
      icon: Shield,
      title: "Vendor Tie-ups",
      description: "Partnerships with many trusted vendors"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              {siteConfig.about.title}
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {siteConfig.about.content}
            </p>
            
            <div className="mb-8">
              <p className="text-foreground font-medium mb-4">
                {siteConfig.about.ctaText}
              </p>
              <Button
                onClick={() => window.location.href = siteConfig.about.ctaButton.href}
                className="btn-hero"
              >
                {siteConfig.about.ctaButton.label}
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-hover group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;