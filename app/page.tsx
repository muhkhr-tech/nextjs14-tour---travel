import BannerSection from "@/components/Banner";
import Paket3H2MSection from "@/components/Paket3h2m";
import Paket4H3MSection from "@/components/Paket4h3m";

export default function Home() {
  return (
    <div className="">
      <BannerSection />
      <div className="px-4 py-10 sm:w-3/5 mx-auto">
      <h2 className="text-xl text-center">Daftar Paket Yang Kami Miliki</h2>
      <p className="text-center mb-5 text-xs text-slate-500">Pilih paket yang cocok dengan anda</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <Paket3H2MSection/>
        <Paket4H3MSection/>
      </div>
      </div>
    </div>
  );
}
