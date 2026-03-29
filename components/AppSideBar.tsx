"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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

import { ChevronRight, PanelLeftClose, Vault } from "lucide-react";

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
    <Sidebar
      collapsible={"icon"}
      className={` ${!open ? "px-0" : "px-6"} py-4`}
    >
      <div className="flex flex-row items-center justify-between mb-4">
        <Vault className={`${!open ? "hidden" : "block"}`} />
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-accent rounded-md transition-colors"
        >
          <PanelLeftClose size={20} />
        </button>
      </div>

      <SidebarHeader
        className={`p-0 font-bold text-md ${!open ? "hidden" : "block"}`}
      >
        <div className="py-4">Categories</div>
      </SidebarHeader>

      <SidebarContent className={`gap-2 ${!open ? "hidden" : "block"}`}>
        {menuItems.map((group, idx) => (
          <Collapsible key={idx} className="group/collapsible w-full">
            <SidebarGroup className="p-0 border rounded-md overflow-hidden">
              {/* Header / Trigger Area */}
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-secondary/50 transition-colors">
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
                      className="mx-2 px-3 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer list-none"
                    >
                      {item.name} ({item.quantity})
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4" />
    </Sidebar>
  );
};

export default AppSideBar;
