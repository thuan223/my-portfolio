import "./globals.css";
import StarBackground from "@/components/StarBackground";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "Portfolio | Trần Nguyễn Nam Thuận",
  description: "Personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-white bg-transparent min-h-screen">
        <StarBackground />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
