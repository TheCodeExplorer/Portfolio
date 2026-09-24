import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venkatesh Talluri — Developer Portfolio",
  description:
    "Technical portfolio of Venkatesh Talluri, Computer Science undergraduate building practical web applications, systems, and embedded projects. Open to early-career software engineering opportunities.",
  keywords: [
    "Venkatesh Talluri",
    "Portfolio",
    "Software Developer",
    "Web Development",
    "Next.js",
    "React",
    "PostgreSQL",
    "Prisma",
    "Embedded Systems",
    "Arduino",
  ],
  authors: [{ name: "Venkatesh Talluri" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Venkatesh Talluri — Developer Portfolio",
    description:
      "Computer Science undergraduate at QIS College of Engineering and Technology. Open to early-career software development and engineering opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkatesh Talluri — Developer Portfolio",
    description:
      "Computer Science undergraduate building practical software, systems, and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-bg text-text antialiased selection:bg-accent/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Skip to content link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none font-medium text-sm"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
