"use client";

import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../Types";

interface ProductProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
  setCartProducts,
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  return (
    <Card className="group w-full overflow-hidden border-gray-200 p-0 transition-all hover:border-gray-400 shadow-sm rounded-sm">
      {/* Image Container - Slightly shorter aspect ratio for compact feel */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-2 space-y-2">
        {/* Header - Title and Price on one line */}
        <div className="space-y-0.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xs font-bold leading-tight  flex-1">{title}</h3>
            <span className="text-xs font-black text-black">
              ${price.toFixed(2)}
            </span>
          </div>
          <p className="text-[10px] leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Action Row - Qty and Add Button */}
        <div className="flex items-center justify-between gap-2 pt-1">
          {/* Compact Quantity Selector */}
          <div className="flex items-center border rounded-md overflow-hidden bg-background">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-1.5 py-2 hover:bg-black transition-colors text-muted-foreground border-r cursor-pointer"
            >
              <Minus size={10} />
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-6 text-[10px] font-bold text-center bg-transparent outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-1.5 py-2  hover:bg-black transition-colors text-muted-foreground border-l cursor-pointer"
            >
              <Plus size={10} />
            </button>
          </div>

          <Button
            onClick={() =>
              setCartProducts((prev) => [
                ...prev,
                { title, description, price, image, category },
              ])
            }
            size="sm"
            className="h-7 w-7 p-0 rounded-sm bg-gray-400 hover:bg-black  cursor-pointer"
          >
            <ShoppingCart size={14} className="text-white rounded-sm" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
