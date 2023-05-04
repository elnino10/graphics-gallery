import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GraphicsGallery from "@/components/GraphicsGallery";
import { graphics } from "@/data/graphicsData";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <NavBar />
      <Header />
      <GraphicsGallery graphics={graphics} />
      <Footer />
    </main>
  );
}
