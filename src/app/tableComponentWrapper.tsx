"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TableComponent from '@/components/table/tableComponent';

const queryClient = new QueryClient();

export default function TableComponentWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableComponent />
    </QueryClientProvider>
  );
}
