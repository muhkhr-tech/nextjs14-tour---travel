'use client'

import { useRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function CarouselPaket() {
  const carouselRef = useRef<any>(null)

  const handleScrollLeft = () => {
    if (carouselRef.current) {
       carouselRef.current.scrollLeft -= 200
    }
  }

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200
   }
  }

  return (
    <div className="relative">
      <div ref={carouselRef} className="carousel carousel-center space-x-3 mt-4 border p-4 rounded-md">
        <div className="carousel-item">
          <img className="rounded-md w-52 sm:w-full" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
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
      <button onClick={handleScrollLeft}
        className="hidden sm:flex absolute top-1/2 left-2 -translate-y-1/2 z-10 btn btn-sm btn-circle">
        <HiChevronLeft />
      </button>
      <button onClick={handleScrollRight}
      className="hidden sm:flex absolute top-1/2 right-2 -translate-y-1/2 btn btn-sm btn-circle">
        <HiChevronRight />
      </button>
    </div>
  )
}