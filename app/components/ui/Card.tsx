import Image from "next/image";
import { motion } from "motion/react";
interface NetworkInfo {
  title: string;
  name: string;
}
interface Card {
  id: number;
  color: string;
  bgColor: string;
  icon: string;
  title: string;
  subtitle: string;
  info: string;
  description?: string;
  networkInfo?: NetworkInfo[];
  item: any;
}
export default function Card({
  id,
  title,
  bgColor,
  subtitle,
  info,
  description,
  networkInfo,
  icon,
  color,
  item
}: Card) {
  return (
    <motion.div variants={item} className="bg-Neutral-50 py-6 px-5 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt=""
            loading="eager"
            className={`h-9 w-9 ${bgColor}`}
          />
          <h3
            className={`${color} font-dm-mono uppercase text-sm tracking-[2px] font-medium`}
          >
            {title}
          </h3>
        </div>
        <p className={`${color} text-2xl font-fraunces `}>0{id + 1}</p>
      </div>
      <h2 className="text-neutral-900 text-2xl font-fraunces mb-3">
        {subtitle}
      </h2>
      <p className="text-neutral-600 font-dm-sans text-xs tracking-[0.4px] mb-6">
        {info}
      </p>
      {description && (
        <p className="text-Neutral-700 text-sm ">{description}</p>
      )}
      {networkInfo && (
        <div className="space-y-1.5">
          {networkInfo.map((network, id) => (
            <div
              key={id}
              className="flex justify-between bg-Neutral-200 px-2.5 py-1.5 rounded-sm"
            >
              <p className="text-Neutral-600 text-sm font-dm-mono uppercase tracking-[2px]">
                {network.title}
              </p>
              <p className="text-Neutral-900 text-sm font-dm-sans tracking-[0.4px]">
                {network.name}{" "}
                {id === 1 && (
                  <span className="border border-Neutral-400 rounded-full px-2 pt-1 pb-px uppercase text-[10px] cursor-not-allowed">
                    copy
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
