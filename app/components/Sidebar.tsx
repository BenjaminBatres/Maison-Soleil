import { useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import Image from "next/image";
import BedIcon from "../assets/images/icon-bed.svg";
import HouseIcon from "../assets/images/icon-house.svg";
import LocationIcon from "../assets/images/icon-pin.svg";
import BellIcon from "../assets/images/icon-breakfast-outline.svg";
import MailIcon from "../assets/images/icon-mail.svg";
import WeatherIcon from "../assets/images/icon-weather.svg";
import CloseIcon from "../assets/images/icon-close.svg";
export default function Sidebar({ isOpen, setIsOpen }: any) {
  const links = [
    {
      icon: BedIcon,
      name: "Your stay",
    },
    {
      icon: HouseIcon,
      name: "Home",
    },
    {
      icon: LocationIcon,
      name: "Around town",
    },
    {
      icon: BellIcon,
      name: "Breakfast",
    },
    {
      icon: MailIcon,
      name: "Messages",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 duration-300 ${isOpen ? "bg-Neutral-900/70" : "pointer-events-none"} z-10`}
      />
      <div
        className={`${isOpen ? "opacity-100 translate-x-0 w-[90%] sm:w-auto" : " -translate-x-full w-65"} lg:translate-x-0 z-10 bg-Neutral-200 duration-300 fixed top-0 left-0 h-screen  border-r border-Neutral-400 py-4 px-4 flex flex-col justify-between`}
      >
        <div>
          <div className="border-b border-Neutral-400 pb-4 flex justify-between">
            <Image src={Logo} alt="logo" />
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer lg:hidden"
            >
              <Image
                src={CloseIcon}
                alt=""
                className="h-8 w-8 border border-Neutral-400 flex justify-center items-center rounded-sm "
              />
            </button>
          </div>
          <ul className="space-y-2 mt-5">
            {links.map((link, id) => (
              <li
                className={`flex justify-between items-center py-3 px-2.5 first:bg-white rounded-sm hover:bg-white ${id !== 0 && "hover:cursor-not-allowed"}`}
                key={id}
              >
                <div className="flex gap-2">
                  <Image src={link.icon} alt="" width={20} height={20} />
                  <span className="text-neutral-700 font-dm-sans text-sm font-medium">
                    {link.name}
                  </span>
                </div>
                {0 === id && (
                  <div className="w-4 h-4 flex justify-center items-center text-xs font-dm-sans rounded-full bg-Terracotta-600">
                    1
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-Sun-300 py-4 px-3 rounded-2xl relative overflow-hidden mb-5">
            <p className="font-dm-mono uppercase text-[10px] text-Neutral-700">
              Today in cassis
            </p>
            <h3 className="text-neutral-900 text-[32px] leading-[120%] font-fraunces">
              27&deg;
            </h3>
            <p className="text-Neutral-700 text-sm font-dm-sans tracking-[0.4px]">
              Sunny &sdot; light breeze
            </p>
            <figure className="absolute -right-5 -top-8">
              <Image src={WeatherIcon} alt="" />
            </figure>
          </div>
          <div className="border-t border-Neutral-400 pt-4 font-dm-mono tracking-[1px] text-[10px] leading-[140%] space-y-2.5 uppercase text-Neutral-600">
            <p>EST. 1987</p>
            <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
            <p>© 2026 Maison Soleil</p>
          </div>
        </div>
      </div>
    </>
  );
}
