import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle, FaRegDotCircle } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Paket4H3MSection() {
  return (
    <div className="py-10">
      <h2 className="text-xl">Paket 4H3M</h2>
      <div>
        <span className="text-sm text-slate-600">Paket tour 4H3M *(3.125.000/orang)</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
          <div className="sm:py-4">
            <Image
              src={"/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
              width={900}
              height={900}
              alt="Paket 4H3M"
              className="rounded-lg shadow-lg" />
          </div>
          <div className="mt-4 border rounded-lg shadow-lg p-4 text-xs sm:text-sm">
            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 1 (Sasak Tour)
            </div>
            <ul className="mb-2">
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Penjemputan di bandara sesuai dengan jadwal kedatangan (max jam 12)</span></li>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Desa Sade Rumah tradisional susu Sasak</span></li>
              <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 2 (pantai pink tour)
            </div>
            <ul className="mb-2">
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan tanjung luar</span></li>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">gili pasir (foto) Daratan pasir yang timbul apabila air laut lagi surut</span></li>
              <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 3(Trawangan Tour)
            </div>
            <ul>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</span></li>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Villa hantu (foto)</span></li>
              <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 4 (Sembalun dan waterfall)
            </div>
            <ul>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</span></li>
              <li className="flex gap-1">
                <span>-</span><span className="text-wrap">Makan siang di lokal restauran melanjutkan perjalanan menuju bukit pusuk Sembalun</span></li>
              <li className="">
                ...</li>
            </ul>

            <Link href={'/paket/paket4h3m'} className="mt-2 flex gap-1 items-center text-primary">Selengkapnya <HiArrowLongRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}