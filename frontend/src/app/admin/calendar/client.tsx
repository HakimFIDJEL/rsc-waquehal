"use client";
import Link from "next/link";
import * as React from "react";
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Construction } from "lucide-react";

import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";



export default function Index() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin">Tableau de bord</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Calendrier</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="all">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          
        </div>
      </div>
      <TabsContent value="all">
        {/* Work in progress */}
        <Card className="text-muted-foreground">  
          <CardHeader>
            <CardTitle>En cours de développement</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
            <Construction className="w-24 h-24" />
            <CardDescription>
              Cette fonctionnalité est en cours de développement.
            </CardDescription>
          </CardContent>
        </Card>
        
      </TabsContent>
    </Tabs>
    </main>
  );
}
