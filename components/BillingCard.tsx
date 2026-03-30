"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; // Add this for a cleaner look

const BILL = [
  { title: "Dark Roast Coffee", price: 18.5, quantity: 1 },
  { title: "Classic Cheeseburger", price: 12.99, quantity: 1 },
  { title: "Green Tea Matcha", price: 6.0, quantity: 2 },
];

const BillingCard = () => {
  // Logic to calculate the actual total
  const total = BILL.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Card className="w-full max-w-sm shadow-md rounded-none p-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 px-2">
        <CardTitle className="text-lg font-bold">Bill Detail</CardTitle>
        <span className="text-sm font-mono text-muted-foreground">#0001</span>
      </CardHeader>

      <Separator className="mb-4 p-0" />

      <CardContent className="space-y-4 px-2">
        {BILL.map((product, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <div className="flex flex-col">
              <span className="font-medium">{product.title}</span>
              <span className="text-xs text-muted-foreground">
                Qty: {product.quantity}
              </span>
            </div>
            <span className="font-semibold">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </CardContent>

      <Separator className="my-2" />

      <CardFooter className="flex flex-col gap-4 pt-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold">Total</span>
          <span className="text-xl font-bold text-primary">
            ${total.toFixed(2)}
          </span>
        </div>

        <Button className="w-full" size="lg">
          Process Transaction
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillingCard;
