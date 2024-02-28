import Image from "next/image";
import Link from "next/link";

export default function Paket4H3MSection() {
  return (
    <div className="relative">
      <Link href={"/paket/paket4h3m"}>
        <Image
          src={"/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
          width={900}
          height={900}
          alt="Paket 4H3M"
          className="rounded-lg shadow-lg hover:scale-95 duration-500 hover:opacity-75" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-2xl">Paket 4H3M</h2>
          <span className="text-xs">3.125.000/orang</span>
        </div>
      </Link>
    </div>
  )
}