import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="bg-muted flex min-h-svh w-screen flex-col">
        {children}
      </main>
    </SidebarProvider>
  )
}
