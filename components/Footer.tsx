import { FaInstagram } from "react-icons/fa";
import { MdFacebook, MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";

export default function FooterSection() {
  return (
    <>
    <div className="bg-slate-200 py-20" id="footer">
      <div className="w-4/5 mx-auto">
        <h2 className="mb-5 text-slate-700">Kontak kami</h2>
        <div className="flex gap-1 items-center text-sm">
          <MdOutlineWhatsapp /> +62818946XXX
        </div>
        <div className="flex gap-1 items-center text-sm">
          <MdOutlineMail /> tour&travel@gmail.com
        </div>
        <div className="flex gap-1 items-center text-sm">
          <MdFacebook /> Tour & Travel
        </div>
        <div className="flex gap-1 items-center text-sm">
          <FaInstagram /> tour_&_travel
        </div>
      </div>
    </div>
    <div className="bg-slate-900 text-white flex justify-center py-1 text-xs">All rights reserved <span className="font-bold ms-1"> Tour & Travel</span></div>
    </>
  )
}