import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteConfig from '@/data/site-config.json';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'nav-glass backdrop-blur-lg bg-white/95'
      : 'backdrop-blur-sm bg-white/10'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold gradient-text">
              {siteConfig.site.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.mainMenu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-all duration-300 animated-underline ${
                  item.active
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`https://web.whatsapp.com/send?phone=${siteConfig.site.contact.whatsapp}&text=${siteConfig.site.contact.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <Button 
              variant="default" 
              className="btn-hero"
              onClick={() => window.location.href = siteConfig.navigation.ctaButton.href}
            >
              {siteConfig.navigation.ctaButton.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass-card border-t border-white/20 animate-slide-in-up">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {siteConfig.navigation.mainMenu.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`font-medium transition-colors animated-underline ${
                      item.active ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://web.whatsapp.com/send?phone=${siteConfig.site.contact.whatsapp}&text=${siteConfig.site.contact.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <Button 
                  variant="default" 
                  className="btn-hero w-full mt-4"
                  onClick={() => {
                    window.location.href = siteConfig.navigation.ctaButton.href;
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {siteConfig.navigation.ctaButton.label}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;