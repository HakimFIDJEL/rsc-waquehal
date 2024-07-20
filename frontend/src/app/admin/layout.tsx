"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import "@/styles/css/admin.css";
import {
  Home,
  LineChart,
  Newspaper,
  Archive,
  Aperture,
  Trophy,
  Handshake,
  MapPin,
  Mail,
  Menu,
  Package,
  ShoppingCart,
  Users,
  ContactRound ,
  CalendarDays,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import  LogoutButton  from "./LogoutButton"
import { useAuth } from "@/utils/auth";
import { useRouter, usePathname } from "next/navigation";
import  LoadingScreen  from "@/components/LoadingScreen";

import NavLink from "./NavLink";



export default function AdminLayout  ({
  children
}: {
  children: React.ReactNode
})  {



  const { isAuthenticated, checkAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  if (!isAuthenticated) {
    return <LoadingScreen />;
  }

  

  
  

  return (
      <html lang="fr" className="light">
        <head>
        </head>

        <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <span className="">RSC Wasquehal</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <NavLink href="/admin" icon={<Home className="h-4 w-4" />}>
                    Tableau de bord
                  </NavLink>

                  <NavLink href="/admin/actualites" icon={<Newspaper className="h-4 w-4" />}>
                    Actualités
                  </NavLink>

                  <NavLink href="/admin/matchs" icon={<Archive className="h-4 w-4" />}>
                    Matchs
                  </NavLink>

                  <NavLink href="/admin/galerie" icon={<Aperture className="h-4 w-4" />}>
                    Galerie
                  </NavLink>

                  <NavLink href="/admin/palmares" icon={<Trophy className="h-4 w-4" />}>
                    Palmares
                  </NavLink>

                  <NavLink href="/admin/sponsors" icon={<Handshake className="h-4 w-4" />}>
                    Sponsors
                  </NavLink>

                  <NavLink href="/admin/equipes" icon={<ContactRound className="h-4 w-4" />}>
                    Equipes
                  </NavLink>

                  <NavLink href="/admin/activites-alentours" icon={<MapPin className="h-4 w-4" />}>
                    Activités alentours
                  </NavLink>

                  <NavLink href="/admin/contact" icon={<Mail className="h-4 w-4" />}>
                    Contact
                  </NavLink>

                  <NavLink href="/admin/calendar" icon={<CalendarDays className="h-4 w-4" />}>
                    Calendrier
                  </NavLink>

                  <Separator className="my-4" />

                  <NavLink href="/admin/users" icon={<Users className="h-4 w-4" />}>
                    Administrateurs
                  </NavLink>
                </nav>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <NavLink href="/admin" icon={<Home className="h-4 w-4" />}>
                      Tableau de bord
                    </NavLink>

                    <NavLink href="/admin/actualites" icon={<Newspaper className="h-4 w-4" />}>
                      Actualités
                    </NavLink>

                    <NavLink href="/admin/matchs" icon={<Archive className="h-4 w-4" />}>
                      Matchs
                    </NavLink>

                    <NavLink href="/admin/galerie" icon={<Aperture className="h-4 w-4" />}>
                      Galerie
                    </NavLink>

                    <NavLink href="/admin/palmares" icon={<Trophy className="h-4 w-4" />}>
                      Palmares
                    </NavLink>

                    <NavLink href="/admin/sponsors" icon={<Handshake className="h-4 w-4" />}>
                      Sponsors
                    </NavLink>

                    <NavLink href="/admin/equipes" icon={<ContactRound className="h-4 w-4" />}>
                      Equipes
                    </NavLink>

                    <NavLink href="/admin/activites-alentours" icon={<MapPin className="h-4 w-4" />}>
                      Activités alentours
                    </NavLink>

                    <NavLink href="/admin/contact" icon={<Mail className="h-4 w-4" />}>
                      Contact
                    </NavLink>

                    <NavLink href="/admin/calendar" icon={<CalendarDays className="h-4 w-4" />}>
                      Calendrier
                    </NavLink>

                    <Separator className="my-4" />

                    <NavLink href="/admin/users" icon={<Users className="h-4 w-4" />}>
                      Administrateurs
                    </NavLink>
                  </nav>
                  
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                
              </div>
              <LogoutButton />
            </header>

              <div>
                {children}
              </div>
              
          </div>
        </div>
        </body>
      </html>
      
  );
}
