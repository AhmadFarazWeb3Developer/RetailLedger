import { TooltipProvider } from "@/components/ui/tooltip"; // From CLI
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Necessary for Sidebar
import HomePage from "./page";
import "./globals.css";
import AppSideBar from "@/components/AppSideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <SidebarProvider>
            <AppSideBar />

            {children}
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
