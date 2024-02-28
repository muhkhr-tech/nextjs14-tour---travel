import BannerSection from "@/components/Banner";
import CarouselPaket from "@/components/CarouselPaket";
import PaketSection from "@/components/Paket";
import Paket3H2MSection from "@/components/Paket3h2m";
import Paket4H3MSection from "@/components/Paket4h3m";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="">
      <BannerSection />
      <div className="px-4 py-10 sm:w-3/5 mx-auto">
        <h2 className="text-xl text-center">Daftar Paket Yang Kami Miliki</h2>
        <p className="text-center mb-5 text-xs text-slate-500">Pilih paket yang cocok dengan anda</p>
        <PaketSection/>
        <CarouselPaket/>
      </div>
    </div>
  );
}
