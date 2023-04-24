import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Open Decision",
  description: "Open Decision Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
