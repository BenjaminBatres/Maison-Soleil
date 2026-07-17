"use client";
import React, { useEffect, useRef } from "react";
import KeysIcon from "../assets/images/icon-key.svg";
import WifiIcon from "../assets/images/icon-wifi.svg";
import BreakfastIcon from "../assets/images/icon-breakfast.svg";
import Card from "./ui/Card";
import { motion, useAnimation, useInView } from "motion/react";

export default function CardsSection() {
  const cards = [
    {
      icon: KeysIcon,
      color: "text-Terracotta-600",
      bgColor: "bg-Terracotta-600",
      title: "Arrival",
      subtitle: "Check-in from 15:00",
      info: "Sat, 25 April",
      description:
        "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
    },
    {
      icon: WifiIcon,
      color: "text-Blue-500",
      bgColor: "bg-Blue-500",
      title: "Wifi",
      subtitle: "Le Soleil · Guest",
      info: "Passowrd Below",
      networkInfo: [
        {
          title: "Network",
          name: "Le Soleil · Guest",
        },
        {
          title: "Password",
          name: "soleil-2026",
        },
      ],
    },
    {
      icon: BreakfastIcon,
      color: "text-Rose-500",
      bgColor: "bg-Rose-500",
      title: "Breakfast",
      subtitle: "Served 8 – 10:30",
      info: "On the terrace",
      description:
        "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      variants={container}
      animate={mainControls}
      className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-between px-4 sm:px-06 lg:px-10"
    >
      {cards.map((card, id) => (
        <Card
          key={id}
          color={card.color}
          id={id}
          icon={card.icon}
          bgColor={card.bgColor}
          title={card.title}
          subtitle={card.subtitle}
          info={card.info}
          description={card.description}
          networkInfo={card.networkInfo}
          item={item}
        />
      ))}
    </motion.div>
  );
}
