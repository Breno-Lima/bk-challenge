"use client";

import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Crie uma instância de QueryClient
const queryClient = new QueryClient();

// Envolva o MediaComponent com QueryClientProvider em um componente separado
const MediaComponentWithProvider = dynamic(() => import('@/components/mediaSection/sectionUtil'), { ssr: false });

export default function MediaComponentWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <MediaComponentWithProvider />
    </QueryClientProvider>
  );
}
