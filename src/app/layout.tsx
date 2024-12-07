import Header from "@/components/header/header";
import { GlobalStyle } from '@/app/globalStyles';
import { NuqsAdapter } from 'nuqs/adapters/next/app'


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
          <NuqsAdapter>
            <Header />
            {children}
          </NuqsAdapter>
        </body>
      </html>
    </>
  );
}
