'use client';
import type { Metadata } from "next";
import "./globals.css";
import "../styles/extra.css"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import navLink from "../constant/nav"
import Link from "next/link";
import { ThemeProvider } from 'next-themes'
import Typewriter from 'typewriter-effect'
import ThemeSwitch from "@/components/ThemeSwitch";
import { Provider } from '@lyket/react'
import MobileNav from "@/components/MobileNav";
import ProgressBars from 'react-scroll-progress-bar'
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
  return (
    <html lang="en">
      <ProgressBars bgcolor="#DE1D8D" />
      <body className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Provider apiKey={"2"}>
          <ThemeProvider attribute="class" defaultTheme={defaultTheme as string}>
            <div className="flex w-full justify-between py-10">
              <div>
                <Link href="/">
                  <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                    {`~/`}{' '}
                    <Typewriter
                      options={{
                        strings: [],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center text-base leading-5">
                <div className="hidden sm:block">
                  {navLink.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href as string}
                      className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                <ThemeSwitch></ThemeSwitch>
                {/* <CommandPalette navigation={navigation} />
          <DropMenu /> */}
                <MobileNav />
              </div>
            </div>
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
