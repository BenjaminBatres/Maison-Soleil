import * as motion from "motion/react-client";
export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-10"
    >
      <motion.div className="space-y-2">
        <h3 className="text-Neutral-600 uppercase text-xs font-dm-mono tracking-[2px]">
          Booking &middot; confirmed
        </h3>
        <h2 className="text-Neutral-900 font-fraunces text-[40px] leading-[140%]">
          Bienvenue, <span className="text-Terracotta-600 italic">Lucia.</span>
        </h2>
      </motion.div>
      <div className="flex flex-wrap xs-mobile:flex-nowrap gap-4">
        <button className="py-2.5 px-4 w-full md:w-auto border border-Neutral-900 rounded-full text-Neutral-900 font-dm-sans text-sm font-semibold tracking-[0.3px] hover:bg-Neutral-400 duration-200 cursor-not-allowed">
          Print receipt
        </button>
        <button className="py-2.5 px-4 w-full md:w-auto border border-Neutral-900 rounded-full text-sm bg-Neutral-900 font-dm-sans font-semibold text-Sun-50 hover:bg-Neutral-800 duration-200 cursor-not-allowed">
          Add to calendar
        </button>
      </div>
    </motion.div>
  );
}
