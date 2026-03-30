"use client";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

import { ChevronRight, PanelLeft, PanelLeftClose, Vault } from "lucide-react";
import { AppSidebarFooter } from "./AppSideBarFooter";

const AppSideBar = () => {
  const menuItems = [
    {
      category: "Beverages",
      items: [
        { name: "Coffee", quantity: 13 },
        { name: "Tea", quantity: 11 },
        { name: "Juice", quantity: 20 },
      ],
    },
    {
      category: "Foods",
      items: [
        { name: "Burgers", quantity: 13 },
        { name: "Pizza", quantity: 11 },
        { name: "Salads", quantity: 20 },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Cake", quantity: 20 },
        { name: "Ice Cream", quantity: 20 },
      ],
    },
  ];

  const { toggleSidebar, open } = useSidebar();

  return (
    <Sidebar collapsible={"icon"} className="p-0">
      <div
        className={` h-full transition-all duration-300 ${!open ? "px-0" : "px-6"} py-4`}
      >
        <div
          className={`flex items-center mb-4 ${!open ? "justify-center" : "justify-between"}`}
        >
          {open && (
            <div className="flex items-center gap-2 overflow-hidden">
              <Vault className="shrink-0" />
            </div>
          )}

          <button
            onClick={toggleSidebar}
            className={`flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent transition-colors ${!open ? "mx-auto" : ""}`}
          >
            {open ? <PanelLeftClose size={20} /> : <PanelLeft size={20} />}
          </button>
        </div>
        <SidebarHeader
          className={`p-0 font-bold text-md ${!open ? "hidden" : "block"}`}
        >
          <p className="py-4 text-sm">Categories</p>
        </SidebarHeader>

        {menuItems.map((group, idx) => (
          <Collapsible
            key={idx}
            className={`group/collapsible w-full  my-1 ${!open ? "hidden" : "block"} `}
          >
            <SidebarGroup className="p-0 border rounded-md overflow-hidden ">
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between px-3 py-1 cursor-pointer hover:bg-secondary/50 transition-colors">
                  <SidebarGroupLabel className="p-0 text-sm font-medium cursor-pointer">
                    {group.category}
                  </SidebarGroupLabel>
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-muted-foreground"
                  />
                </div>
              </CollapsibleTrigger>

              {/* Items Area */}
              <CollapsibleContent>
                <ul className="pb-2 flex flex-col gap-1">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="mx-2 px-3 py-1  text-xs rounded-sm hover:bg-accent cursor-pointer list-none"
                    >
                      {item.name} ({item.quantity})
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
        {/* </SidebarContent> */}
      </div>
      <AppSidebarFooter />
    </Sidebar>
  );
};

export default AppSideBar;
