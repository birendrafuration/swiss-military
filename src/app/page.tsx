import Image from "next/image";
import OurEcommerceStore from "@/components/OurStores/OurEcomerceStore"
import About from "@/components/OurStores/About";
import NewsLetter from "@/components/OurStores/NewsLetter";
import ImageCarousel from "@/components/Carousel";
import FavourOfMonth from "@/components/reusableComponent/FavourOfMonth";
import ShopFromTopCategory from "@/components/ShopFromTopCategory";
import BestDeal from "@/components/BestDeal";
import TopProduct from "@/components/TopProduct";
import Advisiment from "@/components/Advisiment";
import ChoosePerfection from "@/components/ChoosePerfection";

export default function Home() {
  return (
    <main className="">

    <ImageCarousel/>
    <ShopFromTopCategory/>
    <Advisiment/>
    <BestDeal/>
    {/* <TopProduct/> */}
    <ChoosePerfection/>
    <FavourOfMonth/>
    <OurEcommerceStore />
    <About />
    <NewsLetter />
    
  </main>
  );
}
