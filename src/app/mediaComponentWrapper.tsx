"use client";

import dynamic from 'next/dynamic';

const MediaComponentWithProvider = dynamic(() => import('@/components/mediaSection/sectionUtil'), { ssr: false });

export default function MediaComponentWrapper() {
  return (
      <MediaComponentWithProvider />
  );
}
