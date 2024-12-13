import type { Metadata } from "next";
import "./globals.css";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { lusitana } from '@/app/ui/fonts';
import { LibraryBig, Github, FileChartColumnIncreasing, FileCode } from 'lucide-react';



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
      <body className= {`${lusitana.className} bg-stone-100`}>
        <SidebarProvider>
          {/* Sidebar component */}
          <Sidebar collapsible="offcanvas">
            <SidebarHeader></SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>
                  <LibraryBig/>
                  <h2 className="pt-1">Book Blog</h2>
                </SidebarGroupLabel>
                <SidebarGroupContent>Here is the content</SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>
                  <Github/>
                  <h2 className="pt-1">GitHub Projects</h2>
                </SidebarGroupLabel>
                <SidebarGroupContent>Here is the content</SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>
                  <FileChartColumnIncreasing/>
                  <h2 className="pt-1">Financial Analysis Agent</h2>
                </SidebarGroupLabel>
                <SidebarGroupContent>Here is the content</SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel className="align-middle">
                  <FileCode/>
                  <h2 className="pt-1">Websites</h2>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <a href="https://meridianexecutivelimo.com">Meridian Exec Limousines</a>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
          </Sidebar>
          <SidebarTrigger />
          {/* Main content area */}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}