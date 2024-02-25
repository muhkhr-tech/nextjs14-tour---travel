import Image from "next/image";

export default function BannerSection() {
	return (
		<div className="relative w-screen max-w-full bg-black bg-gradient-to-br">
			<Image
				src="/banner2.jpg"
				width={900}
				height={500}
				alt="banner 1"
				// layout="fill"
				// objectFit="cover"
				className="w-full opacity-70" />
			<div className="absolute left-0 right-0 top-0 bottom-0 m-auto mt-64 text-white text-2xl text-bold">
				<h1 className="text-center mb-2">selamat datang di Tour & Travel</h1>
				<div className="text-center text-5xl type-welcome"></div>
			</div>
		</div>
	)
}