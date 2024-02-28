import Link from "next/link";
import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";

export default function TopbarSection() {
  return (
    <div className="hidden sm:block py-1 text-slate-700 p-0 m-0 bg-slate-100 text-xs">
      <div className="w-3/5 mx-auto">
        <div className="flex-none">
          <ul className="hidden sm:flex gap-5">
            <li>
              <div className="flex gap-1 items-center">
                <MdOutlineWhatsapp /> +62818946XXX
              </div>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                <MdOutlineMail /> tour&travel@gmail.com
              </div>
            </li>
            {/* <li className="ms-auto">
              <div className="flex gap-1 items-center">
                <Link href={""}>ENG | ID</Link>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}