import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Paket4H3MSection({ slug }: any) {
  return (
    <div className="">
      <div className="relative bg-black sm:static">
        <Image
          src={"/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
          width={900}
          height={900}
          alt="Paket 4H3M"
          className="w-screen opacity-70 sm:opacity-100" />
        <div className="block sm:hidden absolute left-0 right-0 top-0 bottom-0 m-auto mt-32 sm:mt-64 text-white text-md sm:text-2xl text-bold">
          <h1 className="text-center mb-2 uppercase">{slug}</h1>
          <span className="block text-center sm:hidden text-sm text-slate-200">3.125.000/orang</span>
        </div>
      </div>

      <div className="px-3 sm:w-3/5 mx-auto py-10">
        <h2 className="hidden sm:block text-xl">Paket 4H3M</h2>

        <div>
          <span className="hidden sm:block text-sm text-slate-600">3.125.000/orang</span>
          <Link className="flex items-center gap-1 text-sm sm:hidden px-4" href="/"><HiArrowLongLeft/> Kembali</Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">

            <div className="mt-2 rounded-lg shadow-lg p-4">
              <div className="flex gap-1 items-center text-slate-600">
                <FaRegCheckCircle />
                Day 1 (Sasak Tour)
              </div>
              <ul className="text-xs sm:text-sm">
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Penjemputan di bandara sesuai dengan jadwal kedatangan (max jam 12)</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Desa Sade Rumah tradisional suku Sasak</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Pantai Kuta Mandalika Pantai yang terkenal dengan bentuk pasirnya yang bundar seperti butiran merica</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Bukit Seger Bukit tempat melihat Sirkuit Mandalika dari atas bukit dan pantai seger</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Pantai Tanjung Aan Pantai yang terkenal indah, dengan pasirnya yang putih dan lembut seperti tepung</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan siang di pinggir pantai</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Bukit Merese Bukit tempat kita memanjatkan mata dengan melihat pemandangan pantai yang indah dari atas bukit</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan Malam (Ayam Taliwang) Ayam Taliwangsalah satu makanan khas yang ada di Lombok</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Cek in hotel, free program</span></li>
              </ul>
            </div>

            <div className="mt-2 rounded-lg shadow-lg p-4">
              <div className="flex gap-1 items-center text-slate-600">
                <FaRegCheckCircle />
                Day 2 (pantai pink tour)
              </div>
              <ul className="text-xs sm:text-sm">
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan tanjung luar</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">gili pasir (foto) Daratan pasir yang timbul apabila air laut lagi surut</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Pink 3 (foto) Pantai yang pasirnya berwarna pink apabila matahari lagi cerah</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Pink 2 (foto + belajar Snorkeling) Pantai yang pasir sangat lembut dan air laut nya yang tenang jadi tempat untuk belajar menggunakan alat untuk snorkeling</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Gili Gambir (snorkeling) Tempat untuk snorkeling dan bermain sama Ikan,karena ikannya banyak dan jinak</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Gili petelu Snorkeling untuk melihat terumbu karang yg indah serta ikan yg jinak </span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Pink 1 Tempat untuk makan siang dengan menu seafood ala piknik, selesai makan bisa untuk naik bukit tangsi, untuk berfoto dengan background bukit dan pantai </span></li>
              </ul>
            </div>

            <div className="mt-2 rounded-lg shadow-lg p-4">
              <div className="flex gap-1 items-center text-slate-600">
                <FaRegCheckCircle />
                Day 3 (Trawangan Tour)
              </div>
              <ul className="text-xs sm:text-sm">
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Villa hantu (foto)</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Bukit Malimbu/Malaka (foto)</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Snorkeling di Gili Trawangan</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan siang di pinggir pantai (Gili Trawangan)</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Sunset poin di Senggigi </span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan malam (Sate Rembiga) </span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makanan khas Lombok </span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Cek in hotel, free program </span></li>
              </ul>
            </div>

            <div className="mt-2 rounded-lg shadow-lg p-4">
              <div className="flex gap-1 items-center text-slate-600">
                <FaRegCheckCircle />
                Day 4 (Sembalun dan waterfall)
              </div>
              <ul className="text-xs sm:text-sm">
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan siang di lokal restauran melanjutkan perjalanan menuju bukit pusuk Sembalun</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Bukit selong Bukit dengan pemandangan sawah dan gunung Rinjani</span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Makan malam di lokal restauran </span></li>
                <li className="flex gap-1">
                  <span>-</span><span className="text-wrap">Cek in hotel, free program </span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}