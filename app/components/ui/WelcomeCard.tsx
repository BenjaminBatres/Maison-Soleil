import SunIcon from "../../assets/images/icon-sun.svg";
import Image from "next/image";
import * as motion from "motion/react-client";
export default function WelcomeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 flex flex-col justify-between bg-radial-[at_100%_0%] from-Terracotta-400 via-Terracotta-500 to-Terracotta-700 rounded-[20px] h-112 w-[90%] sm:w-80 lg:w-88 xl:w-100 space-y-4 duration-500 lg:group-hover:translate-x-1/4 lg:group-hover:-rotate-4 rotate-2 sm:rotate-4 shadow-[0_22px_40px_-10px] shadow-Terracotta-400"
    >
      <div>
        <div className="border-t border-dashed border-Neutral-400 pt-5 pb-10 relative ">
          <h3 className="uppercase text-Sun-50 text-[10px] tracking-[1px]">
            Welcome Card
          </h3>
          <Image src={SunIcon} alt="" className="absolute right-0 top-1/4" />
        </div>
        <h3 className="font-fraunces italic text-Sun-200 text-xl mb-2">
          A note from your host,
        </h3>
        <h2 className="text-[40px] font-fraunces italic tracking-[-0.5px] leading-[120%] text-Sun-5 mb-6">
          Margaux.
        </h2>
        <p className="text-sm font-dm-sans text-Sun-50">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>
      <div>
        <p className="font-dm-mono text-[10px] tracking-[1px] uppercase leading-[140%]">
          Room
        </p>
        <h3 className="text-xl font-fraunces tracking-[-0.1px] text-Sun-50">
          La Garrigue
        </h3>
      </div>
    </motion.div>
  );
}
