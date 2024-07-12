import type { Metadata } from "next";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

// Styles
import "@/styles/css/admin.css";

// Scripts
// import "../scripts/script.js";
// import "../scripts/elements/scroll.js";

// Components


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log(children);

  return (
    <html lang="fr">
      <head>
        
      </head>

      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
