import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, ArrowRight } from 'lucide-react';

interface VehicleCardProps {
  id: number;
  name: string;
  image: string;
  categories: string[];
  price: number;
  currency: string;
  features: string[];
  description?: string;
  onContinue: (id: number) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  image,
  categories,
  price,
  currency,
  features,
  description,
  onContinue
}) => {
  return (
    <Card className="card-hover group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="mr-1 mb-1 bg-white/90 text-foreground">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            Starting from {currency}{price.toLocaleString()}.00
          </div>
        </div>
        
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                <Shield className="w-4 h-4 mr-1" />
                {feature}
              </div>
            ))}
          </div>
        )}
        
        <Button
          onClick={() => onContinue(id)}
          className="w-full group"
          variant="default"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;