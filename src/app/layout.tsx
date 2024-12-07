"use client";

import Header from "@/components/header/header";
import { GlobalStyle } from '@/app/globalStyles';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="pt-br">
        <body suppressHydrationWarning>
          <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
              <Header />
              {children}
            </NuqsAdapter>
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
