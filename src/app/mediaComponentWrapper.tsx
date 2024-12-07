"use client";

import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';

const MediaComponentWithProvider = dynamic(() => import('@/components/mediaSection/sectionUtil'), { ssr: false });

interface MediaComponentWrapperProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function MediaComponentWrapper({ search, setSearch }: MediaComponentWrapperProps) {
  return (
      <MediaComponentWithProvider search={search} setSearch={setSearch} />
  );
}
