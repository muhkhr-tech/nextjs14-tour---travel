import BannerSection from "@/components/Banner";
import Paket4H3MSection from "@/components/Paket4h3m";

// const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="">
      <BannerSection/>
      <div className="w-4/5 mx-auto">
      <Paket4H3MSection/>
      </div>
    </div>
  );
}
