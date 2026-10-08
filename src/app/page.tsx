import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Features />
                <Products />
                <Brands />
                <About />
                <Stats />
                <Gallery />
                <News />
                <Newsletter />
            </main>

            <Footer />
        </>
    );
}