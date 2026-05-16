import type { Metadata } from "next";
import "./globals.css";

export const meta Metadata = {
  title: "FACE OF MONROVIA | From Liberia to the World",
  description: "Official site of Face Of Monrovia. Afrobeat. Afropop. Global Sound. Bookings & updates via WhatsApp.",
  openGraph: { title: "FACE OF MONROVIA Official", description: "New music, videos, events & WhatsApp community." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="bg-[#0B0B0B]">{children}</body></html>;
}
