import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
