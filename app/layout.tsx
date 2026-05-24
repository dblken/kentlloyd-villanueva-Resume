import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const themeInitScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme ? storedTheme === "dark" : false;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  } catch (error) {
    document.documentElement.classList.remove("dark");
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  title: "Kentlloyd Villanueva | Graphic & Web Designer",
  description:
    "Premium one-page resume and portfolio for Kentlloyd Villanueva, focused on graphic design, web design, UI/UX strategy, and AI-enhanced creative workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
