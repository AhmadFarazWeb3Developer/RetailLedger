import { TooltipProvider } from "@/components/ui/tooltip"; // From CLI
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Necessary for Sidebar
import AppSideBar from "@/components/AppSideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* You must wrap everything in BOTH providers */}
        <TooltipProvider>
          <SidebarProvider>
            <AppSideBar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
