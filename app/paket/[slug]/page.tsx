import Paket3H2MSection from "./paket3h2m";
import Paket4H3MSection from "./paket4h3m";

export default function PaketDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug.toLowerCase()=='paket4h3m') {
    return <Paket4H3MSection slug={params.slug}/>
  } else if (params.slug.toLowerCase()=='paket3h2m') {
    return <Paket3H2MSection slug={params.slug}/>
  } else {
    return (
      <h2 className="py-32 bg-slate-100 text-xl flex justify-center">Paket tidak ditemukan!</h2>
    )
  }
}