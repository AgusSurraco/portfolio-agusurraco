import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = { title: "Neky Surraco — Product Designer", description: "Portfolio de Agustina Neky Surraco" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${bricolage.variable} ${dmSans.variable} ${inter.variable}`}><body>{children}</body></html>;
}
