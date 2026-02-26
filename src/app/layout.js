import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import SideNav from "@/components/SideNav";   // ✅ IMPORT NAVBAR

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Talha Tariq",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider>

          {/* ✅ FIXED: Navbar is now globally visible on every page */}
          <SideNav />

          {/* 🌙 Theme Toggle Button */}
          <ThemeToggle />

          {/* Page Content */}
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
