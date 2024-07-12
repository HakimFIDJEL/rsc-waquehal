"use client";
import type { Metadata } from "next";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

// Styles
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

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/utils/auth";

import  LoadingScreen  from "@/components/LoadingScreen";





export default function AdminLayout  ({
  children
}: {
  children: React.ReactNode
})  {


  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();

    return () => {
      // cleanup
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <LoadingScreen />
    )
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
                  <Link
                    href="/admin"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <Home className="h-4 w-4" />
                    Tableau de bord
                  </Link>
                  <Link
                    href="/admin/actualites"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Newspaper className="h-4 w-4" />
                    Actualités
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge> */}
                  </Link>
                  <Link
                    href="/admin/matchs"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Archive className="h-4 w-4" />
                    Matchs
                  </Link>
                  
                  <Link
                    href="/admin/galerie"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Aperture className="h-4 w-4" />
                    Galerie
                  </Link>
                  <Link
                    href="/admin/palmares"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Trophy className="h-4 w-4" />
                    Palmares
                  </Link>
                  <Link
                    href="/admin/sponsors"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Handshake className="h-4 w-4" />
                    Sponsors
                  </Link>
                  <Link
                    href="/admin/equipes"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <ContactRound className="h-4 w-4" />
                    Equipes
                  </Link>
                  <Link
                    href="/admin/activites-alentours"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <MapPin className="h-4 w-4" />
                    Activités alentours
                  </Link>
                  <Link
                    href="/admin/contact"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Contact
                  </Link>
                  <Link
                    href="/admin/calendar"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Calendrier
                  </Link>
                  <Separator className="my-4" />
                  <Link
                    href="/admin/users"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Users className="h-4 w-4" />
                    Administrateurs
                  </Link>
                  
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
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <Home className="h-4 w-4" />
                    Tableau de bord
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Actualités
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge> */}
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Package className="h-4 w-4" />
                    Matchs
                  </Link>
                  
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Galerie
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Palmares
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Sponsors
                  </Link>
                  <Link
                    href="/admin/equipes"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <ContactRound className="h-4 w-4" />
                    Equipes
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Activités alentours
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Contact
                  </Link>
                  <Link
                    href="/admin/calendar"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Calendrier
                  </Link>
                  <Separator className="my-4" />
                  <Link
                    href="/admin/users"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Users className="h-4 w-4" />
                    Administrateurs
                  </Link>
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
