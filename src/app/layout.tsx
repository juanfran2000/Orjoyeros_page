import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orjoyeros",
  description: "Fabrica de medallas y anillos de boda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Orjoyeros</title>
      </head>
      <body className={`inter.className bg-neutral-200`}>
        <header>
          <nav>
            <Nav title="Orjoyeros" />
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            Derechos de autor © 2024 Orjoyeros. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
