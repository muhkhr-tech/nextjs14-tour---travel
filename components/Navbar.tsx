import Link from "next/link";

export default function NavbarSection() {
  return (
    <div className="navbar text-slate-700 p-0 bg-base-100">
      <div className=" w-3/5 mx-auto">
        <div className="flex-1">
          <Link href={"/"} className="text-xl">T&T</Link>
        </div>
        <div className="flex-none">
          <ul className="hidden sm:flex menu menu-horizontal gap-1">
            <li><Link href={"/#paket"}>Paket</Link></li>
            <li><Link href={"/#footer"}>Kontak</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}