import { Rubik } from "next/font/google";
import Navbar from "@pages/components/elements/Navbar/Navbar";
import Headline from "@pages/components/elements/Headline/Headline";
import Category from "@pages/components/elements/Category/Category";
import Trending from "@pages/components/elements/Trending/Trending";
import Footer from "@pages/components/elements/Footer/Footer";
import NavbarMobile from "@pages/components/elements/Navbar/NavbarMobile";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Home() {
  return (
    <main className={`${rubik.className}`}>
      <header className="header">
        <Navbar />
        <NavbarMobile />
        <Headline />
      </header>
      <Category />
      <Trending />
      <Footer />
    </main>
  );
}
