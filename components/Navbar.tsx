"use client";

import { Bell, SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Spinner } from "./ui/spinner";

const Navbar = () => {
  return (
    <header className="w-full flex items-center  gap-4 justify-between py-3 px-2 border-b bg-background">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-sm font-extrabold tracking-wide ">
          Retail<span className="text-primary">Ledger</span>
        </h1>

        <InputGroup className=" rounded-full border border-gray-300  ">
          <InputGroupInput
            placeholder="Search products..."
            className="rounded-full text-xs outline-0"
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>

          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
        <Bell size={20} className="text-muted-foreground" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full border-2 border-background"></span>
      </button>
    </header>
  );
};

export default Navbar;
