"use client";

import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; // Add this for a cleaner look
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./ui/sidebar";

import { Product } from "../Types";
import { useEffect, useState } from "react";

interface BillingCardProps {
  cartProducts: Product[];
}

const BillingCard = ({ cartProducts }: BillingCardProps) => {
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    //  reduce function takes  reduce(accumulator,currentVal,0) take previous state varable like total, current value of array and initial value like 0

    const total = cartProducts.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);

    setTotalBill(total);
  }, [cartProducts]);

  return (
    <Sidebar
      side={"right"}
      variant={"inset"}
      className=" shadow-md rounded-none p-0 scroll-auto"
    >
      <SidebarHeader className="flex flex-row items-center justify-between space-y-0 py-4 px-2">
        <CardTitle className="text-lg font-bold">Bill Detail</CardTitle>
        <span className="text-sm font-mono text-muted-foreground">#0001</span>
      </SidebarHeader>

      <Separator className="mb-4 p-0" />

      <SidebarContent className="space-y-4 px-2">
        {cartProducts.map((product, idx) => (
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
      </SidebarContent>

      <Separator className="my-2" />

      <SidebarFooter className="flex flex-col gap-4 pt-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold">Total</span>
          <span className="text-xl font-bold text-primary">
            ${totalBill.toFixed(2)}
          </span>
        </div>

        <Button className="w-full cursor-pointer" size="lg">
          Process Transaction
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default BillingCard;
