import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, HelpCircle } from 'lucide-react';
import servicesData from '@/data/services.json';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Our Services
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive transportation solutions for all your travel needs in Guwahati
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {servicesData.services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden card-hover animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {service.features && (
                      <div className="mb-6">
                        <h3 className="font-bold mb-3">Features:</h3>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-adventure-green mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {service.conclusion && (
                      <p className="text-foreground font-medium mb-6">
                        {service.conclusion}
                      </p>
                    )}
                    
                    <Button
                      onClick={() => window.location.href = service.ctaButton.href}
                      className="btn-hero w-full"
                    >
                      {service.ctaButton.label}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Find answers to common questions about our rental services
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {servicesData.faq.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-border shadow-soft px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-12">
                <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you with any inquiries
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.location.href = 'tel:+918638875616'}
                    className="btn-hero"
                  >
                    Call Us Now
                  </Button>
                  <Button
                    onClick={() => window.location.href = 'https://web.whatsapp.com/send?phone=918638875616&text='}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;