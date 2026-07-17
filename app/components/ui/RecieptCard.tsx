import Barcode from "../../assets/images/icon-barcode.svg";
import Image from "next/image";
import * as motion from "motion/react-client";
export default function RecieptCard() {
  const checkInOutInfo = [
    {
      id: "in",
      date: "25 Apr",
      day: "Saturday · 15:00",
    },
    {
      id: "out",
      date: "29 Apr",
      day: `Wednesday · 11:00`,
    },
  ];

  const recieptItems = [
    {
      item: "Room · La Garrigue × 4 nights",
      price: "620.00",
    },
    {
      item: "Breakfast × 2 guests",
      price: "96.00",
    },
    {
      item: "Tourist tax",
      price: "14.40",
    },
  ];

  const recieptBottomInfo = ["Paid", " Wise", "Gbp"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-Neutral-50 rounded-[20px] w-[90%] sm:w-80 lg:w-88 xl:w-100 space-y-4 lg:group-hover:rotate-4 lg:group-hover:-translate-x-1/4 -rotate-2 sm:-rotate-4 duration-500 shadow-xl"
    >
      <div className="flex justify-between">
        <div className="space-y-1">
          <p className="text-Neutral-600 text-[10px] font-dm-mono uppercase tracking-[1px]">
            Receipt
          </p>
          <h3 className="text-Neutral-900 font-fraunces tracking-[-0.1px] text-xl">
            Your stay
          </h3>
        </div>
        <div className="text-Neutral-600 text-[10px] font-dm-mono">
          <p>№ MS-2026</p>
          <p className="text-right">0421-AH</p>
        </div>
      </div>
      <div className="flex justify-between lg:justify-around border-y border-dashed border-Neutral-400 py-6">
        {checkInOutInfo.map((check) => (
          <div key={check.id} className="text-center">
            <p className="mb-2 text-Neutral-600 text-[10px] font-dm-mono uppercase tracking-[1px]">
              Check {check.id}
            </p>
            <h2 className="text-Neutral-900 font-fraunces text-[32px] leading-[120%] mb-1">
              {check.date}
            </h2>
            <p className="text-Neutral-700 text-xs font-dm-sans leading-[120%]">
              {check.day}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-2.5 pb-6 border-b border-Neutral-600">
        {recieptItems.map((recieptItem, id) => (
          <div key={id} className="flex justify-between">
            <p
              className={`${id === 2 ? "text-Neutral-700" : "text-neutral-900"} font-dm-sans text-sm`}
            >
              {recieptItem.item}
            </p>
            <p
              className={`${id === 2 ? "text-Neutral-700" : "text-neutral-900"} text-xs leading-[140%]`}
            >
              € {recieptItem.price}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end">
        <p className="text-neutral-600 font-dm-mono text-xs uppercase mb-1 tracking-[2px]">
          Total Paid
        </p>
        <h2 className="text-Neutral-900 font-fraunces text-2xl leading-[140%]">
          € 730.40
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {recieptBottomInfo.map((info, id) => (
            <div
              key={id}
              className="text-neutral-600 font-dm-mono text-[10px] uppercase mb-1 tracking-[2px]"
            >
              <span>{info}</span>
              {id < 2 && <span>·</span>}
            </div>
          ))}
        </div>
        <Image src={Barcode} alt="" />
      </div>
    </motion.div>
  );
}
