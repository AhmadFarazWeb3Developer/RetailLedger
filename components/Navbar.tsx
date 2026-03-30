"use client";

import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center  gap-4 justify-between py-3 px-2 border-b bg-background">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-xl font-bold tracking-tight shrink-0">
          Retail<span className="text-primary">Ledger</span>
        </h1>

        <div className="w-full relative">
          <Input
            placeholder="Search products..."
            className="bg-muted/50 border-none focus-visible:ring-1"
          />
        </div>
      </div>
      <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
        <Bell size={20} className="text-muted-foreground" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
      </button>
    </header>
  );
};

export default Navbar;
