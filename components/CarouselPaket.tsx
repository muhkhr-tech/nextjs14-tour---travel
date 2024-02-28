'use client'
import Image from "next/image";
import { useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export default function CarouselPaket() {
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleScrollLeft = () => {
    setScrollLeft(scrollLeft + 1)
  }

  return (
    <div className="relative">
      <div className="carousel carousel-center space-x-3 mt-4 border p-4 rounded-md">
        <div className="carousel-item">
          <img className="rounded-md w-52 sm:w-full" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="carousel-item relative w-52 sm:w-72">
          <Image
            src={"/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
            layout="fill"
            alt="Paket 4H3M"

            className="rounded-md" />
        </div>
        <div className="carousel-item">
          <img className="rounded-md w-52 sm:w-full" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="carousel-item">
          <img className="rounded-md w-52 sm:w-full" src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="carousel-item">
          <img className="rounded-md w-52 sm:w-full" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
      {/* <button className="absolute top-1/2 left-2 -translate-y-1/2 z-10 btn btn-sm btn-circle">
            <HiArrowLongLeft/>
          </button>
          <button className="absolute top-1/2 right-2 -translate-y-1/2 btn btn-sm btn-circle">
            <HiArrowLongRight />
          </button> */}
    </div>
  )
}