import Image from "next/image";

export default function BannerSection() {
  return (
    <div className="relative sm:overflow-hidden max-h-80 w-screen max-w-full bg-black bg-gradient-to-br">
      <Image
        src="/reisetopia-XEr5JtR6gnw-unsplash.jpg"
        width={900}
        height={900}
        alt="banner 1"
        className="w-full opacity-70 sm:-mt-52" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md sm:text-2xl text-center text-bold">
        <h1 className="mb-2">selamat datang di Tour & Travel</h1>
        <div className="text-lg sm:text-5xl type-welcome"></div>
      </div>
    </div>
  )
}