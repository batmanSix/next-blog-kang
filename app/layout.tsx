'use client';
import type { Metadata } from "next";
import "./globals.css";
import "../styles/extra.css"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes'
import { Provider } from '@lyket/react'
import { NavBar } from "@/components/Nav";
import ProgressBars from 'react-scroll-progress-bar'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
interface ThemeProviderProps {
  colors?: any
  fonts?: any
}

const defaultTheme: ThemeProviderProps = {
  colors: {
    primary: '#71717a',
    secondary: '#ff00c3',
    text: '#fff',
    highlight: '#ff00c3',
    icon: '#fff',
    background: 'transparent',
  },
  fonts: {
    body: 'inherit',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [scroll, userscroll] = useState<boolean>(true)
  const path = usePathname()
  useEffect(() => {
    console.log()
    userscroll(false)
    setTimeout(() => {
      userscroll(true)
    })
  }, [path])
  return (
    <html lang="en">
      {
        scroll && <ProgressBars bgcolor="#DE1D8D" />
      }
      <body className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pt-14 ">
        <Provider apiKey={"2"}>
          <ThemeProvider attribute="class" defaultTheme={defaultTheme as string}>
            <NavBar></NavBar>
            <ProgressBar
              height="2px"
              color="#DE1D8D"
              options={{ showSpinner: false }}
              shallowRouting
            />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html >
  );
}
