import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Nav = () => {
  let links = [
    { name: "clients", link: "/" },
    { name: "achievements", link: "/" },
    { name: "partners", link: "/" },
    { name: "contact", link: "/" }
  ]
  let [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

  return (
    <div className="shadow-md w-full fixed top-0 left-0 text-white z-20">
      <div className="md:flex items-center justify-between bg-black md:px-10 px-7">
        <div className="cursor-pointer flex items-center my-[-12px]">
          <span>
            <img src="icons/logo_tellTheVision.svg" alt="Tell The Vision Logo" className="h-44 w-44 min-h-44 min-w-44" />
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden mt-5">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full justify-around md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-[113px] opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}
        font-Regular text-white transform scale-y-125 text-center text-lg tracking-[0.5rem] pb-4 mr-10 textShadow`}>
          {
            links.map((link) => (
              <li key={link.name} className="text-2xl md:my-0 my-7">
                <span className="hover:text-gray-400 duration-500 cursor-pointer">{t(link.name).toUpperCase()}</span>
              </li>
            ))
          }

        </ul>
        <div className="hidden md:block">
          <img src="icons/ico-eng.svg" onClick={() => i18n.changeLanguage("en")} className="h-12 w-8 cursor-pointer hover:opacity-60 duration-500" alt="EN" />
          <img src="icons/ico-fr.svg" onClick={() => i18n.changeLanguage("fr")} className="h-12 w-8 cursor-pointer hover:opacity-60 duration-500" alt="FR" />
        </div>
      </div>
    </div>
  )
}

export default Nav