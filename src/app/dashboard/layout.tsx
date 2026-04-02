import { AppSidebar } from "@/components/layouts/sidebar/Sideboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
        <main className="w-screen mesh-bg">{children}</main>
      </TooltipProvider>
    </SidebarProvider>
  );
}
