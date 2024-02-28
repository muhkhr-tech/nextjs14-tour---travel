import Image from "next/image";
import Link from "next/link";

export default function Paket3H2MSection() {
  return (
    <div className="relative">
      <Link href={"/paket/paket3h2m"}>
        <Image
          src={"/jorg-angeli-1tyuLfDOnG0-unsplash.jpg"}
          width={900}
          height={900}
          alt="Paket 3H2M"
          className="rounded-lg shadow-lg hover:scale-95 duration-500 hover:opacity-75" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-2xl">Paket 3H2M</h2>
          <span className="text-xs">1.600.000/orang</span>
        </div>
      </Link>
    </div>
  )
}