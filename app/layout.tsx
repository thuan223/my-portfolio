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
      <body className="relative text-white bg-transparent min-h-screen overflow-x-hidden">
        {/* Nền sao chiếm toàn bộ màn hình */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <StarBackground />
        </div>

        {/* Nội dung chính */}
        <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 w-full min-h-screen">
          <ClientWrapper>{children}</ClientWrapper>
        </main>
      </body>
    </html>
  );
}
