import React from 'react';
import "./globals.css";
import "../styles/extra.css"
import '../app/globals.css';
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/kangbo-dark.svg" />
      </head>
      <body className="debug-screens scroll-smooth overflow-x-clip">
        {children}
      </body>
    </html>
  );
}

