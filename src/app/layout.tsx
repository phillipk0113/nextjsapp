import type { Metadata } from "next";
import "./globals.css";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { lusitana } from '@/app/ui/fonts';



export const metadata: Metadata = {
  title: "Portfolio website",
  description: "Working with Next.js, PostgreSQL, and Apollo GraphQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${lusitana.className}`}>
        <SidebarProvider>
          {/* Sidebar component */}
          <Sidebar collapsible="icon">
            <SidebarTrigger />
          </Sidebar>

          {/* Main content area */}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}