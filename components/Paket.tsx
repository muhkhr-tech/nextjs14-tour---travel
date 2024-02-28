import Paket3H2MSection from "./Paket3h2m";
import Paket4H3MSection from "./Paket4h3m";

export default function PaketSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <Paket3H2MSection />
      <Paket4H3MSection />
    </div>
  )
}