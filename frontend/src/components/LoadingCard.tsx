"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoadingCard() {
  

  return <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Chargement</CardTitle>
              <CardDescription>
                Veuillez patienter pendant que nous chargeons les données.
              </CardDescription>
            </CardHeader>
            <CardContent>
              
            </CardContent>
    </Card>

  
    
  
}
