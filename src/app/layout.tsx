import '@/app/ui/global.css';
import Nav from '@/app/ui/nav';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[rgb(90,193,255)]" >
      <body className={`${inter.className} antialiased`}>
        <div><Nav /></div>
        <div>{children}</div>
      </body>
    </html>
  );
}