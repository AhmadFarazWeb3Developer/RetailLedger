import { TooltipProvider } from "@/components/ui/tooltip"; // From CLI
import { SidebarProvider } from "@/components/ui/sidebar"; // Necessary for Sidebar
import "./globals.css";
import AppSideBar from "@/components/AppSideBar";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Create a CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.className}>
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
