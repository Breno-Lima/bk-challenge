import Header from "@/components/header/header";
import { GlobalStyle } from '@/app/globalStyles';


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
            <Header />
            {children}
        </body>
      </html>
    </>
  );
}
