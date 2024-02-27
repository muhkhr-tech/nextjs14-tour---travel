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
        <div className="grid grid-cols-2 gap-10">
          <div className="py-4">
            <Image
              src={"/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
              width={900}
              height={900}
              alt="Paket 4H3M"
              className="rounded-lg shadow-lg" />
          </div>
          <div className="mt-4 border rounded-lg shadow-lg p-4 text-sm">
            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 1 (Sasak Tour)
            </div>
            <ul className="mb-2">
              <li className="flex items-center gap-1">
                - Penjemputan di bandara sesuai dengan jadwal kedatangan (max jam 12)</li>
              <li className="flex items-center gap-1">
                - Desa Sade Rumah tradisional susu Sasak</li>
                <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 2 (pantai pink tour)
            </div>
            <ul className="mb-2">
              <li className="flex items-center gap-1">
                - Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan tanjung luar</li>
              <li className="flex items-center gap-1">
                - gili pasir (foto) Daratan pasir yang timbul apabila air laut lagi surut</li>
                <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 3(Trawangan Tour)
            </div>
            <ul>
              <li className="flex items-center gap-1">
                - Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</li>
              <li className="flex items-center gap-1">
                - Villa hantu (foto)</li>
                <li className="">
                ...</li>
            </ul>

            <div className="flex gap-1 items-center text-slate-600">
              <FaRegCheckCircle />
              Day 4 (Sembalun dan waterfall)
            </div>
            <ul>
              <li className="flex items-center gap-1">
                - Sarapan di hotel Berangkat sesuai waktu yang telah di sepakati untuk menju pelabuhan bangsal</li>
              <li className="flex items-center gap-1">
                - Makan siang di lokal restauran melanjutkan perjalanan menuju bukit pusuk Sembalun</li>
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