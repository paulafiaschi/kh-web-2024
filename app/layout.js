import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Københavns Hockeyklub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
