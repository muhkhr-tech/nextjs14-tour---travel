import Paket4H3MSection from "./paket4h3m";

export default function PaketDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug=='paket4h3m') {
    return <Paket4H3MSection/>
  }
}