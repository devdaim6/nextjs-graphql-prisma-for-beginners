import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prisma - GraphQL - PostgresQL",
  description: "Simplified Next js App Router along with GraphQL and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
