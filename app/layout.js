import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SenderScript from "./components/SenderScript";
import BurgerMenu from "./components/BurgerMenu";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Københavns Hockeyklub",
  description:
    "Discover Copenhagen's vibrant hockey community at our historic club, committed to fostering the sport's legacy and welcoming players of every age and skill level. Embrace the thrill of hockey and join our inclusive community for an unforgettable experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SenderScript />

      <body className={noto_sans.className}>
        <Nav />
        <BurgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
