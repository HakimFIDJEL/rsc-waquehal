import type { Metadata } from "next";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

// Styles
import "@/styles/css/style.css";

// Scripts
// import "../scripts/script.js";
// import "../scripts/elements/scroll.js";

// Components




// export const metadata: Metadata = {
//   title: "Rsc Wasquehal",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
      {children}
      
  </>
    
  
}
