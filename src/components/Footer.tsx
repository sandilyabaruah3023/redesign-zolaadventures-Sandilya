import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import siteConfig from '@/data/site-config.json';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white">
                {siteConfig.site.name}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteConfig.site.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {siteConfig.navigation.mainMenu.slice(0, 5).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-white/80 hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <div className="space-y-2">
              {siteConfig.services.mainServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-white/80 hover:text-primary transition-colors text-sm"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.site.contact.phone}`}
                className="flex items-center space-x-2 text-white/80 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.site.contact.phone}</span>
              </a>
              
              <a
                href={`https://web.whatsapp.com/send?phone=${siteConfig.site.contact.whatsapp}&text=${siteConfig.site.contact.whatsappText}`}
                className="flex items-center space-x-2 text-white/80 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Guwahati, Assam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 {siteConfig.site.name}. All rights reserved. | 
            <span className="ml-1">
              Professional vehicle rental services in Guwahati
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;