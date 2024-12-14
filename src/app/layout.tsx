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
import { LibraryBig, Github, FileChartColumnIncreasing, FileCode, FileUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



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
              <Link href='/'>
                <Image 
                  src='/Logo.jpg'
                  height={35}
                  width={35}
                  alt="Logo with initials PK"
                  style={{
                    borderRadius: '30%'
                  }}
                />
              </Link>
              
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
                  <ul className="">
                    <li>
                      <Link className="hover:text-amber-900 text-xs" href="https://github.com/phillipk0113/nextjsapp">This Website</Link>
                    </li>
                    <li>
                      <Link className="hover:text-amber-900 text-xs" href="https://github.com/phillipk0113/nextjs-dashboard-project">Next.js Dashboard Tutorial</Link>
                    </li>
                    <li>
                      <Link className="hover:text-amber-900 text-xs" href="https://github.com/phillipk0113/rag-agent-chatbot">RAG Website Chatbot</Link>
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
                  <Link className='hover:text-amber-900 text-xs' href="https://meridianexecutivelimo.com">Meridian Limousines</Link>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>
                    <FileUser/>
                    <h2 className='pt-1' >My Resume</h2>
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <Link href="/resume" className="hover:text-amber-900 text-xs">Link to Resume</Link>
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