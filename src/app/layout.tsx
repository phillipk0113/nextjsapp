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
import Image from 'next/image';



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
            <SidebarHeader className="flex flex-row items-center bg-stone-400 min-h-16">
              <Image 
                src='/Logo.jpg'
                height={35}
                width={35}
                alt="Logo with initials PK"
                style={{
                  borderRadius: '30%'
                }}
              />
              <h1 className='font-bold text-xl text-white'>Phillip's Catalog</h1>
            </SidebarHeader>
            <SidebarContent className="bg-stone-200">
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
                <SidebarGroupContent>
                  <ul>
                    <li>
                      <a className="hover:text-amber-900" href="https://github.com/phillipk0113/nextjsapp">This Website</a>
                    </li>
                    <li>
                      <a className="hover:text-amber-900" href="https://github.com/phillipk0113/nextjs-dashboard-project">Next.js Dashboard Tutorial</a>
                    </li>
                    <li>
                      <a className="hover:text-amber-900" href="https://github.com/phillipk0113/rag-agent-chatbot">RAG Website Chatbot</a>
                    </li>
                  </ul>
                </SidebarGroupContent>
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
                  <h2 className="pt-1">Professional Websites</h2>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <a href="https://meridianexecutivelimo.com">Meridian Limousines</a>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-stone-400 min-h-16"></SidebarFooter>
          </Sidebar>
          <SidebarTrigger />
          {/* Main content area */}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}