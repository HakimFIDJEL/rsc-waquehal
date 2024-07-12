"use client";

import React, { use } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Button } from "@/components/forms/Button.jsx";
// import "../scripts/layouts/header.js";

export function Header()
{

    const headerRef = useRef<HTMLHeadElement | null>(null);
    const burgerRef = useRef<HTMLInputElement | null>(null);
    const coverRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const header = headerRef.current;
        const burger = burgerRef.current;
        const cover = coverRef.current;

        const handleScroll = () => {
            if(header)
            {
                if (window.scrollY > 0) {
                  if (!header.classList.contains('active')) {
                    header.classList.add('active');
                  }
                } else {
                  if (header.classList.contains('active') && !header.classList.contains('burger')) {
                    header.classList.remove('active');
                  }
                }
            }
        };

        const handleBurger = () => {
            if(header)
            {
                if(!header.classList.contains('burger') )
                {
                    header.classList.add('active');
                    header.classList.add('burger');
                }
                else
                {
                    header.classList.remove('burger');
                    if(window.scrollY <= 0)
                    header.classList.remove('active');
                }
            }
        };

        const handleCover = () => {
            // simulate a click on the burger
            burger?.click();
        }


        window.addEventListener('scroll', handleScroll);
        burger?.addEventListener('change', handleBurger);
        cover?.addEventListener('click', handleCover);
        

        return () => {
            window.removeEventListener('scroll', handleScroll);
            burger?.removeEventListener('change', handleBurger);
            cover?.removeEventListener('click', handleCover);
        }
    }, []);

    return <>
        <header className="header" ref={headerRef}>

            

            <div className="header__container">

                <a href="/" className="header__identity">
                    <div className="header__identity__logo"></div>
                    <h1 className="header__identity__title">RSC Wasquehal</h1>
                </a>
            
                <nav className="mobile__header">
                    <label className="hamburger">
                        <input type="checkbox" id="header__hamburger" ref={burgerRef} />
                        <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </nav>
            
                <nav className="desktop__header">
                    <ul className="desktop__header__list">
                        <li className="desktop__header__list__item"><a href="/u/matchs">Matchs</a></li>
                        <li className="desktop__header__list__item"><a href="/u/actualites">Actualités</a></li>
                        <li className="desktop__header__list__item"><a href="/u/galeries">Galerie</a></li>
                        <li className="desktop__header__list__item"><a href="/u/club">Club</a></li>
                        <li className="desktop__header__list__item"><a href="/u/regles">Règles</a></li>
                        <li className="desktop__header__list__item">
                            <Button 
                                className="primary-outline-button" 
                                href="/u/contact"
                            >
                                Contact
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>


            <aside className="mobile__nav">

                <div className="mobile__nav__container">
            
                    <ul className="mobile__nav__list">
                        <li className="mobile__nav__list__item"><a href="/u/matchs">Matchs</a></li>
                        <li className="mobile__nav__list__item"><a href="/u/actualites">Actualités</a></li>
                        <li className="mobile__nav__list__item"><a href="/u/galeries">Galerie</a></li>
                        <li className="mobile__nav__list__item"><a href="/u/club">Club</a></li>
                        <li className="mobile__nav__list__item"><a href="/u/regles">Règles</a></li>
                        <li className="mobile__nav__list__item">
                            <Button 
                                className="primary-outline-button" 
                                href="/contact"
                            >
                                Contact
                            </Button>
                        </li>
                    </ul>
                </div>

                <div className="mobile__nav__cover" ref={coverRef} >

                </div>
            </aside>


        </header>
    </>
}


