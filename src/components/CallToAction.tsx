import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import siteConfig from '@/data/site-config.json';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Content */}
          <Card className="glass-card p-8 text-center lg:text-left animate-fade-in-left">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                {siteConfig.callToAction.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {siteConfig.callToAction.content}
              </p>
              <Button
                onClick={() => window.location.href = siteConfig.callToAction.button.href}
                className="btn-hero text-lg px-8 py-4"
              >
                {siteConfig.callToAction.button.label}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="animate-fade-in-right space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">
              Get in Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {/* Phone */}
              <Card className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <a
                    href={`tel:${siteConfig.site.contact.phone}`}
                    className="text-primary hover:text-primary-hover transition-colors font-medium"
                  >
                    {siteConfig.site.contact.phone}
                  </a>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-adventure-green to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">WhatsApp</h4>
                  <a
                    href={`https://web.whatsapp.com/send?phone=${siteConfig.site.contact.whatsapp}&text=${siteConfig.site.contact.whatsappText}`}
                    className="text-adventure-green hover:text-primary transition-colors font-medium"
                  >
                    Chat with us
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Quick Book Calendar */}
            <Card className="card-hover group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-adventure-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Quick Book</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Book instantly for today or schedule for later
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.querySelector('section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;