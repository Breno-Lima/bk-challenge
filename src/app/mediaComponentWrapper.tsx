"use client";

import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MediaComponentWithProvider = dynamic(() => import('@/components/mediaSection/sectionUtil'), { ssr: false });

export default function MediaComponentWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <MediaComponentWithProvider />
    </QueryClientProvider>
  );
}
