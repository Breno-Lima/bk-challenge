"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TableComponent from '@/components/table/tableComponent';

interface TableComponentWrapperProps {
  search: string;
}

const queryClient = new QueryClient();

export default function TableComponentWrapper({ search }: TableComponentWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TableComponent search={search} />
    </QueryClientProvider>
  );
}
