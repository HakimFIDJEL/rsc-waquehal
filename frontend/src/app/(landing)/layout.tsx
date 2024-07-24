import React from "react";
import { Toaster } from "@/components/ui/toaster"

import { Header } from "@/components/u/Header";
import { Footer } from "@/components/u/Footer";
import { Preloader } from "@/components/u/Preloader";
import { SideBar } from "@/components/u/Sidebar";


export default function  HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
  <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <title>
        RSC Wasquehal - Accueil
      </title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="description" content="sport,sporteyz" />
      <meta name="keywords" content="sport,sporteyz" />
      <meta name="author" content="" />
      <meta name="MobileOptimized" content="320" />
      
   

      <link rel="stylesheet" href="/css/animate.css"/>
      <link rel="stylesheet" href="/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/css/fonts.css"/>
      <link rel="stylesheet" href="/flaticon/football/flaticon.css"/>
      <link rel="stylesheet" href="/css/font-awesome.css"/>
      <link rel="stylesheet" href="/css/owl.carousel.css"/>
      <link rel="stylesheet" href="/css/owl.theme.default.css"/>
      <link rel="stylesheet" href="/css/jquery-ui.min.css"/>
      <link rel="stylesheet" href="/css/customScrollbar.css"/>
      <link rel="stylesheet" href="/css/magnific-popup.css"/>
      <link rel="stylesheet" href="/css/inner_style.css"/>
    </head>
    <body>
      <Preloader />
      <div className="cursor cursor-shadow"></div>
      <div className="cursor cursor-dot"></div>

      <a href="javascript:" id="return-to-top"><i className="flaticon-up-arrow"></i></a>

      <SideBar />
      <Header />

      {children}
      <Footer />

      <Toaster />

      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/modernizr.js"></script>
      <script src="/js/jquery-ui.js"></script>
      <script src="/js/owl.carousel.js"></script>
      <script src="/js/jquery.bxslider.min.js"></script>
      <script src="/js/customScrollbar.min.js"></script>
      <script src="/js/jquery.countTo.js"></script>
      <script src="/js/jquery.inview.min.js"></script>
      <script src="/js/jquery.magnific-popup.js"></script>
      <script src="/js/imagesloaded.pkgd.min.js"></script>
      <script src="/js/isotope.pkgd.min.js"></script>
      <script src="/js/cursor.js"></script>
      <script src="/js/main.js"></script>

    </body>

  </html>
</>
    
  
}
