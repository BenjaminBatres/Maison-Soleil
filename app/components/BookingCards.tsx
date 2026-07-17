import Image from "next/image";
import RecieptCard from "./ui/RecieptCard";
import WelcomeCard from "./ui/WelcomeCard";
import SunIcon from "../assets/images/illustration-sun.svg";
import SparkleIcon from "../assets/images/icon-sparkle.svg";
export default function BookingCards() {
  return (
    <div className="relative lg:overflow-x-hidden 2xl:overflow-x-visible group max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col-reverse gap-6 items-center sm:flex-row justify-center mb-5">
        <RecieptCard />
        <Image
          src={SunIcon}
          alt=""
          loading="eager"
          className="absolute top-[40%] opacity-0 lg:group-hover:opacity-100 duration-500"
        />
        <WelcomeCard />
      </div>
      <p className="text-[10px] font-dm-mono tracking-[1px] uppercase text-Neutral-600 flex justify-center gap-2">
        <Image src={SparkleIcon} alt="" className="w-auto" loading="eager" />{" "}
        Hover to fan{" "}
        <Image src={SparkleIcon} alt="" className="w-auto" loading="eager" />
      </p>
    </div>
  );
}
