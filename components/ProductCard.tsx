import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ProductProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        {category && (
          <Badge className="absolute left-2 top-2 bg-white/80 text-black backdrop-blur-sm hover:bg-white">
            {category}
          </Badge>
        )}
      </div>

      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>
        <CardDescription className="line-clamp-2 mt-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Qty:</span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-r-none"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Input
              type="number"
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(parseInt(e.target.value) || 1)
              }
              className="h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-l-none"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
