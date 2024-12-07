"use client";

import React, { useState } from 'react';
import MediaComponentWrapper from "./mediaComponentWrapper";
import TableComponentWrapper from "./tableComponentWrapper";
import { useDebounce } from '@/hooks/useDebounce'; 

export default function Home() {
  const [search, setSearch] = useState<string>(''); 
  const debouncedSearch = useDebounce<string>(search, 100); 

  return (
    <>
      <MediaComponentWrapper search={search} setSearch={setSearch} />
      <TableComponentWrapper search={debouncedSearch} /> 
    </>
  );
}
