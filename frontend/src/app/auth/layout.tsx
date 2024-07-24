import React from "react";


import "@/styles/css/admin.css";



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {


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
