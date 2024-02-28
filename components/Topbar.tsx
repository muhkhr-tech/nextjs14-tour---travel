'use client'

import { useRouter } from "next/navigation";
import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";

export default function TopbarSection() {
  const router = useRouter()

  const handleChangeLanguage = (e: any) => {
    router.push("?lang="+e.target.value)
  }

  return (
    <div className="py-1 text-slate-700 p-0 m-0 bg-slate-100 text-xs">
      <div className="px-4 sm:w-3/5 mx-auto">
        <div className="flex-none">
          <ul className="sm:flex flex-end sm:flex-start gap-5">
            <li className="hidden sm:block">
              <div className="flex gap-1 items-center">
                <MdOutlineWhatsapp /> +62818946XXX
              </div>
            </li>
            <li className="hidden sm:block">
              <div className="flex gap-1 items-center">
                <MdOutlineMail /> tour&travel@gmail.com
              </div>
            </li>
            <li className="ms-auto">
              <div className="flex gap-1 items-center">
                <button value="eng" onClick={handleChangeLanguage}>ENG</button> | <button value="id" onClick={handleChangeLanguage}>ID</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}